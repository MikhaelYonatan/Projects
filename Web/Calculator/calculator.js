let calculation = localStorage.getItem('calculation') || '';

updateDisplay();

function updateCalculation(value) {
  calculation += value;
  updateDisplay();
  localStorage.setItem('calculation', calculation);
}

function updateDisplay() {
  document.querySelector('.js-calculation').innerHTML = calculation;
}

function clearCal() {
  calculation = '';
  updateDisplay();
  localStorage.removeItem('calculation');
}

function calculate() {
  calculation = eval(calculation);

  updateDisplay();

  localStorage.setItem('calculation', calculation);
}