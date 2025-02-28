document.addEventListener("DOMContentLoaded", function() {
    // Dodajemy zdarzenie kliknięcia dla każdego modala,
    // aby zamknąć go, gdy klikniemy poza zawartość.
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            // Sprawdzamy, czy kliknięty element to sam modal (a nie jego zawartość)
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}
