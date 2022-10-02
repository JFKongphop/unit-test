export function add(numbers) {
  let sum = 0;

  // when it have error in this function that show on the test
  // throw new Error('Something went wrong')

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
