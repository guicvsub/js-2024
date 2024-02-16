document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('imc');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);

        const imc = peso / (altura * altura);

        let resultado = '';
        if (isNaN(imc)) {
            resultado = 'Por favor, insira um peso e altura válidos.';
        } else {
            resultado = `Seu IMC é ${imc.toFixed(2)}.`;
        }

        resultadoDiv.textContent = resultado;
    });
});
