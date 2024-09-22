function palabrasANumeros(arr) {
    const mapaNumeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    return arr.map(palabra => {
        const palabraMinuscula = palabra.trim().toLowerCase();
        return mapaNumeros.hasOwnProperty(palabraMinuscula) ? mapaNumeros[palabraMinuscula] : -1;
    });
}

function convertir() {
    const entrada = document.getElementById('palabras').value;
    const palabrasArray = entrada.split(',');
    const resultado = palabrasANumeros(palabrasArray);

    document.getElementById('resultado').innerText = `Resultado: ${resultado.join(', ')}`;
}
