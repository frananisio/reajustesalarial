function calculate_percentage_increase(valor) {
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

function calculateSalary() {
    const salaryInput = document.getElementById('value');
    const current_salary = parseFloat(salaryInput.value.replace(',', '.'));

    const percentage = calculate_percentage_increase(current_salary);

    const increase = current_salary * (percentage / 100);
    const new_salary = current_salary + increase;

    const percentageSpan = document.getElementById('percentage');
    const increaseSpan = document.getElementById('increase');
    const newSalarySpan = document.getElementById('newSalary');

    percentageSpan.textContent = `Percentual aumento (%): ${percentage}%`;
    increaseSpan.textContent = `Aumento: R$${formatNumber(increase)}`;
    newSalarySpan.textContent = `Novo Salário: R$${formatNumber(new_salary)}`;
}

const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', calculateSalary);