// BOTÓN MODO OSCURO
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
//________________________________________________

// MENÚ DE BARRAS 

document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.menu-dropdown').classList.toggle('show');
});

//________________________________________________



// BOTÓN SCROLL
document.addEventListener('DOMContentLoaded', function() {
    var btnScrollToTop = document.getElementById('btnScrollToTop');
    var footer = document.querySelector('footer'); // Selecciona tu footer adecuadamente

    function toggleScrollButton() {
        var scrollPosition = window.scrollY + window.innerHeight;
        var footerPosition = footer.offsetTop + footer.clientHeight;

        if (scrollPosition < footerPosition) {
            btnScrollToTop.style.display = 'block';
        } else {
            btnScrollToTop.style.display = 'none';
        }
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            toggleScrollButton();
        } else {
            btnScrollToTop.style.display = 'none';
        }
    });

    btnScrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Llamar toggleScrollButton inicialmente para establecer el estado correcto
    toggleScrollButton();
});


//____________________________________________________________
