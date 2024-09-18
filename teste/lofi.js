const osBoss = {
  apiKey: "AIzaSyDykRCXKUlRJDIhbZU__gz-LQfNGWZAW-s",
  authDomain: "boss-fight-5a9b1.firebaseapp.com",
  databaseURL: "https://boss-fight-5a9b1-default-rtdb.firebaseio.com",
  projectId: "boss-fight-5a9b1",
  storageBucket: "boss-fight-5a9b1.appspot.com",
  messagingSenderId: "320494732877",
  appId: "1:320494732877:web:58a5a208cfe06bd7bcbe04",
  measurementId: "G-JTYK0JJXP7"
};
const nosBoss = {
  apiKey: "AIzaSyBwt1PW-R-LnQijhSURjWeZ7pzDLF04mKs",
  authDomain: "non-boss-fight.firebaseapp.com",
  projectId: "non-boss-fight",
  storageBucket: "non-boss-fight.appspot.com",
  messagingSenderId: "446376318555",
  appId: "1:446376318555:web:3817d578906a0389ad117e",
  measurementId: "G-TEM03LCY8Z"
};

const init1 = firebase.initializeApp(osBoss, 'init1');
const init2 = firebase.initializeApp(nosBoss, 'init2');

const rain = firebase.firestore(init1);
const suns = firebase.firestore(init2);
const sky  = firebase.database(init1)
