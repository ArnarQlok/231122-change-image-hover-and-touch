const card = document.querySelector('.card');

card.addEventListener('mouseover', function() {
    this.classList.add('card-hover');
});

card.addEventListener('mouseout', function() {
    this.classList.remove('card-hover');
});

card.addEventListener('touchstart', function(e) {
    // Lägg till hover-effekt
    this.classList.add('card-hover');
    e.preventDefault(); // Förhindrar omedelbar klick-händelse
}, false);

card.addEventListener('touchend', function() {
    // Ta bort hover-effekt
    this.classList.remove('card-hover');
}, false);