  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCVK_krSf90A23j6jnXL2OGgjd79iBXNWc",
    authDomain: "micellas.firebaseapp.com",
    projectId: "micellas",
    storageBucket: "micellas.appspot.com",
    messagingSenderId: "758076595036",
    appId: "1:758076595036:web:084b13906d2228a5397f99",
    measurementId: "G-8XNDWQK9TJ"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
const display = firebase.firestore();

let arrayDisplay = [];
const showUs = display.collection('screen');

playDisplay();
function playDisplay(){
  showUs.orderBy("num", "asc").onSnapshot((showAll) =>{
    arrayDisplay = [];
    showAll.forEach((ray)=>{
      const dados = ray.data();
      arrayDisplay.push(dados);
      shootDisplay();
      if(ray === 'added'){
        shootDisplay();
      }
      if(ray === 'modified'){
        shootDisplay();
      }
      if(ray === 'removed'){
        shootDisplay();
      }
    });
    
  });
}
function shootDisplay(){
  ContentList.innerHTML = '';
  arrayDisplay.forEach((mission, index)=>{
    //Criação
    const missionBlock = document.createElement('div');
    const missionTitle = document.createElement('h1');
    const missionScore = document.createElement('div')
    const missionTotal = document.createElement('span')
    const missionMax   = document.createElement('span');
    
    //Modifier
    missionTitle.innerHTML = mission.title;
    missionTotal.innerHTML = mission.total;
    missionMax.innerHTML   = mission.max;
    missionScore.append(missionTotal, '/' , missionMax)
    missionBlock.append(missionTitle, missionScore);
    
    setTimeout(()=>{
      let calc = 0.1 + (index / 9);
      missionBlock.style.transform        = 'translate(0vw, 0vw)';
      missionBlock.style.transitionDelay  = `${calc}s`;
    }, 100);
    
    if(mission.total >= mission.max){
      // missionTitle.style.textDecoration = 'line-through';
      missionTitle.style.color          = '#9F9';
      missionTitle.style.textShadow     = '0 0 0.5vw #0F0';
      missionTitle.style.fontStyle      = 'italic';
      missionScore.style.color          = '#9F9';
      missionScore.style.textShadow     = '0 0 0.5vw #0F0';
      
      // setTimeout(()=>{
      //   missionBlock.style.transform = 'translate(70vw, 0vw)';
      //   missionBlock.style.maxHeight = '0vh'
      // }, 4000);
    }else if(mission.total < 0){
      missionTitle.style.textDecoration = 'line-through';
      missionTitle.style.color          = '#F99';
      missionTitle.style.textShadow     = '0 0 0.5vw #F00';
      missionTitle.style.fontStyle      = 'italic';
      missionScore.style.color          = '#F99';
      missionScore.style.textShadow     = '0 0 0.5vw #F00';
    }else{
      missionTitle.style.textDecoration = '';
      missionTitle.style.color          = '';
      missionTitle.style.textShadow     = '';
      missionScore.style.color          = '';
      missionScore.style.textShadow     = '';
    }
    
    if(mission.max <= '0'){
        missionTitle.style.fontSize = '28px';
        missionTitle.style.padding = '8px 0';
        missionTitle.classList.add('unic');
      if(mission.total < "0"){
        missionTitle.style.textDecoration = 'line-through';
        missionTitle.style.color          = '#F99';
        missionTitle.style.textShadow     = '0 0 0.5vw #F00';
        missionTitle.style.fontStyle      = 'italic';
        missionScore.innerHTML            = '';
      }else if(mission.total > "0"){
        missionTitle.style.textDecoration = '';
        missionTitle.style.color          = '#9F9';
        missionTitle.style.textShadow     = '0 0 0.5vw #0F0';
        missionTitle.style.fontStyle      = 'italic';
        missionScore.innerHTML            = '';
      }else{
        missionScore.innerHTML = '';
        missionTitle.style.fontSize = '28px';
        missionTitle.style.padding = '8px 0';
        missionTitle.style.fontStyle      = '';
        missionTitle.style.textDecoration = '';
        missionTitle.style.color          = '';
        missionTitle.style.textShadow     = '';
      }
    }
    
    ContentList.append(missionBlock);
  });
}
