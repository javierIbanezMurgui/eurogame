document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');

    
    const cookiePreference = localStorage.getItem('cookieAccepted');
    if (!cookiePreference) {
        banner.style.display = 'block'; 
    }

    // aceptar: 
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieAccepted', 'true');
        banner.style.display = 'none';
    });

    // rechazar: 
    rejectBtn.addEventListener('click', function() {
        localStorage.setItem('cookieAccepted', 'false');
        banner.style.display = 'none';
    });
});
