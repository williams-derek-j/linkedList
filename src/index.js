import LinkedList from './LinkedList';
import Hashmap from './Hashmap';

// const list = new LinkedList();
// console.log(list.size())
// console.log(list.head())
// console.log(list.tail())
// console.log(list.at(5))
//
// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
//
// console.log(list.toString());
// console.log(list.pop());
// console.log(list.toString());
// console.log(list.tail());
// console.log(list.head());
// list.prepend('test')
// console.log(list.toString());
// console.log(list.head());
// list.insertAt(3, 'dogger');
// console.log(list.toString());
// list.removeAt(3);
// console.log(list.toString());
// console.log(list.size());
// console.log(list.at(4))
// console.log(list.contains('test'))
// console.log(list.find('test'))
// console.log(list.find('parrot'))

const test = new Hashmap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
console.log('h', test.capacity)

test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
console.log('hh', test.capacity)

test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.length())
console.log('hhh', test.capacity)
console.log(test.getValue('frog'))
test.set('frog', 'blue')
console.log(test.getValue('frog'))

test.set('grape2', 'purple')
test.set('hat2', 'black')
test.set('ice cream2', 'white')
test.set('jacket2', 'blue')
test.set('kite2', 'pink')
console.log('hhhh', test.capacity)
test.set('lion2', 'golden')
test.set('grape3', 'purple')
test.set('hat3', 'black')
test.set('ice cream3', 'white')
test.set('jacket3', 'blue')
test.set('kite3', 'pink')
test.set('lion3', 'golden')
console.log(test.length())
console.log('hhhhh', test.capacity)
console.log(test.getValue('frog'))
console.log(test.keys())
console.log(test.values())
console.log(test.entries())
test.set('grape4', 'purple')
test.set('hat4', 'black')
test.set('ice cream4', 'white')
test.set('ice cream5', 'white')
console.log('g',test.length())
console.log(test.getValue('ice cream5'))
test.set('ice cream5', 'yellow')
console.log('g',test.length())
console.log(test.getValue('ice cream5'))
test.set('ice cream55', 'yellow')
console.log('g',test.length())
test.set('ice cream6', 'white')
test.set('ice cream7', 'white')
console.log(test.length())
console.log(test.capacity)
console.log(test.has('ice cream7'))
console.log(test.has('ice cream8'))