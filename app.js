function convertToRoman(num) {
    //roman numeral to number table
    const lookupTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    //string builder
    //accumulator
    let accumulator = '';

    //for loop and while loop inside of for loop until value reaches 0
    for (const key in lookupTable) {
        const numberValue = lookupTable[key];

        while (numberValue <= num) {
            num -= numberValue;
            accumulator += key;
        }
    }

    return accumulator;
}

//dom with if else statement covering NaN
document.getElementById('convertBtn').addEventListener('click', function () {
    const numberInput = document.getElementById('numberInput').value;

    // Check if the input is not a valid number
    if (isNaN(numberInput) || numberInput === '') {
        // If the input is not a valid number or empty, display an error message
        document.getElementById('result').textContent = 'Please enter a valid number';
    } else {
        // If the input is a valid number, convert it to Roman numeral
        const convertedRomanNumeral = convertToRoman(parseInt(numberInput));
        document.getElementById('result').textContent = `Roman numeral: ${convertedRomanNumeral}`;
    }
});
