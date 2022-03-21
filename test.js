// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

function copy(mainObj) {
    let objCopy = {};

    let key;

    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}


const number = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y:4
    }
};


const newNumbers = copy(number);

newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(number);

