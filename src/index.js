import LinkedList from './LinkedList';


const list = new LinkedList();
console.log(list.size())
console.log(list.head())
console.log(list.tail())
console.log(list.at(5))

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.pop());
console.log(list.toString());
console.log(list.tail());
console.log(list.head());
list.prepend('test')
console.log(list.toString());
console.log(list.head());
list.insertAt(3, 'dogger');
console.log(list.toString());
list.removeAt(3);
console.log(list.toString());
console.log(list.size());
console.log(list.at(4))
console.log(list.contains('test'))
console.log(list.find('test'))
console.log(list.find('parrot'))
