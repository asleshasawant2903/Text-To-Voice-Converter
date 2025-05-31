// let speech = new SpeechSynthesisUtterance();

//  document.text = document.querySelector("button").addEventListener("click", ()=>{
//     speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech)
//  })



 let speech = new SpeechSynthesisUtterance();

 document.querySelector("button").addEventListener("click", () => {
     speech.text = document.querySelector("textarea").value;
     window.speechSynthesis.speak(speech);
 });