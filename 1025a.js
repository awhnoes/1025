'use strict';

const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));

fruits.push('apple', 'peach');
console.log(fruits);

fruits.pop();
fruits.pop();
console.log(fruits);

fruits.unshift('strawberry', 'lemon');
console.log(fruits);

fruits.shift();
fruits.shift();
console.log(fruits);

fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'apple', 'watermelon');
console.log(fruits);

const fruits2 = ['pear', 'coconut'];
const newFurits = fruits.concat(fruits2);
console.log(newFurits);

console.clear();
console.log(fruitss);
console.log(fruits.index0f('apple'));
console.log(fruits.index0f('watermelon'));

console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));
console.log(fruits.index0f('coconut'));

console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.index0f('apple'));
console.log(fruits.lasrIndex0f('apple'));
