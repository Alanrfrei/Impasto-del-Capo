
const cardapioButton = document.getElementById('cardapioButton');
const cardapioSection = document.getElementById('cardapio');


cardapioButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    cardapioSection.scrollIntoView({ behavior: 'smooth' });
});


// Fale Conosco Button Smooth Scroll
const faleConoscoButton = document.getElementById('atendeButton');
const contactInfoSection = document.getElementById('contactInfo');

faleConoscoButton.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    contactInfoSection.scrollIntoView({ behavior: 'smooth' });
});

