// Arrow function
function triple(x) {
    return x * 3;
}
// Có thể viết lại thành
var triple = (x) => {
    return x * 3;
}

// Enhanced object literals
//// Định nghĩa key: value cho object
//// Định nghĩa function cho object

var item_name = 'Milk';
var price = '50000';

var items = {
    item_name,
    price,
    getName() {
        console.log(item_name);
    }
}

var keyName1 = 'name';
var keyName2 = 'address';

const test = {
    [keyName1]: 'HUST',
    [keyName2]: 'Ha Noi'
}

// Destructing
var subject = ['Math', 'Histosy', 'Music'];
var [a, b, c] = subject;
// a = 'Math'
// b = 'History'
// c = 'Music'

// Rest
var course = {
    name: 'Java',
    price: 1000,
    e: {
        name: 'Intro'
    }
}

var [a, ...rest] = course;
// rest = {
//     price: 1000,
//     e: {
//         name: 'Intro'
//     }
// }

// Spread operator
var arr1 = [1, 2, 3];
var arr2 = [2, 3];
var arr3 = [...arr2, ...arr1];
// arr3 = [2, 3, 1, 2, 3]

// Hook

import { useState } from 'react'
const Component = () => {
    const [state, setState] = useState(initState);
}