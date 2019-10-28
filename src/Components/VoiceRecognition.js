import { Component } from 'react';
import React from 'react';
import socketIOClient from "socket.io-client";
import { isThisHour } from 'date-fns/esm';
import { nominalTypeHack } from 'prop-types';
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
        this.wordControl = [];
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
        this.fillForm = this.fillForm.bind(this);
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
        
        this.socket.on('speechData',this.fillForm);
        
    }
    fillForm(data){
        // console.log(data.results[0].alternatives[0])
    //    console.log(data.results[0])
       if(data.results[0].isFinal === false){
           console.log(data.results[0])
           let alternatives = data.results[0].alternatives
        //    let words = alternatives.map(alternative => {
        //        return alternative.words

        //    })
        
           let words =  alternatives.map(alternative => {
                return this.normalizeText(alternative.transcript).replace(" ","")
            })
           

           words.forEach(word => {
            //    console.log(word, "WORD")
               let normalizedKeys = Object.keys(this.props.prevState).map(key => {
                   return this.normalizeText(key)
               })
               let index = normalizedKeys.indexOf(this.normalizeText(word))
               if(index !== -1){
                   console.log(word)
                    this.props.handleChangeVR(Object.keys(this.props.prevState)[index])
               }
           });
     
       }

        //    for( let key in this.props.prevState){
        //         if(!this.wordControl.includes(key)){
        //             // console.log(transcripts, "A")
        //             if(transcripts.includes(this.normalizeText(key))){
        //                 this.props.handleChangeVR(key)
        //                 this.wordControl.push(key)
        //             }
        //         }else{
        //             // console.log(transcripts, "B")
        //             let count = this.wordControl.filter(word => word === key).length
        //             for(let i = 0; i < count; i++){
        //                 let index = transcripts.indexOf(key)
        //                 transcripts = transcripts.splice(index)
        //             }
        //             if(transcripts.includes(this.normalizeText(key))){
        //                 this.props.handleChangeVR(key)
        //                 this.wordControl.push(key)
        //             }
        //        }
        //    }

    //    } 
        // console.log("AAA")
    }

    normalizeText(text){

        text = text.toLowerCase();                                                         
        text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        text = text.replace(new RegExp('[Ç]','gi'), 'c');
        return text;   
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
