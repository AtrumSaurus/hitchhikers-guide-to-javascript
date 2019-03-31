const fruits = ['banana', 'cat', 'apple'];

// 1 - return only fruits -> ['banana', 'apple']

// old way

function isFruitOld(fruit) {
    return fruit !== 'cat';
}

let result = [];
for (let i = 0; i < fruits.length; i += 1) {
    if (isFruitOld(fruits[i])) {
        result.push(fruits[i]);
    }
}

console.log(result);
// result is right but do i have to write as much lines?

// es6 way

const isFruit = fruit => fruit !== 'cat';

const resultEs6 = fruits.filter(isFruit);

console.log(resultEs6);

// 2 - map

const mapped = fruits.filter(isFruit).map(f => f.toUpperCase());
console.log(mapped);

// 3 - reduce

const l = [1, -10, 20, 10, 41, -20];

const res = l.reduce((acc, n) => acc + n, 0);

console.log(`The answer is ${res}`);

const catFromThirdParty = {
    Nome: 'Salem',
    Cognome: 'The Cat',
    Padrone: 'Sabrina',
    Colore: 'nero',
    Magico: 'Si',
};

const ourCatModel = {
    firstName: 'Silvestro',
    lastName: 'Gatto',
    owner: 'Granny',
    color: 'biannco e nero',
};

// vogliamo trasformare il primo nel secondo senza scrivere tropper righe...

const translationRules = {
    Nome: 'firstName',
    Cognome: 'lastName',
    Padrone: 'owner',
    Colore: 'color',
};

const translated = Object.keys(catFromThirdParty)
  .reduce((acc, key) => (
    translationRules[key] ?
    {  ...acc, [translationRules[key]]: catFromThirdParty[key] } :
    acc
  ), {});

console.log(translated);
