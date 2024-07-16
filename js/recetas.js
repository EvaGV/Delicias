// sumar favoritos


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.receta').forEach(receta => {
        const button = receta.querySelector('.receta__favoritos');
        const counter = receta.querySelector('.receta__contador');
        let count = 0;

        button.addEventListener('click', () => {
            count++;
            counter.textContent = count;
        });
    });
});




