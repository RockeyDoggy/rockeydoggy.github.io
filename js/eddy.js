/////////////////////////////////////////////
///////////////////Datas/////////////////////
////////////////////////////////////////////
const firebaseConfig = {
  apiKey: "AIzaSyCGt_zN1KCBLfRaPFkuFQIYEMGaDwVmFzU",
  authDomain: "paperviewers.firebaseapp.com",
  projectId: "paperviewers",
  storageBucket: "paperviewers.appspot.com",
  messagingSenderId: "294456888058",
  appId: "1:294456888058:web:2042392a30f87a7c981743",
  measurementId: "G-FJYTWN8S62"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const documento = firebase.firestore();
const getDocs   = documento.collection('documentos');
const getRules  = documento.collection('ArtotzkaDatas');
////////////////////////////////////////////
//////////////////Infos/////////////////////
///////////////////////////////////////////
let userLoggedNow;
let userAvatar;
let caminho;
let registred;
let passCountry;
let nationSelect;

const clientId = 'vc9m669jig0ibshss8l25dj7bzv0n3';
const redirectUri = 'https://rockeydoggy.github.io/eddy';
const scope = 'user:read:email';
const userInfo = document.getElementById('user-info');

const params = new URLSearchParams(window.location.hash.substring(1));
const accessToken = params.get('access_token');

if (accessToken) {
  fetch('https://api.twitch.tv/helix/users', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Client-Id': clientId
    }
  })
  .then(response => response.json())
  .then(data => {
    const user = data.data[0];
    userLoggedNow = user.display_name;
    userAvatar    = user.profile_image_url;
    caminho       = user.login;
    console.log(user.display_name);
    autorizar();
  });
}

/////////////////////////////////////////////
///////////////////Lists////////////////////
////////////////////////////////////////////
/////Lista De Paginas/////////
const pagesInfo = [
  {nome: 'Documentação', numero: 2, abrev: "DOC", top: '35%', left:'9%'},
  {nome: 'Registro De Passaporte', numero: 1, abrev: "PASS", top: '20%', left:'0%'},
  {nome: 'Regras', numero: 0, abrev: "RULE", top: '2%', left:'8%'}
]

//////Lista de Passaporte////////
const passportStyle = [
  {
    id:   'Antegria',
    icon: 'https://i.imgur.com/DMGf1Vh.png',
    name: '',
    color:'#314d21',
    high: 'sele'
  },
  {
    id:   'Arstotzka',
    icon: 'https://i.imgur.com/ZSXQrZ9.png',
    name: '',
    color:'#3b483b',
    high: 'default'
  },
  {
    id:   'Impor',
    icon: 'https://i.imgur.com/2LgerpM.png',
    name: '',
    color:'#661f09',
    high: 'default'
  },
  {
    id:   'Kolechia',
    icon: 'https://i.imgur.com/AH5IiGc.png',
    name: '',
    color:'#55253f',
    high: 'default'
  },
  {
    id:   'Obristan',
    icon: 'https://i.imgur.com/YR9ILuP.png',
    name: '',
    color:'#8a0c0c',
    high: 'default'
  },
  {
    id:   'Republica',
    icon: 'https://i.imgur.com/vnPJkwK.png',
    name: '',
    color:'#4c2a1b',
    high: 'default'
  },
  {
    id:   'UnitedFed',
    icon: 'https://i.imgur.com/KTiT9g3.png',
    name: '',
    color:'#231e55',
    high: 'default'
  },
  {
    id:   'Pezpert',
    icon: 'https://i.imgur.com/S8Kmjkm.png',
    name: '',
    color:'#8a0c0c',
    high: 'default'
  }
]
///Regras
let rulesBook = [];

