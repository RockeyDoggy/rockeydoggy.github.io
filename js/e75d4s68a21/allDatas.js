
//DataBase
const firebaseConfig = {
  apiKey: "AIzaSyCK-Hh9WOIjhNzQYtnAg-veYQaHmsN5nvQ",
  authDomain: "projeto-de-teste-3b179.firebaseapp.com",
  projectId: "projeto-de-teste-3b179",
  storageBucket: "projeto-de-teste-3b179.appspot.com",
  messagingSenderId: "1020870468830",
  appId: "1:1020870468830:web:36313c872dc8a7a2c10e4f",
  measurementId: "G-ZFEK85WY4H"
};
firebase.initializeApp(firebaseConfig);

const path = firebase.firestore();




//function loadUsers(add){
//        //Kingo
//    const kingCard = document.createElement('IMG');
//    kingCard.setAttribute('src', chefe.king_avatar);
//    kingCard.setAttribute('title', chefe.king_nome);
//    kingCard.setAttribute('onclick', 'kingo()');
//        //Pandas
//    const pandasCard = document.createElement('IMG');
//    pandasCard.setAttribute('src', chefe.pandas_avatar);
//    pandasCard.setAttribute('title', chefe.pandas_nome);
//    pandasCard.setAttribute('onclick', 'pandos()');
//        //Steve
//    const steveCard = document.createElement('IMG');
//    steveCard.setAttribute('src', chefe.steve_avatar);
//    steveCard.setAttribute('title', chefe.steve_nome);
//    steveCard.setAttribute('onclick', 'stevo()');
//        //User 04
//    const User4Card = document.createElement('IMG');
//    User4Card.setAttribute('src', '');
//    User4Card.setAttribute('title', '');
//    User4Card.setAttribute('onclick', 'user4()');
//        //User 05
//    const User5Card = document.createElement('IMG');
//    User5Card.setAttribute('src', '');
//    User5Card.setAttribute('title', '');
//    User5Card.setAttribute('onclick', 'user5()');
//
//    bossesField.append(kingCard, pandasCard, steveCard, User4Card, User5Card);
//}
