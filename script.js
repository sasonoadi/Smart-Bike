// Inisialisasi Google Maps
function initMap() {
    var location = { lat: -6.200000, lng: 106.816666 }; // Contoh lokasi Jakarta
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Lokasi Sepeda",
    });

    // Simulasi update lokasi setiap 5 detik
    setInterval(() => {
        let newLat = location.lat + (Math.random() - 0.5) * 0.01;
        let newLng = location.lng + (Math.random() - 0.5) * 0.01;
        location = { lat: newLat, lng: newLng };
        marker.setPosition(location);
        map.setCenter(location);
    }, 5000);
}

// Toggle Kunci Sepeda
function toggleLock() {
    let button = document.querySelector("button:nth-of-type(1)");
    if (button.innerText === "Buka Kunci") {
        button.innerText = "Kunci Sepeda";
        button.classList.replace("bg-blue-500", "bg-gray-500");
    } else {
        button.innerText = "Buka Kunci";
        button.classList.replace("bg-gray-500", "bg-blue-500");
    }
}

// Toggle Lampu Sepeda
function toggleLight() {
    let button = document.querySelector("button:nth-of-type(2)");
    if (button.innerText === "Nyalakan Lampu") {
        button.innerText = "Matikan Lampu";
        button.classList.replace("bg-yellow-500", "bg-gray-500");
    } else {
        button.innerText = "Nyalakan Lampu";
        button.classList.replace("bg-gray-500", "bg-yellow-500");
    }
}

// Simulasi Update Sensor (Kecepatan, Suhu, Baterai)
setInterval(() => {
    document.getElementById("speed").innerText = (Math.random() * 40).toFixed(1);
    document.getElementById("temperature").innerText = (25 + Math.random() * 10).toFixed(1);
    document.getElementById("battery").innerText = (80 + Math.random() * 10).toFixed(1);

    // Simulasi Deteksi Anomali (pencurian/benturan)
    if (Math.random() < 0.1) { // 10% kemungkinan ada kejadian
        document.getElementById("securityAlert").style.display = "block";
    } else {
        document.getElementById("securityAlert").style.display = "none";
    }
}, 5000);
