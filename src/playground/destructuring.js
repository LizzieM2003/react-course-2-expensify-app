// const person = {
//   name: 'Lizzie',
//   age: 22,
//   location: {
//     city: 'London',
//     temp: 14
//   }
// };

// const {
//   name: firstName = 'Anonymous',
//   age,
//   location: { city, temp: temperature }
// } = person;

// console.log(`${firstName} is ${age}!`);
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//     printed: 2017
//   }
// };

// const { publisher: { name: publisherName = 'Self-Published' } } = book;

// console.log(publisherName);

const address = ['35 Hawthorn Drive', 'Harrow', 'Middlesex', 'HA2 7NU'];
const [, town, county = 'Greater London'] = address;

console.log(`You are in ${town} ${county}`);

const item = ['Coffee', '£2.00', '£2.50', '£2.75'];
const [product, , medPrice] = item;

console.log(`A medium ${product} costs ${medPrice}`);


