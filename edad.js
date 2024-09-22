function calcularEdad() {
    const fechaNac = document.getElementById('fecha').value;

    if (!fechaNac) {
        document.getElementById('res').innerText = "Por favor, ingrese una fecha válida.";
        return;
    }

    const hoy = new Date();
    const nacimiento = new Date(fechaNac);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    document.getElementById('res').innerText = `Edad: ${edad} años`;
}
