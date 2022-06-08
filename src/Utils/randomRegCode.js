function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRegCode(codeLength = 8) {
    let regCode = '';
    for (let i = 0; i < codeLength; i++) {
        let charType = rand(0, 1);
        const char = charType ? String.fromCharCode(rand(48, 57)) : String.fromCharCode(rand(65, 90));
        regCode = regCode + char;
    }
    return regCode;
}

export default randomRegCode;
