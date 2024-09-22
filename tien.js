function calcularDescuento() {
    const total = document.getElementById('total').value;

    if (!validarEntrada(total)) {
        document.getElementById('res').innerText = "Por favor, ingrese un valor válido (número positivo).";
        return;
    }

    const t = parseFloat(total);
    const descuento = t * 0.15;
    const totalAPagar = t - descuento;

    document.getElementById('res').innerText = `
        Descuento: $${descuento.toFixed(2)} 
        Total a pagar: $${totalAPagar.toFixed(2)}
    `;
}

function validarEntrada(valor) {
    const num = parseFloat(valor);
    return !isNaN(num) && num >= 0;
}