//Opções de Preenchimento
let passList;
let pagIs = 1;
let actualPage;
function PASS(){
  RightSide.innerHTML = '';
  pagIs = 1;
  //Separações
  const descript = document.createElement('div');
  const inputs   = document.createElement('div');
  const extraInf = document.createElement('div');
  passList       = document.createElement('div');
  //Informações Necessarias
  const tNameInp = document.createElement('input');
  const sexInput = document.createElement('input');
  const origInp  = document.createElement('input');
  const info4Inp = document.createElement('input');
  const extraInp = document.createElement('input');
  const docText  = document.createElement('textarea');
  //Descrições
  const nameDesc = document.createElement('h2');
  const sexDesc  = document.createElement('h2');
  const origDesc = document.createElement('h2');
  const info4Desc= document.createElement('h2');
  const extraInfo= document.createElement('span')
  const docDesc  = document.createElement('h2');
  const passDesc = document.createElement('span');
  const pageTitle= document.createElement('h1');
  //Textos
  // tNameInp.placeholder = 'Nome Completo';
  // sexInput.placeholder = 'Genero';
  // origInp.placeholder  = 'Origem';
  // info4Inp.placeholder = 'Informação 4';
  // extraInp.placeholder = 'Informação Extra';
  nameDesc  .innerHTML = 'NOME';
  sexDesc   .innerHTML = 'GENERO';
  origDesc  .innerHTML = 'ORIGEM';
  info4Desc .innerHTML = 'INFO4';
  extraInfo .innerHTML = 'ExtraInfo'
  docDesc   .innerHTML = 'DocInfo';
  passDesc  .innerHTML = 'List Passport Country Style'
  pageTitle .innerHTML = 'Registro de Passaporte';
  //Atributos
  // tNameInp.maxLength = '14'
  tNameInp.maxLength = '13';
  sexInput.maxLength = '13'
  origInp .maxLength = '13'
  info4Inp.maxLength = '13'
  extraInp.maxLength = '28'
  docText .maxLength  = '696';
  passList.classList.add('PassportList');
  
  //Funções De Abreviação (Abreviador)
  function abrevPlay(){
    tNameInp.value = userLoggedNow.replace(/[-_]/g, ' ');
  // tNameInp.value = userLoggedNow;
    
    const FullName = tNameInp.value.split(' ');
    if(FullName.length <= 1){
      tNameInp.value = tNameInp.value;
    }else{
      const FirstName= FullName[0];
      
      const Abreviate= FullName.slice(1).map(nome => nome.charAt(0).toUpperCase() + '.').join(' ');
      tNameInp.value = `${FirstName} ${Abreviate}`;
      userLoggedNow  = `${FirstName} ${Abreviate}`;
    }
    const infoPreview = document.querySelectorAll('#PassPreview > div:nth-child(1) > div:nth-child(2) input');
    const infosEdit   = document.querySelectorAll('#RightSide > div:nth-child(3) input');
    infoPreview[0].value = infosEdit[0].value
  }
  //Aplicações
  descript.append(nameDesc, sexDesc , origDesc, info4Desc);
  inputs  .append(tNameInp, sexInput, origInp, info4Inp);
  // passList.append(passDesc);
  extraInf.append(extraInfo, extraInp);
  RightSide.append(pageTitle, descript, inputs, extraInf, passList);
    
  //Funções
  tNameInp.addEventListener('input', mirrorInformations);
  sexInput.addEventListener('input', mirrorInformations);
  origInp.addEventListener('input', mirrorInformations);
  info4Inp.addEventListener('input', mirrorInformations);
  extraInp.addEventListener('input', mirrorInformations);
  docText.addEventListener('input', mirrorInformations);
  
  arrayPassports();
  pageCount();
  passportPreview();
  abrevPlay();
}

//Funções
function mirrorInformations(){
  const infosEdit   = document.querySelectorAll('#RightSide > div:nth-child(3) input');
  const infosExte   = document.querySelectorAll('#RightSide > div:nth-child(4) input');
  const infoPreview = document.querySelectorAll('#PassPreview > div:nth-child(1) > div:nth-child(2) input');
  
  infoPreview[0].value = infosEdit[0].value
  infoPreview[1].value = infosEdit[1].value
  infoPreview[2].value = infosEdit[2].value
  infoPreview[3].value = infosEdit[3].value
  infoPreview[4].value = infosExte[0].value
}

