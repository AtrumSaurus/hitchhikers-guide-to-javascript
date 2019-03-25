const point1 = {
    x: 10,
    y: 20,
};

const point2W = point1;

point2W.y = 40;

console.log(point1, point2W); // what happened ?

// 1 - solution class or function generator

const pointModelGenerator = (coordinates) => ({
    x: coordinates.x,
    y: coordinates.y,
});

const p1 = pointModelGenerator({ x: 10, y: 20 });
const p2 = pointModelGenerator({ x: 10, y: 40 });

console.log(p1, p2); // it's ok

// 2 - solution object assign

const assignedPoint = Object.assign({}, p1, { x: 10, y: 40 });

console.log(p1, assignedPoint); // it's ok but...

// 3 - solution reduce, it's like an overkill

// 4 - external libs https://lodash.com/, immutable.js

// 5 - Advanced vanilla constructs, Reflection, Proxy, Object.freeze ...
