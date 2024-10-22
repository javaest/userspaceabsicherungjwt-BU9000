window.onload = function() {
    const token = localStorage.getItem('token');
    console.log('Geladener JWT-Token:', token);

    if (!token) {
        // Token ist nicht vorhanden, zurück zur Anmeldeseite leiten
        window.location.href = 'login.html'; // Ändere den Dateinamen entsprechend deiner Struktur
        return;
    }

    // Token an den Test-Endpoint senden
    fetch('http://localhost:8080/api/test/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            // Benutzerdaten anzeigen
            document.getElementById('user-info').innerText = `Willkommen, ${data.username}!`;
            document.getElementById('user-email').innerText = `E-Mail: ${data.email}`;
        } else {
            // Wenn keine Daten zurückgegeben werden, zurück zur Anmeldeseite leiten
            console.error('Fehler beim Abrufen der Benutzerdaten.');
            window.location.href = 'login.html'; // Ändere den Dateinamen entsprechend deiner Struktur
        }
    })
    .catch(error => {
        console.error('Fehler bei der Token-Validierung:', error);
        window.location.href = 'login.html'; // Ändere den Dateinamen entsprechend deiner Struktur
    });
};

function logout() {
    localStorage.removeItem('token'); // Entferne den JWT-Token aus dem localStorage
    window.location.href = 'login.html'; // Zur Anmeldeseite leiten
}