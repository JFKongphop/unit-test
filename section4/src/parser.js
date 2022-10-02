function extractNumbers(formData) {
  const num1Input = formData.get('num1');
  const num2Input = formData.get('num2');

  return [num1Input, num2Input];
}

// pass not error
export function extractEnteredNumbersValues(form){
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);

  return numberInputs;
}