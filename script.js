
document.addEventListener("DOMContentLoaded", function () {
    let startBtn = document.getElementById("startBtn");
    let intro = document.querySelector(".intro");
    let container = document.querySelector(".container");

    startBtn.addEventListener("click", function () {
        // Smoothly hide intro section
        intro.style.opacity = "0";
        intro.style.transform = "scale(0.9)";

        setTimeout(() => {
            intro.style.display = "none"; // Hide intro completely
            container.style.display = "flex"; // Show main Q&A layout
        }, 500); // Short delay to allow fade-out effect
    });
});



function toggleAnswer(element, direction) {
    let answerContainer = document.querySelector(".answer-container");
    let answerText = document.getElementById("answer-text");

    
    let questionNumber = element.querySelector("h3").innerText.match(/^\d+/);
    
    // Get the actual answer from the data attribute
    let text = element.querySelector(".answer").getAttribute("data-text");

    // Ensure there is a number
    let formattedQuestionNumber = questionNumber ? `<span class="question-number">Q${questionNumber}:</span> ` : "";

    //  Show and slide in the answer container 
    answerContainer.style.display = "flex"; 
    setTimeout(() => {
        answerContainer.classList.add("active"); 
    }, 50);

    //  Reset answer text
    answerText.innerHTML = "";
    answerText.style.opacity = "1"; 

    //  Convert new lines (\n) to <br> for proper formatting
    let formattedText = text.replace(/(?:\r\n|\r|\n)/g, "<br>");

    // Set "The answer" and include the question number before the answer
    answerText.innerHTML = formattedQuestionNumber; 

    let words = formattedText.split(" ");
    let i = 0;
    let speed = words.length > 20 ? 20 : 50; 

    function addWord() {
        if (i < words.length) {
            answerText.innerHTML += words[i] + " ";
            i++;
            setTimeout(addWord, speed);
        }
    }

    setTimeout(addWord, 300); 
}



function showThankYou() {
    let thankYouText = document.getElementById("thank-you-text");
    thankYouText.innerText = "Thank you! 😊";
}
