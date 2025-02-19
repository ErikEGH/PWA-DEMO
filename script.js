setTimeout(() => {
  const p = document.createElement("p");
  p.innerText = "and it's dynamic, too!";
  document.body.appendChild(p);
}, 2000);

// Button zum Verbinden mit dem ESP32-Bluetooth-Gerät
async function connectBluetooth() {
    try {
        const device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            // optionalServices: ['0000180d-0000-1000-8000-00805f9b34fb'] // Service-UUID für den ESP32
        });

        const server = await device.gatt.connect();
        const service = await server.getPrimaryService('0000180d-0000-1000-8000-00805f9b34fb');
        const characteristic = await service.getCharacteristic('00002a37-0000-1000-8000-00805f9b34fb');

        characteristic.addEventListener('characteristicvaluechanged', handleMessage);
        await characteristic.startNotifications();

        console.log('Bluetooth verbunden');
    } catch (error) {
        console.error('Fehler beim Verbinden:', error);
    }
}

// Funktion, um die empfangene Nachricht anzuzeigen
function handleMessage(event) {
    const value = new TextDecoder().decode(event.target.value);
    document.getElementById('message').textContent = `Nachricht: ${value}`;
}
