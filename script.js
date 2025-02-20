// app.js

// Wenn der Button zum Verbinden geklickt wird
document.getElementById('connectButton').addEventListener('click', async () => {
    try {
        // Gerät auswählen und mit ihm verbinden
        const device = await navigator.bluetooth.requestDevice({
            filters: [{ services: ['heart_rate'] }] // Beispiel: 'heart_rate' als Service (ändere nach Bedarf)
        });

        console.log("Gerät ausgewählt: ", device.name);

        // Mit dem Gerät verbinden
        const server = await device.gatt.connect();
        console.log("Verbunden mit GATT Server");

        // Den gewünschten Service und das Characteristic finden
        const service = await server.getPrimaryService('heart_rate'); // Beispiel-Service
        const characteristic = await service.getCharacteristic('heart_rate_measurement'); // Beispiel-Characteristic

        // Benachrichtigungen abonnieren
        await characteristic.startNotifications();
        characteristic.addEventListener('characteristicvaluechanged', handleCharacteristicValueChanged);

        // Funktion zum Anzeigen der Nachrichten
        function handleCharacteristicValueChanged(event) {
            const value = event.target.value;
            const messageContainer = document.getElementById('messageContainer');
            const message = new TextDecoder().decode(value);
            messageContainer.textContent = "Neue Nachricht: " + message;
        }

    } catch (error) {
        console.error("Fehler beim Verbinden oder Empfangen der Nachricht:", error);
    }
});

