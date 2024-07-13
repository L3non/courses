let n = 20;

n = n && 10;

n = n.toString(16);
console.log(n, typeof n);

n = 10;

n = n.toString(2);
console.log(n, typeof n);

function test(param) {
    param = param != undefined ? param : 10;
    console.log(param);
}
test();
test(0);