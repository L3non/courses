let n = 20;

function test (n) {
    console.log(`n internal to test function ${++n}`);
}

test(n); // Value 20

console.log(`n external to test function ${n}`);

const arr = [1, 2, 3]; // Memory address a1
const arr1 = [4, 5, 6]; // Memory address a2

function addInArray (value, arr) {
    arr[arr.length] = value;
}

function cleanArray (arr) {
    arr.length = 0;
}

// addInArray('New value', [1, 2, 3]); X
// addInArray('New value', a1);
console.log(arr);

addInArray('New value', arr);
cleanArray(arr);

console.log(arr);

const obj = {name: 'Daniel'};

function addPropInObj (prop, value, obj) {
    if (obj[prop] == undefined) {
        obj[prop] = value;
    }
}

addPropInObj('last_name', 'maria', obj);

console.log(obj);