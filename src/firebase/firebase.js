import * as firebase from 'firebase';
// import moment from 'moment';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// const expenses = [
//   {
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
//   },
//   {
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0)
//       .subtract(4, 'days')
//       .valueOf()
//   },
//   {
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0)
//       .add(4, 'days')
//       .valueOf()
//   }
// ];

// // for (let expense of expenses) {
// //   database.ref('expenses').push(expense);
// // }

// const getExpenses = snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//     console.log(expenses);
//   });
// };

// database.ref('expenses').on('value', getExpenses);

// database.ref('notes').push({
//   title: 'To Do Again',
//   body: 'Eat even more chocolate!'
// });

// const onValueChange = snapshot => {
//   const { name, job: { title, company } } = snapshot.val();
//   console.log(`${name} is a ${title} at ${company}`);
// };

// const readError = e => {
//   console.log('Error occurred while reading', e);
// };

// const changedValue = database.ref().on('value', onValueChange, readError);

// database.ref('job/company').set('Awful');

// database
//   .ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     console.log('Success, here is the data', snapshot.val());
//   })
//   .catch(e => {
//     console.log('Error fetching data', e);
//   });

// database
//   .ref()
//   .set({
//     name: 'Lizzie Mendes',
//     age: 42,
//     stressLevel: 4,
//     job: {
//       title: 'Skivvy',
//       company: 'Awful'
//     },
//     location: {
//       city: 'London',
//       country: 'United Kingdom'
//     }
//   })
//   .then(() => {
//     console.log('Data was saved successfully');
//   })
//   .catch(e => {
//     console.log('Failed -', e);
//   });

// database.ref('age').set(43);
// database.ref('location/city').set('Birmingham');

// database.ref('attributes').set({
//   height: 166,
//   weight: 66
// });

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('isSingle successfully removed');
//   })
//   .catch(e => {
//     console.log('Error removing isSingle:', e);
//   });

// database.ref().update({
//   name: 'Speckles',
//   age: 5,
//   job: 'Chasing squirrels'
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Terrible',
//   'location/city': 'Birmingham'
// });

// setTimeout(() => {
//   database.ref('age').set(22);
// }, 3500);
// setTimeout(() => {
//   database.ref().off('value', changedValue);
// }, 7000);
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);