//////////////////////////////////////////
/////////////Page Count//////////////////
/////////////////////////////////////////

function pageCount(){
  PageMarksL.innerHTML = '';
  PageMarksR.innerHTML = '';
  pagesInfo.forEach((PageList)=>{
    const marks       = document.createElement('div');
    const markTXT     = document.createElement('h4');
    markTXT.innerHTML = PageList.abrev;
    marks.value       = PageList.abrev;
    marks.style.top   = PageList.top;
    marks.style.setProperty('--HorMarkPos', PageList.left);
    marks.append(markTXT);
    if(pagIs > PageList.numero){
      PageMarksL.append(marks);
    }else{
      PageMarksR.append(marks);
    }
    if(pagIs === PageList.numero){
      marks.style.left = '-4%';
    }
    marks.addEventListener('click', ()=>{
      pagIs      = PageList.numero;
      actualPage = PageList.abrev;
      pagesNavigation();
      pageCount();
    });
  });
}

function pagesNavigation(){
  if(pagIs === 0){
    document.documentElement.style.setProperty('--rulesView', 'block');
    document.documentElement.style.setProperty('--Page1', 'none');
    document.documentElement.style.setProperty('--Page2', 'none');
    pagesInfo[0].left = '20%';
    pagesInfo[1].left = '15%';
    // pagesInfo[2].left = '0%';
    document.documentElement.style.setProperty('--WhosNext', 'none');
    document.documentElement.style.setProperty('--WhosPrev', 'none');
  }
  else if(pagIs === 1){
    document.documentElement.style.setProperty('--rulesView', 'none');
    document.documentElement.style.setProperty('--Page1', '');
    document.documentElement.style.setProperty('--Page2', 'none');
    pagesInfo[0].left = '9%';
    // pagesInfo[1].left = '15%';
    pagesInfo[2].left = '8%';
    document.documentElement.style.setProperty('--WhosNext', 'block');
    document.documentElement.style.setProperty('--WhosPrev', 'none');
  }
  else if(pagIs === 2){
    document.documentElement.style.setProperty('--rulesView', 'none');
    document.documentElement.style.setProperty('--Page1', 'none');
    document.documentElement.style.setProperty('--Page2', 'flex');
    // pagesInfo[0].left = '20%';
    pagesInfo[1].left = '2%';
    pagesInfo[2].left = '16%';
    document.documentElement.style.setProperty('--WhosNext', 'none');
    document.documentElement.style.setProperty('--WhosPrev', 'block');
  }
}

//////////////////////////////////////////
////////////Passports Styles//////////////
/////////////////////////////////////////
function arrayPassports(){
  const passStyleTitle = document.createElement('h4');
  passStyleTitle.innerHTML = 'Nacionalidade';
  passList.append(passStyleTitle);
  
  passportStyle.forEach((passport)=>{
    const passBox   = document.createElement('div');
    const passName  = document.createElement('p');
    const selected  = document.createElement('div');
    
    //Text Name
    passName.innerHMTL = passport.nome;
    passBox.style.backgroundImage = `url(${passport.icon})`;
    passBox.append(selected);
    passList.append(passBox);
    
    if(passport.high === 'sele'){
      passBox.classList.add(passport.high);
    }
    //funções
    passBox.addEventListener('click', ()=>{
      const prevPass       = Math.floor(Math.random() * 6) -3;
      const rotate         = Math.floor(Math.random() * 90) -45;
      const selPrev        = document.querySelector('#PassPreview > div:nth-child(1)');
      const passTypeClass  = document.querySelector('#PassPreview > div:nth-child(1)');
      passTypeClass.removeAttribute('class');
      passTypeClass.classList.add(passport.id);
      nationSelect = passport.id;
      if(document.querySelectorAll('.sele')[0]){
        document.querySelectorAll('.sele')[0].classList.remove('sele');
      }
      passBox.classList.add('sele');
      
      document.documentElement.style.setProperty('--PassPreviewColor', passport.color);
      selected.style.transform = `rotate(${rotate}deg)`;
      selPrev.style.transform = `rotate(${prevPass}deg)`;
    });
  });
}

