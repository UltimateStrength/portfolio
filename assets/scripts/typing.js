const typedTextSpan = document.getElementById("typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Pixel Artist",
  "Software Entusiast",
  "Image Editor",
  "Translator",
  "Game Developer",
  "Hardware Entusiast",
  "Video Editor"
];

const typingDelay = 80;
const erasingDelay = 60;
const newTextDelay = 1200;
let textArrayIndex = 0;
let charIndex = 0;


function resetTyping() {
  if (typedTextSpan) {
    typedTextSpan.textContent = "";
    charIndex = 0;
  }
}

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newTextDelay);
});

function updateTypedText(newArray) {
  textArray.length = 0;
  newArray.forEach(t => textArray.push(t));
  textArrayIndex = 0;
  resetTyping();
}