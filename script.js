function scrollProjects(){
document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});
}


const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

});
const words = ["Elton", "Web Developer", "System Designer", "UI Designer"];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

currentWord = words[wordIndex];

if(isDeleting){
letterIndex--;
}else{
letterIndex++;
}

document.querySelector(".typing").textContent = currentWord.substring(0, letterIndex);

let speed = 120;

if(!isDeleting && letterIndex === currentWord.length){
speed = 1500;
isDeleting = true;
}

else if(isDeleting && letterIndex === 0){
isDeleting = false;
wordIndex++;

if(wordIndex === words.length){
wordIndex = 0;
}

speed = 300;
}

setTimeout(typeEffect, speed);

}

typeEffect();