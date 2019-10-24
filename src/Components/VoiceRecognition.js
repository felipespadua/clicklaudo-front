import { Component } from 'react';
import React from 'react';
import socketIOClient from "socket.io-client";
// import io from "socket.io"

class VoiceRecognition extends Component {
    constructor(props) {
        super(props);
        this.socket = socketIOClient("http://localhost:5000")
        this.bufferSize = 2048;
        this.AudioContext = undefined;
        this.context = undefined;
        this.processor = undefined;
        this.input = undefined;
        this.globalStream = undefined;
        this.finalWord = false;
        this.removeLastSetence = true;

        // let audioElement = document.querySelector('audio'),
        //     finalWord = false,
        //     resultText = document.getElementById('ResultText'),
        //     removeLastSentence = true,
        //     streamStreaming = false;

        this.state = {
            response: false,
            streamStreaming: false,
            constraints: {
                audio: true,
                video: false
            }
        };
    }

    initRecording() {
        this.socket.emit('startGoogleCloudStream', ''); //init socket Google Speech Connection
        this.setState({ 
            streamStreaming: true, 
        }) 
        this.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.context = new AudioContext({
            // if Non-interactive, use 'playback' or 'balanced' // https://developer.mozilla.org/en-US/docs/Web/API/AudioContextLatencyCategory
            latencyHint: 'interactive',
        });
        this.processor = this.context.createScriptProcessor(this.bufferSize, 1, 1);
        this.processor.connect(this.context.destination);
        this.context.resume();
    
        let handleSuccess = function (stream) {
            this.globalStream = stream;
            this.input = this.context.createMediaStreamSource(stream);
            this.input.connect(this.processor);
    
            this.processor.onaudioprocess = function (e) {
                this.microphoneProcess(e);
            };
        };
    
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
    
        let track = this.globalStream.getTracks()[0];
        track.stop();
    
        this.input.disconnect(this.processor);
        this.processor.disconnect(this.context.destination);
        this.context.close().then(function () {
            this.input = null;
            this.processor = null;
            this.context = null;
            this.AudioContext = null
          
            // startButton.disabled : false,
     
           
        });
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

    componentDidMount() {
        // const { endpoint } = this.state;
        // const socket = socketIOClient(endpoint);
        // socket.on("FromAPI", data => this.setState({ response: data }));
        this.socket.on('connect', function (data) {
            this.socket.emit('join', 'Server Connected to Client');
        });
        
        
        this.socket.on('messages', function (data) {
            console.log("messages", data);
        });
        
        
        this.socket.on('speechData', function (data) {
            console.log("speechData",data)
    
        });
        
    }
    componentWillUnmount(){
        if (this.state.streamStreaming) { this.socket.emit('endGoogleCloudStream', ''); }
    }
    render(){
        return (
            <div className="wrapper">
                <h1>Google Cloud Speech Node with Socket.io Playground</h1>
                <audio></audio>
                <button id="startRecButton" onClick={(e) => this.startRecording(e)} type="button"> Start recording</button>
                <button id="stopRecButton"  onClick={(e) => this.stopRecording(e)} type="button"> Stop recording</button>
                <div id="recordingStatus">&nbsp;</div>
                <div>
                    <p id="ResultText">
                        <span className="greyText">No Speech to Text yet/</span>>
                    </p>
                </div>
            </div>
        );
    }
}

export default VoiceRecognition;
