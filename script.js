// Array für bereits verwendete Zufallszahlen
let usedNumbers = [];

function generateRandomNumber() {
  const anzahlInput = document.getElementById('anzahl');
  const anzahl = parseInt(anzahlInput.value);

  // Überprüfen, ob die Eingabe gültig ist
  if (isNaN(anzahl) || anzahl < 1) {
    alert('Bitte geben Sie eine gültige Anzahl ein.');
    return;
  }

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = ''; // Vorherige Ausgaben löschen

  let randomNumber;

  // Generieren einer Zufallszahl, die noch nicht verwendet wurde
  do {
    randomNumber = Math.floor(Math.random() * anzahl) + 1;
  } while (usedNumbers.includes(randomNumber));

  // Die Zufallszahl in das Array der verwendeten Zahlen einfügen
  usedNumbers.push(randomNumber);

  // Ausgabe der Zufallszahl
  const p = document.createElement('p');
  p.textContent = `Sitzplatz Nr. ${randomNumber}`;
  outputDiv.appendChild(p);
}

