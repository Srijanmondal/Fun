let gif = document.getElementById('gif');
let text = document.getElementById('text');
let htext = document.getElementById('htext');
let btns = document.getElementsByClassName('btn');
function yes(){
  gif.src = "https://i.ibb.co/JsrVxKf/giphy-2.gif";
  htext.textContent = "I knew it 👽";
  text.textContent = "You sussy gay 🏳️‍🌈";
  btns[0].style.display = "none";
  btns[1].style.display = "none";
}
function no(){
  gif.src= "https://i.ibb.co/TvF4GL2/giphy-7.gif";
  text.textContent = "Are you sure 🧐";
  htext.textContent = "Umm, seems fishy 🤨";
  btns[0].style.display = "none";
}
