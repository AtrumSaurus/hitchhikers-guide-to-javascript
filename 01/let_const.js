const a = 1;
const b = 2;

const c = a + b; // 3

// let e const!
let final = 0;

for (let i=0; i < 10; i += 1){
    const d = (a + i) * b;
    final += d;
}

console.log(final);
