const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let shouldReset = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        shouldReset = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    if (shouldReset) {
      currentInput = '';
      shouldReset = false;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});
