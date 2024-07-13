// Functions declarations
function hello(name) {
    console.log(`Hello from function declaration, ${name}`);
}

// Functions expressions
const hello1 = function (name) {
    console.log(`Hello from function expression, ${name}`);
}
hello1('Maria');

const arr = [
    hello, hello1,
    function () {
        console.log('Anonymous function inside array executed');
    }
];
arr[2]();

// Arrow functions
const hello2 = (name) => {
    console.log(`Hello from arrow function, ${name}`);
}
hello2('Bruno');

const sum = (n, n1) => n + n1;
console.log(sum(2, 7));

const multiplicateByTwo = n => n * 2;
console.log(multiplicateByTwo(6));