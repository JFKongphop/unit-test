export function generateResultText(claculateResult){
    let resultText = '';

    if (result === 'invalid') {
      resultText = 'Invalid input. You must enter valid numbers.';
    } else if (result !== 'no-calc') {
      resultText = 'Result: ' + claculateResult;
    }

    return resultText;
}

export function outputResult(resultText){
    const output = document.getElementById('result');
    output.textContent = resultText
}