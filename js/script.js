
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.menu-dropdown').classList.toggle('show');
});
