
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
firebase.initializeApp(firebaseConfig);
const display = firebase.firestore();


//      Debug      //
let missionName;
let missionGoal;
let missionNow;
let missionPos;
let missionPath;
let missionsCount;


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
  missionsCount = arrayDisplay.length;
  arrayDisplay.forEach((mission, index)=>{
    //Criação
    const missionBlock = document.createElement('div');
    const missionTitle = document.createElement('h1');
    const missionScore = document.createElement('div')
    const missionTotal = document.createElement('span')
    const missionMax   = document.createElement('span');
    const orderyBox    = document.createElement('div');
    const removeMission= document.createElement('button');
    
    //Modifier
    missionTitle.innerHTML = mission.title;
    missionTotal.innerHTML = mission.total;
    missionMax.innerHTML   = mission.max;
    orderyBox.innerHTML    = mission.num;
    removeMission.title    = `Remover Missão: ${mission.title}`;
    missionScore.append(missionTotal, '/' , missionMax)
    missionBlock.append(missionTitle, missionScore, orderyBox, removeMission);
    
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
        missionTitle.style.fontSize = '18px';
        missionTitle.style.padding = '8px 0';
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
        missionTitle.style.fontSize = '18px';
        missionTitle.style.padding = '8px 0';
        missionTitle.style.fontStyle      = '';
        missionTitle.style.textDecoration = '';
        missionTitle.style.color          = '';
        missionTitle.style.textShadow     = '';
      }
    }
    
    ContentList.append(missionBlock);
    
    //Funcionalidades
    
    //Remove Mission
    removeMission.addEventListener('click', (e)=>{
      setTimeout(()=>{
        changeWindow.innerHTML = '';
        const tabTitle   = document.createElement('h1');
        const tabInfos   = document.createElement('h4');
        const divPrevent = document.createElement('div');
        const buttonsDiv = document.createElement('div');
        const confirmRm  = document.createElement('button');
        const cancelRm   = document.createElement('button');
        const missionPath= document.createElement('p');
        
        tabTitle.innerHTML = 'Remover Missão';
        tabInfos.innerHTML = `você deseja remover a missão "${missionName}"`;
        
        //Attributes
        confirmRm.innerHTML = 'Excluir';
        cancelRm .innerHTML = 'Cancel';
        missionPath.innerHTML = `Missão ${mission.path}`;
        buttonsDiv.append(cancelRm, confirmRm)
        changeWindow.append(tabTitle, tabInfos, divPrevent, buttonsDiv, missionPath);
        
        //Funcionalidades
        cancelRm.addEventListener('click', ()=>{
        document.documentElement.style.setProperty('--ChangeWindow', 'none');
        changeWindow.innerHTML = '';
        });
        
        confirmRm.addEventListener('click', ()=>{
          showUs.doc(mission.path).delete().then(()=>{
            document.documentElement.style.setProperty('--ChangeWindow', 'none');
            changeWindow.innerHTML = '';
            createCreations();
          })
        });
        
      }, 50);
    });
    
    //Edit Mission
    missionBlock.addEventListener('click', ()=>{
      missionName = mission.title;
      missionGoal = mission.max;
      missionNow  = mission.total;
      missionPos  = mission.num;
      missionPath = mission.path;

      changeWindow.innerHTML = '';
      document.documentElement.style.setProperty('--ChangeWindow', 'flex');
      const windowTitle   = document.createElement('input');
      const windowDescr   = document.createElement('h2');
      const valuesPoint   = document.createElement('div');
      const windowValue   = document.createElement('h3');
      const windowButtons = document.createElement('div');
      const windowConfirm = document.createElement('button');
      const windowDeny    = document.createElement('button');
      const totalButtons  = document.createElement('div');
      const plusTotal     = document.createElement('button');
      const subtractTotal = document.createElement('button');
      const maxButtons    = document.createElement('div');
      const plusMaximum   = document.createElement('button');
      const subtractMax   = document.createElement('button');
      const levelNumer    = document.createElement('input');
      const missionCode  = document.createElement('p');
      
      //Insert
      windowButtons.append(windowDeny, windowConfirm);
      
      //Window Infos
      windowTitle.value = missionName;
      windowValue.innerHTML = `<span>${missionNow}</span>/<span>${missionGoal}</span>`;
      
      levelNumer.value        = missionPos;
      levelNumer.title        = 'Ordem/Posição';
      windowDeny.innerHTML    = 'Cancelar';
      windowConfirm.innerHTML = 'Salvar';
      missionCode.innerHTML   = `Missão ${mission.path}`;
      
      //Propriedades
      windowTitle.setAttribute('contenteditable', 'true');
      levelNumer.setAttribute('type', 'number');
      
      //Aplicações
      totalButtons.append(plusTotal, subtractTotal);
      maxButtons.append(subtractMax, plusMaximum);
      valuesPoint.append(windowValue, totalButtons, maxButtons);
      changeWindow.append(windowTitle, windowDescr, valuesPoint, levelNumer, windowButtons, missionCode);
      plusTotal.innerHTML     = '+'
      subtractTotal.innerHTML = '-'
      plusMaximum.innerHTML   = '+'
      subtractMax.innerHTML   = '-'
      
      //Window Buttons Function
      windowDeny.addEventListener('click', ()=>{
        document.documentElement.style.setProperty('--ChangeWindow', 'none');
        changeWindow.innerHTML = '';
      });
      windowConfirm.addEventListener('click', ()=>{
        document.documentElement.style.setProperty('--ChangeWindow', 'none');
        changeWindow.innerHTML = '';
        showUs.doc(missionPath).update({
          title: windowTitle.value,
          num:   parseInt(levelNumer.value),
          max:   parseInt(missionGoal),
          total: parseInt(missionNow)
        }).then(()=>{
          playDisplay();
        });
      });
      
      /////////////////////////////////////////////////////////////
      
      plusTotal.addEventListener('click', ()=>{
        missionNow = parseInt(missionNow) + 1;

        windowValue.innerHTML = `<span>${missionNow}</span>/<span>${missionGoal}</span>`;
        confirmStatus();
      });
      subtractTotal.addEventListener('click', ()=>{
        missionNow = missionNow - 1;
        windowValue.innerHTML = `<span>${missionNow}</span>/<span>${missionGoal}</span>`;
        confirmStatus();
      });
      plusMaximum.addEventListener('click', ()=>{
        missionGoal = parseInt(missionGoal) + 1;
        windowValue.innerHTML = `<span>${missionNow}</span>/<span>${missionGoal}</span>`;
        confirmStatus();
      });
      subtractMax.addEventListener('click', ()=>{
        missionGoal = missionGoal - 1;
        windowValue.innerHTML = `<span>${missionNow}</span>/<span>${missionGoal}</span>`;
        confirmStatus();
      });
      //////////////////////////////////////////
      confirmStatus();
    });
    
    
  });
}

