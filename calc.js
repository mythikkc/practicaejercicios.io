function calcularUtilidad() {
    const salarioMensual = document.getElementById('salario').value;
    const antiguedad = document.getElementById('antiguedad').value;

    if (!validarEntrada(salarioMensual) || !validarEntrada(antiguedad)) {
        document.getElementById('res').innerText = "Por favor, ingrese valores válidos (números positivos).";
        return;
    }

    const salario = parseFloat(salarioMensual);
    const añs = parseFloat(antiguedad);

    let porcentajeUtilidad;

    if (añs < 1) {
        porcentajeUtilidad = 0.05;
    } else if (añs >= 1 && añs < 2) {
        porcentajeUtilidad = 0.07;
    } else if (añs >= 2 && añs < 5) {
        porcentajeUtilidad = 0.10;
    } else if (añs >= 5 && añs < 10) {
        porcentajeUtilidad = 0.15;
    } else {
        porcentajeUtilidad = 0.20;
    }

    const utilidad = salario * porcentajeUtilidad;
    document.getElementById('res').innerText = `Utilidad: $${utilidad.toFixed(2)}`;
}

function validarEntrada(valor) {
    const num = parseFloat(valor);
    return !isNaN(num) && num >= 0;
}
