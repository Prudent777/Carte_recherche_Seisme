// Fonction pour créer la carte
function createMap() {
    const map = L.map('map').setView([0, 0], 2); // Coordonnées initiales et niveau de zoom

    // Ajouter une carte de fond (par exemple, OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return map;
}

// Fonction pour mettre à jour les données sismiques
function updateEarthquakes(map) {
    // Vous devrez remplacer cet exemple par une véritable source de données sismiques
    const earthquakeData = [
        { location: [0, 0], magnitude: 4.5, description: 'Séisme 1' },
        { location: [10, 10], magnitude: 5.2, description: 'Séisme 2' },
        // Ajoutez d'autres données sismiques ici...
    ];

    // Effacer les anciens marqueurs
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Ajouter de nouveaux marqueurs pour les séismes
    earthquakeData.forEach(data => {
        const marker = L.marker(data.location).addTo(map);
        marker.bindPopup(`Magnitude: ${data.magnitude}<br>Description: ${data.description}`);
    });
}

// Créer la carte
const map = createMap();

// Mettre à jour les données sismiques toutes les 5 minutes
updateEarthquakes(map);
setInterval(() => {
    updateEarthquakes(map);
}, 5 * 60 * 1000); // 5 minutes en millisecondes
