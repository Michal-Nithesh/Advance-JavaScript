function copyArrayDivideBy2(array) {
    const output = [];
    for(let i = 0; i < array.length; i++) {
        output.push(array[i] / 2);
    }
    return output
}

const newArray = [1,2,3];
copyArrayDivideBy2(newArray);