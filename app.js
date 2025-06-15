let calculation = JSON.parse(localStorage.getItem('calculation'))
if (calculation === null) {
    calculation = ''
    console.log('0')
}
else {
    console.log(calculation)
}

function updateCalculation(value) {
    calculation += value;
    console.log(calculation);
    localStorage.setItem('calculation', JSON.stringify(calculation))
}