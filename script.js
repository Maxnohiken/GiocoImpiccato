const inputBar = document.getElementById("inputLettere");
const btn = document.getElementById("btn");
const word = document.getElementById("word");
const secretWord = "CATAPULTA";
const Numeri = document.getElementById("numeri");
let parolaDaIndovinare;
let lettereIndovinate;
let valoreScore = 10;
Numeri.innerHTML = valoreScore;

function wordView() {  
  parolaDaIndovinare = secretWord.split("");
  lettereIndovinate = arrayDinamico(secretWord.length, "_");
  updateView()
}

function arrayDinamico(length, value) {
  let underscore = [];
  for (let i = 0; i < length; i++) {
    underscore.push(value);
  }
  return underscore;
}

function updateView() {
  word.innerHTML = lettereIndovinate.join(" ");
  Numeri.innerHTML = valoreScore;
}

function letteraDaIndovinare() {
  let valore = inputBar.value.toUpperCase();

  if (secretWord.includes(valore)) {
    secretWord.split("").forEach((lettera, i) => {
      if (lettera === valore) {
        lettereIndovinate[i] = valore;
      }
    });
  } else {
    valoreScore--;
  }

  if (valoreScore === 0) {
    alert("Hai Perso!!!");
    wordView(); 
  }

  if (!lettereIndovinate.includes("_")) {
    alert("Congratulazioni, hai vinto!");
    wordView(); 
  }

  word.innerHTML = lettereIndovinate.join(" ");
  Numeri.innerHTML = valoreScore;

  inputBar.value = "";
}

btn.addEventListener("click", letteraDaIndovinare);

window.onload = wordView

