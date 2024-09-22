document.getElementById('calcularBtn').addEventListener('click', function() {
    let capital = parseFloat(document.getElementById('capital').value);
    
    if (isNaN(capital) || capital <= 0) {
        document.getElementById('resultado').innerText = 
            "Por favor, ingrese un capital válido mayor a 0.";
        return;
    }

    let ts = 0.02; 
    let montoFinal = capital * (1 + ts);

    document.getElementById('resultado').innerText = 
        `Después de un mes, el monto final será: ${montoFinal.toFixed(2)} pesos.`;
});
