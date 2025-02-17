//Temperatur omvandlare
const h2 = document.createElement("h2");
h2.innerHTML = "Celsius and fahrenheit";
document.getElementById("app").appendChild(h2);

const input = document.createElement("input");
document.getElementById("app").appendChild(input);

const btnF = document.createElement("button");
btnF.className = "button";
btnF.innerHTML = "Fahrenheit";
document.getElementById("app").appendChild(btnF);

const btnC = document.createElement("button");
btnC.className = "button";
btnC.innerHTML = "Celsius";
document.getElementById("app").appendChild(btnC);

const res = document.createElement("p");
document.getElementById("app").appendChild(res);

btnF.addEventListener("click", () => {
  const celcius = input.value;
  const fahrenheit = (celcius * (9 / 5) + 32).toFixed(1);
  res.innerHTML = input.value + " °C = " + fahrenheit + " °F";
  input.value = "";
});

btnC.addEventListener("click", () => {
  const fahrenheit = input.value;
  const celcius = ((fahrenheit - 32) / (9 / 5)).toFixed(1);
  res.innerHTML = input.value + " °F = " + celcius + " °C";
  input.value = "";
});

//Skottår
const heading = document.createElement("h2");
heading.innerHTML = "Leap years";
document.getElementById("app").appendChild(heading);

const inputYear = document.createElement("input");
document.getElementById("app").appendChild(inputYear);

const btnL = document.createElement("button");
btnL.innerHTML = "Is it a leap year?";
document.getElementById("app").appendChild(btnL);

const pLeap = document.createElement("p");
document.getElementById("app").appendChild(pLeap);

btnL.addEventListener("click", () => {
  const year = inputYear.value;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    pLeap.innerHTML = "Yes. " + year + " is a leap year.";
  } else {
    pLeap.innerHTML = "No. " + year + " is not a leap year.";
  }
  inputYear.value = "";
});

//Palindrome
const heading2 = document.createElement("h2");
heading2.innerHTML = "Palindromes";
document.getElementById("app").appendChild(heading2);

const inputText = document.createElement("input");
document.getElementById("app").appendChild(inputText);

const btnP = document.createElement("button");
btnP.innerHTML = "Is it a palindrome?";
document.getElementById("app").appendChild(btnP);

const pPalin = document.createElement("p");
document.getElementById("app").appendChild(pPalin);

btnP.addEventListener("click", () => {
  const text = inputText.value.toLowerCase();

  let textReversed = "";
  let isPalindrome = false;

  for (let i = text.length - 1; i >= 0; i--) {
    textReversed += text[i];
  }

  if (text === textReversed) {
    isPalindrome = true;
    pPalin.innerHTML = "Yes. It is a palindrome.";
  } else {
    pPalin.innerHTML = "No. It is not a palindrome.";
  }

  inputText.value = "";
});

//Fibonacci
const heading3 = document.createElement("h2");
heading3.innerHTML = "Fibonacci";
document.getElementById("app").appendChild(heading3);

const p = document.createElement("p");
p.innerHTML =
  "<i>Enter a number to find a member at this position in the fibonacci sequence.</i>";
document.getElementById("app").appendChild(p);

const inputNum = document.createElement("input");
document.getElementById("app").appendChild(inputNum);

const btnFibo = document.createElement("button");
btnFibo.innerHTML = "Find";
document.getElementById("app").appendChild(btnFibo);

const pFibo = document.createElement("p");
document.getElementById("app").appendChild(pFibo);

btnFibo.addEventListener("click", () => {
  const position = +inputNum.value;
  const fibonacci = [0, 1];
  1;
  let fiboNum = 0;

  for (let i = 0; i < position; i++) {
    fiboNum = fibonacci[i] + fibonacci[i + 1];
    fibonacci.push(fiboNum);
  }

  inputNum.value = "";
  pFibo.innerHTML = fibonacci[position - 1];

  console.log(fibonacci);
});
