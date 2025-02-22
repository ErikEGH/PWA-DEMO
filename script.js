fetch('manifest.json')
        .then(response => response.json())  // JSON in ein Objekt umwandeln
        .then(data => {
            console.log(data);  // Hier kannst du mit den Daten arbeiten
        })
        .catch(error => console.error('Fehler beim Laden der JSON-Datei:', error));

addEventListener('load', function(e) {
    document.querySelector('#test').innerHTML = 'Zufallsgenerator ';
    });

