let speech = new SpeechSynthesisUtterance();
let voices=[];
let voicebar = document.getElementById('voicebar');
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice= voices[0];
    voices.forEach((voice, i) => {
        voicebar.options[i] = new Option(voice.name, i);
    });
};
voicebar.addEventListener("change", ()=>{
    speech.voice=voices[voicebar.value];
})
function speak(){
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}
document.querySelector('.sherr').addEventListener("click", ()=>{
    speak();
    console.log("Speaking");
})
document.querySelector('.Clearr').addEventListener("click", () => {
    console.log("clearing Text-Area");
    document.querySelector("textarea").value="";
});
