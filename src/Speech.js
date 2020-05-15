import { subscriber, messageService } from './MessageService';

export default function SpeechRecognition(){

  let recognition = null;

  try {
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
  }
  catch(e) {
    console.error(e);
  }

  /*-----------------------------
        Voice Recognition 
  ------------------------------*/

  // If false, the recording will stop after a few seconds of silence.
  // When true, the silence period is longer (about 15 seconds),
  // allowing us to keep recording even when the user pauses. 
  recognition.continuous = false;

  // This block is called every time the Speech APi captures a line. 
  recognition.onresult = function(event) {
    // event is a SpeechRecognitionEvent object.
    // It holds all the lines we have captured so far. 
    // We only need the current one.
    let current = event.resultIndex;

    // Get a transcript of what was said.
    let transcript = event.results[current][0].transcript;

    // Add the current transcript to the contents of our Note.
    // There is a weird bug on mobile, where everything is repeated twice.
    // There is no official solution so far so we have to handle an edge case.
    // let mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

    // if(!mobileRepeatBug) {
      //searchInput.value = transcript;
      readOutLoud(transcript);
      messageService.sendSpeech(transcript);
    // }
  };

  recognition.onstart = () => { 
    console.log('Voice recognition activated. Try speaking into the microphone.');
  }

  recognition.onspeechend = () => {
    console.log('You were quiet for a while so voice recognition turned itself off.');
  }

  recognition.onerror = (event) => {
    if(event.error === 'no-speech') {
      console.log('No speech was detected. Try again.');  
    };
  }

  /*-----------------------------
        App buttons and input 
  ------------------------------*/

  subscriber.subscribe(query => {
    recognition.start();
    //
  });

  /*-----------------------------
        Speech Synthesis 
  ------------------------------*/

  function readOutLoud(message){
  	let speech = new SpeechSynthesisUtterance();

    // Set the text and voice attributes.
  	speech.text = message;
  	speech.volume = 1;
  	speech.rate = 1;
  	speech.pitch = 1;
    
  	window.speechSynthesis.speak(speech);
  }
}