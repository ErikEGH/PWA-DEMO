addEventListener('load', function(e) {
    document.querySelector('#test').innerHTML = 'Zufallsgenerator';
});

let usedNumbers = [];

function generateRandomNumber() {
    const anzahlInput = document.getElementById('anzahl');
    const anzahl = parseInt(anzahlInput.value);

    if (isNaN(anzahl) || anzahl < 1) {
        alert('Bitte geben Sie eine gültige Anzahl ein.');
        return;
    }

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * anzahl) + 1;
    } while (usedNumbers.includes(randomNumber));

    usedNumbers.push(randomNumber);

    const p = document.createElement('p');
    p.textContent = `Sitzplatz Nr. ${randomNumber}`;
    outputDiv.appendChild(p);
}
