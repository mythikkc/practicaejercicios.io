function calcularComisiones() {
    const sb = document.getElementById('sb').value;
    const v1 = document.getElementById('v1').value;
    const v2 = document.getElementById('v2').value;
    const v3 = document.getElementById('v3').value;

    if (!validarEntrada(sb) || !validarEntrada(v1) || !validarEntrada(v2) || !validarEntrada(v3)) {
        document.getElementById('res').innerText = "Por favor, ingrese valores válidos (números positivos).";
        return;
    }

    const sueldoBase = parseFloat(sb);
    const venta1 = parseFloat(v1);
    const venta2 = parseFloat(v2);
    const venta3 = parseFloat(v3);

    const totalVentas = venta1 + venta2 + venta3;
    const comision = totalVentas * 0.10;
    const totalMensual = sueldoBase + comision;

    document.getElementById('res').innerText = `
        Comisiones Totales: $${comision.toFixed(2)} 
        Total a recibir este mes: $${totalMensual.toFixed(2)}
    `;
}

function validarEntrada(valor) {
    const num = parseFloat(valor);
    return !isNaN(num) && num >= 0;
}