/////////////////////////////////////
//////////Document Page//////////////
////////////////////////////////////

function DOC(){
  LeftSide2.innerHTML = '';
  RightSide2.innerHTML = '';
  //Pagina 1//
  const divInside = document.createElement('div');
  const pageTitle = document.createElement('h1');
  const textField = document.createElement('textarea');
  const areaPlHd  = document.createElement('div');
  pageTitle.innerHTML = 'Documento Extra';
  textField.setAttribute('contenteditable', 'true');
  textField.innerHTML = '';
  areaPlHd.innerHTML  = 'ESCREVA AQUI';
  textField.maxLength = 696;
  divInside.append(pageTitle, textField, areaPlHd);
  RightSide2.append(divInside);
  
  //Pagina 2
  const actArea    = document.createElement('div');
  const docPreview = document.createElement('div');
  const docTextArea= document.createElement('div');
  const sendButton = document.createElement('button');
  //Text
  sendButton.innerHTML= 'Enviar';
  
  docPreview.append(docTextArea);
  actArea.append(docPreview);
  LeftSide2.append(actArea, sendButton);
  
  //Functions
  textField.addEventListener('input', ()=>{
    docTextArea.innerHTML = textField.value;
  });
  
  sendButton.addEventListener('click', ()=>{
    sendPassport();
  })
}

///////////////////////////////////
///////////Triggers////////////////
//////////////////////////////////

//////////////////////////////////////
///////////Previews//////////////////
////////////////////////////////////

/////Passport
function passportPreview(){
  PassPreview.innerHTML = '';
  //Criações
  window.passportBody = document.createElement('div');
  window.passInfos    = document.createElement('div');
  window.passAvatar   = document.createElement('div');
  window.passName     = document.createElement('input');
  window.passSex      = document.createElement('input');
  window.passOrig     = document.createElement('input');
  window.passInfo4    = document.createElement('input');
  window.extraInfo    = document.createElement('input');
  
  //Condições
  passName .setAttribute('disabled', 'true');
  passSex  .setAttribute('disabled', 'true');
  passOrig .setAttribute('disabled', 'true');
  passInfo4.setAttribute('disabled', 'true');
  extraInfo.setAttribute('disabled', 'true');
  
  passportBody.classList.add('Antegria');
  passInfos.append(passAvatar, passName, passSex, passOrig, passOrig, passInfo4, extraInfo);
  passportBody.append(passAvatar, passInfos);
  PassPreview.append(passportBody);
}

//////////////////////////////////
//////////Autenticação///////////
/////////////////////////////////
const loginButton = document.querySelector('#login button');

