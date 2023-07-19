var global1 = 1, global2 = 2;

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(global1, global2));

function foo(num1, num2) {
    return num1 - num2;
}

console.log(foo(global1, global2));

function bar(num1, num2) {
    return num1 * num2;
}

console.log(bar(global1, global2));

function baz(num1, num2) {
    return num1 / num2;
}

console.log(baz(global1, global2));