// Animation de la barre de progression
function updateProgress(value) {
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${value}%`;
}

// Exemple d'utilisation
document.addEventListener('DOMContentLoaded', () => {
    updateProgress(53); // Définit la progression à 53%
});

// Vous pouvez ajouter d'autres fonctionnalités de transfert de données ici

function startProgress() {
    const progressBar = document.getElementById('progress');
    const progressText = document.querySelector('.progress-text');
    let width = 0;
    const duration = 15000; // 15 secondes
    const interval = 50; // Mise à jour tous les 50ms
    const increment = (interval / duration) * 100;

    const animation = setInterval(() => {
        if (width >= 100) {
            clearInterval(animation);
            // Attendre un court instant avant la redirection
            setTimeout(() => {
                window.location.href = 'termine.html';
            }, 500); // Attendre 500ms avant de rediriger
        } else {
            width += increment;
            const currentProgress = Math.min(Math.round(width), 100);
            progressBar.style.width = currentProgress + '%';
            progressText.textContent = currentProgress + '%';
        }
    }, interval);
}

// Démarrer l'animation quand la page est chargée
document.addEventListener('DOMContentLoaded', () => {
    startProgress();
});