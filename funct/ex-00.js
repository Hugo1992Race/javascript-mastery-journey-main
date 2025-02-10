const numbers = [1, 22, 3, 4, 5, 6, 7, 8, 9, 0,]

const result = [];

for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    if (item % 2 === 0) {
        result.push(item);
    }
    
} 

console.log(result)