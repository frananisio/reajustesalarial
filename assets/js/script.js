function calcular_percentual_aumento(valor) {
    if (valor <= 280) {
        return 20;
    } else if (valor <= 700) {
        return 15;
    } else if (valor <= 1500) {
        return 10;
    } else {
        return 5;
    }
}

function formatNumber(number) {
    return number.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

function calcularSalario() {
    const salarioInput = document.getElementById('value');
    const salario_atual = parseFloat(salarioInput.value.replace(',', '.'));

    const percentual = calcular_percentual_aumento(salario_atual);

    const aumento = salario_atual * (percentual / 100);
    const novo_salario = salario_atual + aumento;

    const percentualSpan = document.getElementById('percentual');
    const aumentoSpan = document.getElementById('aumento');
    const novoSalarioSpan = document.getElementById('novoSalario');

    percentualSpan.textContent = `Percentual aumento (%): ${percentual}%`;
    aumentoSpan.textContent = `Aumento: R$ ${formatNumber(aumento)}`;
    novoSalarioSpan.textContent = `Novo Salário: R$ ${formatNumber(novo_salario)}`;
}

const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', calcularSalario);