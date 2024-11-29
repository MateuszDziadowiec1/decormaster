window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const aboutUs = document.getElementById('about-us');
    
    // Sprawdzanie, czy sekcja About Us jest widoczna
    const aboutUsTop = aboutUs.getBoundingClientRect().top;
    
    if (aboutUsTop <= 0) {
        // Dodaj klasę 'fixed' kiedy sekcja About Us jest na górze ekranu
        header.classList.add('fixed');
    } else {
        // Usuń klasę 'fixed' kiedy sekcja About Us jest poniżej ekranu
        header.classList.remove('fixed');
    }
});