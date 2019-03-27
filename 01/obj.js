const point1 = {
    x: 10,
    y: 20,
};

const point2W = point1;

point2W.y = 40;

console.log(point1, point2W); // what happened ?

// 1 - solution class or function generator

const Point = ({ x = 0, y = 0 } = {}) => ({ x, y }); // factory

const p1 = Point({ x: 10, y: 20 });
const p2 = Point();

console.log(p1, p2); // it's ok

// 2 - solution object assign BEST PRACTICE!

const assignedPoint = Object.assign({}, p1, { x: 10, y: 40 });

console.log(p1, assignedPoint); // it's ok ...

// 3 - solution reduce it's pretty hard to read

// 4 - external libs https://lodash.com/, immutable.js, ramda

// 5 - Advanced vanilla constructs, Reflection, Proxy, Object.freeze ...
