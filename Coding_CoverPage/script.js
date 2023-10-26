// script.js
const sentences = ["Sentence 1", "Sentence 2", "Sentence 3"];
const sentenceContainer = document.querySelector(".sentence-container");
let sentenceIndex = 0;

function displayNextSentence() {
    sentenceContainer.textContent = sentences[sentenceIndex];
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
}

// Display the first sentence immediately
displayNextSentence();

// Change the sentence every 5 seconds
setInterval(displayNextSentence, 5000); // Adjust the interval as needed
