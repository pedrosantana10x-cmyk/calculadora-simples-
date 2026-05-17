function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('aritimetica').value;
    const resultadoDiv = document.getElementById('resultado');
     if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.innerText = 'Digite números válidos!';
    return;
    }

    let resultado = 0;
    
    switch (operacao) {
        case 'somar':
            resultado = num1 + num2;
        break;
        case 'subtrair':
            resultado = num1 - num2;
        break;
        case 'multiplicar':
            resultado = num1 * num2;
        break;  
        case 'dividir': 
            if (num1 == 0 && num2 == 0) {
                resultado = '';
                resultadoDiv.innerText = 'Indeterminação!';
            }
            else {
                resultado = num1 / num2;
                resultadoDiv.innerText = `Resultado: ${resultado}`;
            }
        break;
        case 'elevar':
            resultado = num1 ** num2;
        break;
        case 'mmc':
            resultado = (num1 * num2);
        break;
        case 'mdc':
            resultado = (num1 > num2) ? num1 : num2;
            for (let i = resultado; i >= 0; i--) {
                if (num1 % i == 0 && num2 % i == 0) {
                    resultado = i;
                    break;
                }
            }
        break;
        default:
            resultadoDiv.innerText = 'Operação inválida!';
    }
    resultadoDiv.innerText = 'Resultado: ' + resultado;
}