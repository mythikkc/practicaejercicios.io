function calcularHorasExtras() {
    const horasTrabajadas = document.getElementById('horas').value;
    const pagoPorHora = document.getElementById('pago').value;

    if (!validarEntrada(horasTrabajadas) || !validarEntrada(pagoPorHora)) {
        document.getElementById('res').innerText = "Por favor, ingrese valores válidos (números positivos).";
        return;
    }

    const horas = parseFloat(horasTrabajadas);
    const pago = parseFloat(pagoPorHora);

    let pagoTotal = 0;

    if (horas > 40) {
        const horasExtras = horas - 40;
        if (horasExtras <= 8) {
            pagoTotal = (horas * pago) + (horasExtras * pago * 2);
        } else {
            const horasExtrasDobles = 8;
            const horasExtrasTriples = horasExtras - horasExtrasDobles;
            pagoTotal = (horas * pago) + (horasExtrasDobles * pago * 2) + (horasExtrasTriples * pago * 3);
        }
    } else {
        pagoTotal = horas * pago;
    }

    document.getElementById('res').innerText = `Pago Total: $${pagoTotal.toFixed(2)}`;
}

function validarEntrada(valor) {
    const num = parseFloat(valor);
    return !isNaN(num) && num >= 0;
}
