// document.getElementById("startBtn").addEventListener("click", function () {
//     let intro = document.querySelector(".intro");
//     let container = document.querySelector(".container");

//     // Smoothly fade out intro and show the Q&A section
//     intro.style.opacity = "0";
//     intro.style.transform = "scale(0.9)";
//     setTimeout(() => {
//         intro.style.display = "none"; // Hide intro
//         container.style.display = "flex"; // Show main layout
//     }, 500);
// });

// function toggleAnswer(element, direction) {
//     let answerContainer = document.querySelector(".answer-container");
//     let answerBox = document.getElementById("answer-text");
//     let text = element.querySelector(".answer").getAttribute("data-text");

//     // Show and slide in the answer container
//     answerContainer.style.display = "flex"; // Make it visible
//     setTimeout(() => {
//         answerContainer.classList.add("active"); // Slide it in
//     }, 50);

//     // Reset answer text
//     answerBox.innerHTML = "";
//     answerBox.style.opacity = "0";

//     // Animate answer appearing word by word
//     let words = text.split(" ");
//     let i = 0;
//     let speed = 50;

//     function addWord() {
//         if (i < words.length) {
//             answerBox.innerHTML += words[i] + " ";
//             i++;
//             setTimeout(addWord, speed);
//         } else {
//             answerBox.style.opacity = "1";
//         }
//     }

//     addWord();
// }


// document.getElementById("startBtn").addEventListener("click", function () {
//     let intro = document.querySelector(".intro");
//     let container = document.querySelector(".container");

//     // Smoothly fade out intro and show the Q&A section
//     intro.style.opacity = "0";
//     intro.style.transform = "scale(0.9)";
//     setTimeout(() => {
//         intro.style.display = "none"; // Hide intro
//         container.style.display = "flex"; // Show main layout
//     }, 500);
// });


// function toggleAnswer(element, direction) {
//     let answerContainer = document.querySelector(".answer-container");
//     let answerBox = document.getElementById("answer-text");
//     let text = element.querySelector(".answer").getAttribute("data-text");

//     // Show and slide in the answer container
//     answerContainer.style.display = "flex"; // Make it visible
//     setTimeout(() => {
//         answerContainer.classList.add("active"); // Slide it in
//     }, 50);

//     // Reset answer text
//     answerBox.innerHTML = "";
//     answerBox.style.opacity = "0";

//     // Convert new lines to <br> for proper formatting
//     let formattedText = text.replace(/(?:\r\n|\r|\n)/g, "<br>");

//     // Split text into words for animation
//     let words = formattedText.split(" ");
//     let totalWords = words.length;

//     // Dynamically adjust speed for long answers
//     let baseSpeed = 50;
//     let speed = totalWords > 20 ? 5 : baseSpeed;

//     let i = 0;

//     function addWord() {
//         if (i < words.length) {
//             answerBox.innerHTML += words[i] + " ";
//             i++;
//             setTimeout(addWord, speed);
//         } else {
//             answerBox.style.opacity = "1";
//         }
//     }

//     addWord();
// }



