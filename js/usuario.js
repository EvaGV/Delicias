//CAMBIAR FOTO PERFIL

document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('cambiar');
    const perfilCamara = document.getElementById('perfilCamara');
    const perfilFoto = document.querySelector('.perfil__foto');

    perfilCamara.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                perfilFoto.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
});