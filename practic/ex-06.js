const array = []
let sum = 0;
for (let i = 0; i < 5; i++) {
    const el = Math.floor(Math.random() * 10);
    array.push(el)
    //sum += el
    sum += `[${el}]`
}

console.log(array)
console.log(sum)

