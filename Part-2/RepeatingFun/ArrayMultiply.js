function copyArrayMultiplyBy2(array) {
    const output = [];
    for(let i = 0; i < array.length; i++) {
        output.push(array[i] * 2);
    }
    return output;
}

const myArray = [1,2,3];
const result = copyArrayMultiplyBy2(myArray);