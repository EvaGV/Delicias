

// Aquí están todos los botones que funcionan con JS, que son los de navegación y registro. 
//Como hemos puesto el atributo defer en los script lo primero que tenemos que hacer es esperar a que el DOM esté totalmente cargado
//Luego declaramos todas las constantes con el id que le hemos puesto a cada botón  

document.addEventListener('DOMContentLoaded', function() {
    // Constantes para los botones
    const formulario = document.getElementById('formulario');
    const anterior1 = document.getElementById('anterior1');
    const siguiente1 = document.getElementById('siguiente1');
    const anterior2 = document.getElementById('anterior2');
    const siguiente2 = document.getElementById('siguiente2');
    const anterior3 = document.getElementById('anterior3');

    const siguiente3 = document.getElementById('siguiente3');
    const registrarme = document.getElementById('registrarme');
    const usuario = document.getElementById('usuario');
    const iniciar = document.getElementById('iniciar')
    const cesta = document.getElementById('cesta')
    const cesta2 = document.getElementById('cesta2')
    const cesta3 = document.getElementById('cesta3')
    const cesta4 = document.getElementById('cesta4')
    const iniciosesion = document.getElementById('iniciosesion')

    // Con el if verificamos que la constante que hemos declarado existe en el documento y si existe al hacer click te lleva al enlace que definido
    if (formulario) {
        formulario.addEventListener('click', function() {
            window.location.href = 'formulario.html';
        });
    }

    if (usuario) {
        usuario.addEventListener('click', function() {
            window.location.href = 'iniciosesion.html';
        });
    }

    if (anterior1) {
        anterior1.addEventListener('click', function() {
            window.location.href = 'formulario.html';
        });
    }

    if (siguiente1) {
        siguiente1.addEventListener('click', function() {
            window.location.href = 'form3.html';
        });
    }

    if (anterior2) {
        anterior2.addEventListener('click', function() {
            window.location.href = 'form2.html';
        });
    }

    if (siguiente2) {
        siguiente2.addEventListener('click', function() {
            window.location.href = 'form4.html';
        });
    }

    if (anterior3) {
        anterior3.addEventListener('click', function() {
            window.location.href = 'form3.html';
        });
    }

    if (siguiente3) {
        siguiente3.addEventListener('click', function() {
            window.location.href = 'registro.html';
        });
    }

    if (registrarme) {
        registrarme.addEventListener('click', function() {
            window.location.href = 'form2.html';
        });
    }

    if (iniciar) {
        iniciar.addEventListener('click', function() {
            window.location.href = 'usuario.html';
        });
    }

    if (cesta) {
        cesta.addEventListener('click', function() {
            window.location.href = 'formulario.html';
        });
    }

    if (cesta2) {
        cesta2.addEventListener('click', function() {
            window.location.href = 'formulario.html';
        });
    }

    if (cesta3) {
        cesta3.addEventListener('click', function() {
            window.location.href = 'formulario.html';
        });
    }

    if (cesta4) {
        cesta4.addEventListener('click', function() {
            window.location.href = 'formulario.html';
        });
    }

    if (iniciosesion) {
        iniciosesion.addEventListener('click', function() {
            window.location.href = 'formulario.html';
        });
    }
});



