import Person from './person';
import { mergeSort } from './mergeSort/mergeSort'

let person = new Person('James Haley');

global.sort = mergeSort;

console.log(
    'sort([3,2,4], (a,b) => a<b)\n',
    sort([3,2,4], (a,b) => a<b),
    '\n',
    person.sayHello()
)