//Update Designs
function confirmStatus(){
  const dBs = document.querySelector('#changeWindow > div:nth-of-type(1) > h3');
  const titleChange = document.querySelector('#changeWindow > input:nth-of-type(1)');
  if(missionNow >= missionGoal){
    dBs.style.color                  = '#9F9';
    dBs.style.textShadow             = '0 0 10px #0F0';
    titleChange.style.color          = '#9F9';
    titleChange.style.textShadow     = '0 0 10px #0F0';
  }
  else if(missionNow < 0){
    dBs.style.color                  = '#F99';
    dBs.style.textShadow             = '0 0 10px #F00';
    titleChange.style.color          = '#F99';
    titleChange.style.textShadow     = '0 0 10px #F00';
  }else{
    dBs.style.color                  = '';
    dBs.style.textShadow             = '';
    titleChange.style.color          = '';
    titleChange.style.textDecoration = '';
    titleChange.style.textShadow     = '';
  }
  
  if(missionGoal <= 0){
    dBs.style.color                  = '';
    dBs.style.textShadow             = '';
    titleChange.style.color          = '';
    titleChange.style.textDecoration = '';
    titleChange.style.textShadow     = '';
    if(missionNow < "0"){
      dBs.style.color                  = '#F99';
      dBs.style.textShadow             = '0 0 10px #F00';
      titleChange.style.color          = '#F99';
      titleChange.style.textShadow     = '0 0 10px #F00';
    }else if(missionNow > "0"){
      dBs.style.color                  = '#9F9';
      dBs.style.textShadow             = '0 0 10px #0F0';
      titleChange.style.color          = '#9F9';
      titleChange.style.textShadow     = '0 0 10px #0F0';
    }else{
      dBs.style.color                  = '';
      dBs.style.textShadow             = '';
      titleChange.style.color          = '';
      titleChange.style.textDecoration = '';
      titleChange.style.textShadow     = '';
    }
  }
}

//Mission Changes

function generateRandomName(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

//Mission Create
createCreations();
function createCreations(){
  addMission.innerHTML = '';
  const randomName = generateRandomName(10);
  //generate
  const missionTopField     = document.createElement('div');
  const missionNameField    = document.createElement('input');
  const missionNumberField  = document.createElement('input');
  const missionCounts       = document.createElement('div');
  const missionCountNow     = document.createElement('input');
  const missionCountGoal    = document.createElement('input');
  const missionPathField    = document.createElement('input');
  const buttonsField        = document.createElement('div');
  const addButton           = document.createElement('button');
  const clearButton         = document.createElement('button');
  
  //Buttons Names
  addButton.innerHTML = 'Add';
  clearButton.innerHTML = 'Reset'
  missionTopField.append(missionNumberField, missionNameField);
  missionCounts.append(missionCountNow, '/' , missionCountGoal);
  buttonsField.append(addButton, clearButton);
  addMission.append(missionTopField, missionCounts , missionPathField, buttonsField);
  
  //Attributes
  missionCountNow.value  = '0';
  missionCountGoal.value = '0';
  missionNameField.placeholder = 'Nome Da Nova Missão';
  missionCountNow.setAttribute('onkeypress', 'return /[0-9]/i.test(event.key)');
  missionCountGoal.setAttribute('onkeypress', 'return /[0-9]/i.test(event.key)');
  missionPathField.disabled = 'true';
  missionPathField.value = `Mission ${randomName}`;
  setTimeout(()=>{
    missionNumberField.value = arrayDisplay.length;
  }, 500);
  
  
  //Simply Function
  missionCountNow.addEventListener('focusout', ()=>{
    if(missionCountNow.value === '' || missionCountNow.value === ' '){
      missionCountNow.value = 0
    }
  });
  missionCountGoal.addEventListener('focusout', ()=>{
    if(missionCountGoal.value === '' || missionCountGoal.value === ' '){
      missionCountGoal.value = 0
    }
  });
  
  //Botões
  clearButton.addEventListener('click', ()=>{
    missionNameField.value = '';
    missionCountNow.value  = 0
    missionCountGoal.value = 0
    missionPathField.value = `Mission ${randomName}`;
    missionNumberField.value = arrayDisplay.length;
  });
  
  addButton.addEventListener('click', ()=>{
    showUs.doc(randomName).set({
      max:    missionCountGoal.value,
      total:  missionCountNow.value,
      title:  missionNameField.value,
      num:    parseInt(missionNumberField.value),
      path:   randomName
    }).then(()=>{
      createCreations();
    });
  });
}