document.addEventListener("DOMContentLoaded", function () {
    let startBtn = document.getElementById("startBtn");
    let intro = document.querySelector(".intro");
    let container = document.querySelector(".container");

    // ✅ Ensure the Start button works properly
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

// function toggleAnswer(element, direction) {
//     let answerContainer = document.querySelector(".answer-container");
//     let answerBox = document.getElementById("answer-text");
//     let text = element.querySelector(".answer").getAttribute("data-text");

//     // Show and slide in the answer container
//     answerContainer.style.display = "flex"; // Make it visible
//     setTimeout(() => {
//         answerContainer.classList.add("active"); // Slide it in
//     }, 50);

//     // Reset answer text
//     answerBox.innerHTML = "";
//     answerBox.style.opacity = "0";

//     // ✅ First, display "The answer" at the top
//     let firstPart = `<span class="answer-title">The answer</span><br><br>`; 
//     let remainingText = text.replace("The answer", ""); // Remove "The answer" from main text

//     // ✅ Convert new lines (\n) to <br> for proper formatting
//     let formattedText = remainingText.replace(/(?:\r\n|\r|\n)/g, "<br>");

//     // ✅ Set "The answer" and prepare space for the actual answer
//     answerBox.innerHTML = firstPart;
//     answerBox.style.opacity = "1"; // Make visible immediately

//     // ✅ Show the actual answer word by word, keeping line breaks
//     let words = formattedText.split(" ");
//     let i = 0;
//     let speed = words.length > 20 ? 20 : 50; // Adjust speed for long answers

//     function addWord() {
//         if (i < words.length) {
//             // Keep line breaks by checking for <br> tags
//             if (words[i] === "<br>") {
//                 answerBox.innerHTML += "<br>";
//             } else {
//                 answerBox.innerHTML += words[i] + " ";
//             }
//             i++;
//             setTimeout(addWord, speed);
//         }
//     }

//     setTimeout(addWord, 300); // Small delay before word animation
// }



// function toggleAnswer(element, direction) {
//     let answerContainer = document.querySelector(".answer-container");
//     let answerBox = document.getElementById("answer-text");
//     let text = element.querySelector(".answer").getAttribute("data-text");

//     // Show and slide in the answer container
//     answerContainer.style.display = "flex"; // Make it visible
//     setTimeout(() => {
//         answerContainer.classList.add("active"); // Slide it in
//     }, 50);

//     // Reset answer text
//     answerBox.innerHTML = "";
//     answerBox.style.opacity = "0";

//     // ✅ Center "The answer" properly
//     let firstPart = `<span class="answer-title">The answer</span><br><br>`; 
//     let remainingText = text.replace("The answer", ""); // Remove "The answer" from the main text

//     // ✅ Convert new lines (\n) to <br> for proper formatting
//     let formattedText = remainingText.replace(/(?:\r\n|\r|\n)/g, "<br>");

//     // ✅ Set "The answer" and prepare space for the actual answer
//     answerBox.innerHTML = firstPart;
//     answerBox.style.opacity = "1"; // Make visible immediately

//     // ✅ Show the actual answer word by word, keeping line breaks
//     let words = formattedText.split(" ");
//     let i = 0;
//     let speed = words.length > 20 ? 20 : 50; // Adjust speed for long answers

//     function addWord() {
//         if (i < words.length) {
//             // Keep line breaks by checking for <br> tags
//             if (words[i] === "<br>") {
//                 answerBox.innerHTML += "<br>";
//             } else {
//                 answerBox.innerHTML += words[i] + " ";
//             }
//             i++;
//             setTimeout(addWord, speed);
//         }
//     }

//     setTimeout(addWord, 300); // Small delay before word animation
// }


// function toggleAnswer(element, direction) {
//     let answerContainer = document.querySelector(".answer-container");
//     let answerText = document.getElementById("answer-text");
//     let text = element.querySelector(".answer").getAttribute("data-text");

//     // Show and slide in the answer container
//     answerContainer.style.display = "flex"; 
//     setTimeout(() => {
//         answerContainer.classList.add("active"); 
//     }, 50);

//     // ✅ Reset answer text
//     answerText.innerHTML = "";
//     answerText.style.opacity = "0";

//     // ✅ Extract the actual answer text (without "The answer")
//     let remainingText = text.replace("The answer", ""); 

//     // ✅ Convert line breaks (\n) to <br> for proper formatting
//     let formattedText = remainingText.replace(/(?:\r\n|\r|\n)/g, "<br>");

//     // ✅ Show the actual answer word by word
//     let words = formattedText.split(" ");
//     let i = 0;
//     let speed = words.length > 20 ? 20 : 50; 

//     function addWord() {
//         if (i < words.length) {
//             answerText.innerHTML += words[i] + " ";
//             i++;
//             setTimeout(addWord, speed);
//         }
//     }

//     setTimeout(() => {
//         answerText.style.opacity = "1"; 
//         addWord();
//     }, 300); 
// }


function toggleAnswer(element, direction) {
    let answerContainer = document.querySelector(".answer-container");
    let answerText = document.getElementById("answer-text");

    // Get the question number from the h3 inside the clicked question div
    let questionNumber = element.querySelector("h3").innerText.match(/^\d+/);
    
    // Get the actual answer from the data attribute
    let text = element.querySelector(".answer").getAttribute("data-text");

    // Ensure there is a number
    let formattedQuestionNumber = questionNumber ? `<span class="question-number">Q${questionNumber}:</span> ` : "";

    // ✅ Show and slide in the answer container (animation stays the same)
    answerContainer.style.display = "flex"; 
    setTimeout(() => {
        answerContainer.classList.add("active"); 
    }, 50);

    // ✅ Reset answer text
    answerText.innerHTML = "";
    answerText.style.opacity = "1"; // Make visible immediately

    // ✅ Convert new lines (\n) to <br> for proper formatting
    let formattedText = text.replace(/(?:\r\n|\r|\n)/g, "<br>");

    // ✅ Set "The answer" and include the question number before the answer
    answerText.innerHTML = formattedQuestionNumber; 

    let words = formattedText.split(" ");
    let i = 0;
    let speed = words.length > 20 ? 20 : 50; // Control speed for long answers

    function addWord() {
        if (i < words.length) {
            answerText.innerHTML += words[i] + " ";
            i++;
            setTimeout(addWord, speed);
        }
    }

    setTimeout(addWord, 300); // Add a small delay before animating the text
}








function showThankYou() {
    let thankYouText = document.getElementById("thank-you-text");
    thankYouText.innerText = "Thank you! 😊";
}
