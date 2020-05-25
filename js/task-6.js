let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');
    numbers.push(Number(input));
} while (input !== null);

// if (numbers.length !== 0) {
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i]; 
//     }
// } 

if (numbers.lenght !== 0) {
    
    for (const number of numbers) {
        total += number;
    }

}
console.log(`Общая сумма чисел равна ${total}`);