function calcularCalificacion() {
    const c1 = document.getElementById('c1').value;
    const c2 = document.getElementById('c2').value;
    const c3 = document.getElementById('c3').value;
    const ef = document.getElementById('ef').value;
    const tf = document.getElementById('tf').value;

    if (!validarEntrada(c1) || !validarEntrada(c2) || !validarEntrada(c3) || !validarEntrada(ef) || !validarEntrada(tf)) {
        document.getElementById('res').innerText = "Por favor, ingrese valores válidos (números entre 0 y 100).";
        return;
    }

    const cal1 = parseFloat(c1);
    const cal2 = parseFloat(c2);
    const cal3 = parseFloat(c3);
    const examenFinal = parseFloat(ef);
    const trabajoFinal = parseFloat(tf);

    const promedio = (cal1 + cal2 + cal3) / 3;
    const calificacionFinal = (promedio * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

    document.getElementById('res').innerText = `Calificación Final: ${calificacionFinal.toFixed(2)}`;
}

function validarEntrada(valor) {
    const num = parseFloat(valor);
    return !isNaN(num) && num >= 0 && num <= 100;
}
