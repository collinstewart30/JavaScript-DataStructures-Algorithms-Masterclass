//First way to add all numbers up to n
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(addUpTo(6));
//Speed test for first way
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed Function 1: ${(t2 - t1) / 1000} seconds.`);

//Second way to add all numbers up to n
function addUpTo2(n) {
    return n * (n + 1) /2;
}
console.log(addUpTo2(6));
//Speed test for second way
let t3 = performance.now();
addUpTo(1000000000);
let t4 = performance.now();
console.log(`Time Elapsed Function 2: ${(t4 - t3) / 1000} seconds.`);