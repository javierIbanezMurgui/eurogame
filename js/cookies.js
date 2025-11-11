document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');

    // Verifica si el usuario ya ha tomado una decisión
    const cookiePreference = localStorage.getItem('cookieAccepted');
    if (!cookiePreference) {
        banner.style.display = 'block'; // Muestra el banner si no hay preferencia
    }

    // Al aceptar: guarda preferencia y oculta banner
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieAccepted', 'true');
        banner.style.display = 'none';
    });

    // Al rechazar: guarda preferencia y oculta banner
    rejectBtn.addEventListener('click', function() {
        localStorage.setItem('cookieAccepted', 'false');
        banner.style.display = 'none';
    });
});