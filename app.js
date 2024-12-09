/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let numA = 0;

let numB = 0;

let operation = '';

let result = 0;

/*------------------------ Cached Element References ------------------------*/

// creating a reference for the display div
const displayBar = document.querySelector(".display");

// creating references for clear and for equals special buttons

 const divsArray = Array.from(document.querySelectorAll('div'));  // Using Array.from method I turned all divs into an array
const clearButton = divsArray.find(div => div.textContent === 'C'); // I then used .find method to single out the div with the clear button with 'C' textcontent.
const equalsOperation = document.querySelector(".equals");

// creating references for all numbers and all operators
const numberEls = document.querySelectorAll(".number");
const operationEls = document.querySelectorAll(".operator");

/*-------------------------------- Functions --------------------------------*/

// I moved the functions above the event listeners as my eventlisteners wouldnt work without having the function being declared first

const clearDisplay = () => {
    displayBar.innerText = 0;
    numA = 0;
    numB = 0;
    operation = "";
    result = 0;
};

function evaluate() {
    switch (operation) {
        case "+":
            result = numA + numB;
            break;
        case "-":
            result = numA - numB;
            break;
        case "*":
            result = numA * numB;
            break;
        case "/":
            result = numA / numB;
            break;
        default:
            result = "Invalid!";
    }
    displayBar.innerText = result;
};


/*----------------------------- Event Listeners -----------------------------*/


// When equals is clicked I want it to run my evaluate function and return the answer
equalsOperation.addEventListener("click", evaluate); // Get invalid on entry take a look at function again!

// When C is clicked I want it to run my clearDisplay function and clear the display to 0 as well as reset my values for numA, operation, numB
clearButton.addEventListener("click", clearDisplay); // When C is clicked the display shows C instead of 0 as intended take another look!

numberEls.forEach((numberEl) => {
    numberEl.addEventListener("click", (event) => {
        displayBar.innerText = event.target.innerText;
        numA = parseInt(event.target.innerText);
        if (numA) {
            numB = parseInt(event.target.innerText)  // This if statement should check that if numA has a value already, then store the value to numB 
        };
	});
});

operationEls.forEach((operationEl) => {
	operationEl.addEventListener("click", (event) => {
        if (numA) {
            operation = event.target.innerText;
            displayBar.innerText = event.target.innerText; // Still need to figure out how to accept multi digit numbers, however basic single digit numbers and operations work with the current code. 
        }
         else if (event.target.innerText === 'C'){
            clearDisplay();
         };
    });
});


