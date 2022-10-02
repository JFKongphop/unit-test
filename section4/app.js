import { extractEnteredNumbersValues } from './src/parser.js';
import {
  validateStringNotEmpty,
  validateNumber,
} from './src/util/validation.js';
import { add } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';
import { generateResultText, outputResult } from './src/output.js';

const form = document.querySelector('form');
// const output = document.getElementById('result');

// go to math
function cleanNumbers(numberInputs){
  const numbers = [];
  for (const numberInput of numberInputs) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers
}


function claculateResult(numberInputs){
  let result = ''
  try {
    const numbers = cleanNumbers(numberInputs)

    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result

}


function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = extractEnteredNumbersValues(form)
  const result = claculateResult(numberInputs)

  const resultText = generateResultText(result)
  outputResult(resultText)
}

form.addEventListener('submit', formSubmitHandler);
