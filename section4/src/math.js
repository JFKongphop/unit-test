export function add(numbers) {
  let sum = 0;

  // when it have error in this function that show on the test
  // throw new Error('Something went wrong')

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

// export function cleanNumbers(numberInputs){
//   const numbers = [];
//   for (const numberInput of numberInputs) {
//     validateStringNotEmpty(numberInput);
//     const number = transformToNumber(numberInput);
//     validateNumber(number);
//     numbers.push(number);
//   }

//   return numbers
// }

// export function claculateResult(numberInputs){
//   let result = ''
//   try {
//     const numbers = cleanNumbers(numberInputs)

//     result = add(numbers).toString();
//   } catch (error) {
//     result = error.message;
//   }
//   return result

// }
