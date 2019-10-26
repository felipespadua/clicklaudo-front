import { Component } from 'react';
import React from 'react';
import socketIOClient from "socket.io-client";
// import io from "socket.io"
let globalStream = undefined;
let input = undefined;
let context = undefined;
let processor = undefined;

class VoiceRecognition extends Component {
    constructor(props) {
        super(props);
        this.socket = socketIOClient("http://localhost:5000")
        this.bufferSize = 2048;
        this.AudioContext = undefined;
        this.finalWord = false;
        this.removeLastSetence = true;

        this.state = {
            response: false,
            streamStreaming: false,
            constraints: {
                audio: true,
                video: false
            }
        };
        this.initRecording = this.initRecording.bind(this);
        this.startRecording = this.startRecording.bind(this);
        this.stopRecording = this.stopRecording.bind(this);
        this.microphoneProcess = this.microphoneProcess.bind(this);

    }

    initRecording() {
        this.socket.emit('startGoogleCloudStream', ''); //init socket Google Speech Connection
        this.setState({ 
            streamStreaming: true, 
        }) 
        this.AudioContext = window.AudioContext || window.webkitAudioContext;
        context = new AudioContext({
            // if Non-interactive, use 'playback' or 'balanced' // https://developer.mozilla.org/en-US/docs/Web/API/AudioContextLatencyCategory
            latencyHint: 'interactive',
        });
        processor = context.createScriptProcessor(this.bufferSize, 1, 1);
        processor.connect(context.destination);
        context.resume();

        //verificar isso
        let onAudioProcess = (e) => {
            this.microphoneProcess(e);
        }   
        let handleSuccess = function (stream) {
            globalStream = stream;
            input = context.createMediaStreamSource(stream);
            input.connect(processor);
            
            processor.onaudioprocess = onAudioProcess;   
    
        }
      

        navigator.mediaDevices.getUserMedia(this.state.constraints)
            .then(handleSuccess);
    
    }

    microphoneProcess(e) {
        var left = e.inputBuffer.getChannelData(0);
        // var left16 = convertFloat32ToInt16(left); // old 32 to 16 function
        var left16 = this.downsampleBuffer(left, 44100, 16000)
        this.socket.emit('binaryData', left16);
    }
    startRecording(e) {
        // startButton.disabled = true;
        // endButton.disabled = false;
        // recordingStatus.style.visibility = "visible";
        this.initRecording();
    }
    stopRecording(e) {
        // waited for FinalWord
        // startButton.disabled = false;
        // endButton.disabled = true;
        // recordingStatus.style.visibility = "hidden";
        // streamStreaming = false;
        this.socket.emit('endGoogleCloudStream', '');
    
        let track = globalStream.getTracks()[0];
        track.stop();
    
        input.disconnect(processor);
        processor.disconnect(context.destination);
        let closeContext = () => {
            input = null;
            processor = null;
            context = null;
            this.AudioContext = null
          
        }
        context.close().then(closeContext);
    }
    downsampleBuffer(buffer, sampleRate, outSampleRate) {
        if (outSampleRate == sampleRate) {
            return buffer;
        }
        if (outSampleRate > sampleRate) {
            throw new Error("downsampling rate show be smaller than original sample rate");
        }
        var sampleRateRatio = sampleRate / outSampleRate;
        var newLength = Math.round(buffer.length / sampleRateRatio);
        var result = new Int16Array(newLength);
        var offsetResult = 0;
        var offsetBuffer = 0;
        while (offsetResult < result.length) {
            var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
            var accum = 0, count = 0;
            for (var i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
                accum += buffer[i];
                count++;
            }
    
            result[offsetResult] = Math.min(1, accum / count) * 0x7FFF;
            offsetResult++;
            offsetBuffer = nextOffsetBuffer;
        }
        return result.buffer;
    }

    capitalize(s) {
        if (s.length < 1) {
            return s;
        }
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    updateState(){
        
    }

    componentDidMount() {
        // const { endpoint } = this.state;
        // const socket = socketIOClient(endpoint);
        // socket.on("FromAPI", data => this.setState({ response: data }));
        
        this.socket.on('connect', function (data) {
            // this.socket.emit('join', 'Server Connected to Client');
            console.log('Server Connected to Client',data)
        });
        
        
        this.socket.on('messages', function (data) {
            console.log("messages", data);
        });
        
        
        this.socket.on('speechData', function (data) {
            // console.log("speechData",data)
            if(data.results[0].isFinal === true && data.results[0].alternatives[0].confidence > 0.9){
                console.log(data.results[0].alternatives[0])
            }
    
        });
        
    }
    componentWillUnmount(){
        if (this.state.streamStreaming) { this.socket.emit('endGoogleCloudStream', ''); }
    }
    render(){
        return (
            <div className="wrapper">
                <audio></audio>
                <button id="startRecButton" onClick={(e) => this.startRecording(e)} type="button"> Start recording</button>
                <button id="stopRecButton"  onClick={(e) => this.stopRecording(e)} type="button"> Stop recording</button>
            </div>
        );
    }
}

export default VoiceRecognition;
