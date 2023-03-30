const countRegNumber = string => {
    let reg = string.split(',');
    return reg.length;
}

console.log(countRegNumber('CA 123458236'));