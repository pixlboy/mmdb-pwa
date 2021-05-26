let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

function getSpeechRecognition(){

  // not sure if recognition is available
  if(SpeechRecognition){
    // if recognition is not created
    // create it and return to caller
    if(!recognition){
      createRecognitionObject();
    }
    return recognition;
  }

  // if no support available, return false to caller
  return SpeechRecognition;
  
}

function createRecognitionObject(){

  recognition = new SpeechRecognition();

    /*-----------------------------
          Voice Recognition 
    ------------------------------*/
  
    // If false, the recording will stop after a few seconds of silence.
    // When true, the silence period is longer (about 15 seconds),
    // allowing us to keep recording even when the user pauses. 
    recognition.continuous = false;
  
    recognition.onstart = () => { 
      console.log('Voice recognition activated. Try speaking into the microphone.');
    }
  
    recognition.onspeechend = () => {
      console.log('You were quiet for a while so voice recognition turned itself off.');
    }
  
    recognition.onerror = (event) => {
      if(event.error === 'no-speech') {
        console.log('No speech was detected. Try again.'); 
        return event.error; 
      };
    }
 
}

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

export {
  readOutLoud,
  getSpeechRecognition
}