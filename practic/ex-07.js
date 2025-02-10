function assistantMax(num1, num2, num3) {
    let tempMax;
    if (num1 > num2 && num1 > num3) {
        tempMax = num1;
    } else {
        if (num2 > num3) {
            tempMax = num2;
        } else {
            tempMax = num3;
        }
    }
    //console.log(tempMax);
    //return tempMax;
}

let a1 = 24 
let a2 = 25

let a3 = 44
let a4 = 45

let a5 = 64
let a6 = 65

let max1 = assistantMax(a1, a2)
let max2 = assistantMax(a3, a4)
let max3 = assistantMax(a5, a6)
let result = assistantMax(max1, max2, max3)
console.log(result);