login.addEventListener('click', ()=>{
  window.location =`https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
  // userLoggedNow = 'Non User';
  // userAvatar    = 'https://static-cdn.jtvnw.net/jtv_user_pictures/d42263cc-4f32-4af5-a352-a5d7bcb3c345-profile_image-300x300.png';
  // caminho       = 'NonUser'
  loginDisable();
  autorizar();
});

function loginDisable(){
  login.style.pointerEvents = 'none';
  login.style.transform = 'translate(0, 300%)';
}

function autorizar(){
  const inputLogin = document.querySelector('#login input');
  if(userLoggedNow === '' || userLoggedNow === ' ' || userLoggedNow === ' ' || userLoggedNow === undefined || userLoggedNow === null || userLoggedNow === 'undefined'){
    
  }else{
    // autorizeToPass();
    // runBook();
    loginSequence();
  }
}

function autorizeToPass(){
  if(userLoggedNow === '' || userLoggedNow === ' ' || userLoggedNow === ' '){
    
  }else{
    document.documentElement.style.setProperty('--BTNFalse', 'none');
    document.documentElement.style.setProperty('--InpFalse', 'none');
    document.documentElement.style.setProperty('--LoginBTN', '0');
    document.documentElement.style.setProperty('--LoginInp', '0');
    document.documentElement.style.setProperty('--GateStyle', 'blur(0vw)');
    document.documentElement.style.setProperty('--GateStatus', '-100%');
    document.documentElement.style.setProperty('--TrapClickVisibility', '0');
    document.documentElement.style.setProperty('--TrapClickStyle', 'blur(0.3vw)');
    document.documentElement.style.setProperty('--PassAvatar', `url(${userAvatar})`);
    setTimeout(()=>{
      document.documentElement.style.setProperty('--TrapClickStatus', 'none');
    }, 1900);
  }
}

function closeGate(){
  document.documentElement.style.setProperty('--TrapClickStatus', '');
  setTimeout(()=>{
    document.documentElement.style.setProperty('--BTNFalse', 'none');
    document.documentElement.style.setProperty('--InpFalse', 'none');
    document.documentElement.style.setProperty('--LoginActivated', 'none');
    document.documentElement.style.setProperty('--LoginBTN', '0');
    document.documentElement.style.setProperty('--LoginInp', '0');
    document.documentElement.style.setProperty('--GateStyle', '');
    document.documentElement.style.setProperty('--GateStatus', '');
    document.documentElement.style.setProperty('--TrapClickVisibility', '');
    document.documentElement.style.setProperty('--TrapClickStyle', '');
    document.documentElement.style.setProperty('--PassAvatar', ``);
  }, 100)
}

function loginSequence(){
  getDocs.doc(caminho).onSnapshot((doc) =>{
    const datas = doc.data();
    
    //Primeira Entrada
    if(doc.exists){
      console.log(caminho, 'Existe');
      //By Status
      if(datas.status === 'Criando'){
        getPassport();
        autorizeToPass();
        runBook();
        getRulesBook();
        activeAllButtons();
      }else if(datas.status === 'Pendente'){
        closeGate();
      }else if(datas.status === 'Aprovado'){
        closeGate();
      }
      else{
        
      }
      
    }else{
      setProfile();
      console.log(caminho, 'Não Existe');
    }
    
    //Status do Usuario
//     if(){
      
//     }
  });
}

//Criar novo Passaporte
function setProfile(){
  getRulesBook();
  getDocs.doc(caminho).set({
    caminho: caminho,
    nome:    userLoggedNow,
    avatar:  userAvatar,
    num:     parseInt(registred),
    status:  'Criando',
    extra:   '',
    info4:   '',
    info5:   '',
    sex:     '',
    mensagem:'',
    orig:    '',
    nacao:   'Antegria',
    Ncolor:  '#314d21'
  });
  getRules.doc('RegionDatas').update({
    quantos: parseInt(registred)
  });
  // loginSequence();
}

function sendPassport(){
  const infosEdit   = document.querySelectorAll('#RightSide > div:nth-child(3) input');
  const infosExte   = document.querySelectorAll('#RightSide > div:nth-child(4) input');
  const docEdit     = document.querySelectorAll('#RightSide2 div:nth-child(1) textarea');
  getDocs.doc(caminho).update({
    nome:    userLoggedNow,
    avatar:  userAvatar,
    num:     parseInt(registred),
    status:  'Pendente',
    extra:   '',
    info4:   infosEdit[3].value,
    info5:   infosExte[0].value,
    sex:     infosEdit[1].value,
    mensagem:docEdit[0].value,
    orig:    infosEdit[2].value,
    nacao:   nationSelect,
    Ncolor:  ''
  }).then(()=>{
    closeGate();
    pagIs = 0;
    pagesNavigation();
  });
  getRules.doc('RegionDatas').update({
    quantos: parseInt(registred)
  });
}

//Carregar passaporte
function getPassport(){
  getDocs.doc(caminho).onSnapshot((passport)=>{
    const data = passport.data();
    const infosEdit   = document.querySelectorAll('#RightSide > div:nth-child(3) input');
    const infosExte   = document.querySelectorAll('#RightSide > div:nth-child(4) input');
    const docEdit     = document.querySelectorAll('#RightSide2 div:nth-child(1) textarea');
    const docPreview  = document.querySelectorAll('#LeftSide2 > div:nth-child(1) > div:nth-child(1) > div');
    const passTypeClass=document.querySelector('#PassPreview > div:nth-child(1)');
    const passPreview = document.querySelector('#PassPreview > div:nth-child(1)');
    infosEdit[0].value      = data.nome;
    infosEdit[1].value      = data.sex;
    infosEdit[2].value      = data.orig;
    infosEdit[3].value      = data.info4;
    infosExte[0].value      = data.info5;
    docEdit  [0].value      = data.mensagem;
    docPreview[0].innerHTML = data.mensagem;
    
    if(data.nacao === '' || data.nacao == undefined || data.nacao == null){
      passCountry = 'Antegria';
      nationSelect= 'Antegria';
    }else{
      passTypeClass.removeAttribute('class');
      passTypeClass.classList.add(data.nacao);
      // passPreview.style.backgroundColor = data.Ncolor;
      passCountry = data.nacao;
      nationSelect= data.nacao;
    }
    mirrorInformations();
  });
}

// getRulesBook();
function getRulesBook(){
  getRules.doc('RegionDatas').onSnapshot((labels)=>{
    rulesBook = []
    const rules = labels.data();
    rulesBook.push(rules);
    localStorage.setItem('rules', JSON.stringify(rulesBook));
    rulesLocale();
    if(labels === 'modified'){
      rulesBook.push(rules);
      localStorage.setItem('rules', JSON.stringify(rulesBook));
      rulesLocale();
    }
    if(labels === 'added'){
      rulesBook.push(rules);
      localStorage.setItem('rules', JSON.stringify(rulesBook));
      rulesLocale();
    }
    registred = rules.quantos + 1;
    console.log(registred);
  });
}

function leadRulesBook(){
  rulesBook = JSON.parse(localStorage.getItem('rules'));
}

function rulesLocale(){
  const leftSideTags = document.querySelectorAll('#RightSide0 > div');
  const rightSideTags= document.querySelectorAll('#LeftSide0 > div');
  //Left Side
  leftSideTags[0].innerHTML = rulesBook[0].regras.rule1;
  leftSideTags[1].innerHTML = rulesBook[0].regras.rule2;
  leftSideTags[2].innerHTML = rulesBook[0].regras.rule3;
  leftSideTags[3].innerHTML = rulesBook[0].regras.rule4;
  leftSideTags[4].innerHTML = rulesBook[0].regras.rule5;
  //Right Side
  rightSideTags[0].innerHTML = rulesBook[0].regras.rule6;
  rightSideTags[1].innerHTML = rulesBook[0].regras.rule7;
  rightSideTags[2].innerHTML = rulesBook[0].regras.rule8;
  rightSideTags[3].innerHTML = rulesBook[0].regras.rule9;
  rightSideTags[4].innerHTML = rulesBook[0].regras.rule10;
}

function activeAllButtons(){
  const doneButton = document.querySelector('#LeftSide > button:nth-of-type(1)');
  doneButton.addEventListener('click', ()=>{
    pagIs = 2;
    pagesNavigation();
    pageCount();
  });
}

function runBook(){
  PASS();
  pageCount();
  DOC();
}

onStart();
function onStart(){
  const localNum = document.querySelector('#model1 p:nth-of-type(1)');
  const localNum2 = document.querySelector('#model2 p:nth-of-type(1)');
  const guiche   = Math.floor(Math.random() * 315);
  
  localNum.innerHTML = `N ${guiche}`;
  localNum2.innerHTML= `N ${guiche}`
}
