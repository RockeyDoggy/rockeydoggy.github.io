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
let newAvatar;
let caminho;
let registred = 0;
let passCountry;
let nationSelect;
let nationColor;
let needaPaper = 0;
let giftIs = '';

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
}else{
  document.documentElement.style.setProperty('--LoginVisibility', '1');
  document.documentElement.style.setProperty('--LoginOn', 'auto');
  document.documentElement.style.setProperty('--LoginButtonState', 'flex');
}

/////////////////////////////////////////////
///////////////////Lists////////////////////
////////////////////////////////////////////
/////Lista De Paginas/////////
const pagesInfo = [
  {nome: 'Presente', numero: 3, abrev: "GIFT", top: '49%', left:'16%'},
  {nome: 'Documentação', numero: 2, abrev: "DOC", top: '35%', left:'9%'},
  {nome: 'Registro De Passaporte', numero: 1, abrev: "PASS", top: '20%', left:'0%'},
  {nome: 'Regras', numero: 0, abrev: "RULES", top: '2%', left:'3%'}
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
  nameDesc  .innerHTML = 'INFO1';
  sexDesc   .innerHTML = 'GENERO';
  origDesc  .innerHTML = 'ORIGEM';
  info4Desc .innerHTML = 'INFO4';
  extraInfo .innerHTML = 'NOME COMPLETO'
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
      console.log(PageList.numero)
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
    document.documentElement.style.setProperty('--Page3', 'none');
    pagesInfo[0].left = '20%';
    pagesInfo[1].left = '15%';
    pagesInfo[2].left = '9%';
    document.documentElement.style.setProperty('--WhosNext', 'none');
    document.documentElement.style.setProperty('--WhosPrev', 'none');
  }
  else if(pagIs === 1){
    document.documentElement.style.setProperty('--rulesView', 'none');
    document.documentElement.style.setProperty('--Page1', '');
    document.documentElement.style.setProperty('--Page2', 'none');
    document.documentElement.style.setProperty('--Page3', 'none');
    pagesInfo[0].left = '16%';
    pagesInfo[1].left = '9%';
    pagesInfo[2].left = '10%';
    pagesInfo[3].left = '3%';
    document.documentElement.style.setProperty('--WhosNext', 'block');
    document.documentElement.style.setProperty('--WhosPrev', 'none');
  }
  else if(pagIs === 2){
    document.documentElement.style.setProperty('--rulesView', 'none');
    document.documentElement.style.setProperty('--Page1', 'none');
    document.documentElement.style.setProperty('--Page2', 'flex');
    document.documentElement.style.setProperty('--Page3', 'none');
    pagesInfo[0].left = '8%';
    pagesInfo[1].left = '6%';
    pagesInfo[2].left = '0%';
    pagesInfo[3].left = '6%';
    document.documentElement.style.setProperty('--WhosNext', 'block');
    document.documentElement.style.setProperty('--WhosPrev', 'block');
  }
  else if(pagIs === 3){
    document.documentElement.style.setProperty('--rulesView', 'none');
    document.documentElement.style.setProperty('--Page1', 'none');
    document.documentElement.style.setProperty('--Page2', 'none');
    document.documentElement.style.setProperty('--Page3', 'flex');
    // pagesInfo[0].left = '10%';
    pagesInfo[1].left = '1%';
    pagesInfo[2].left = '8%';
    pagesInfo[3].left = '13%';
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
    passBox.value = passport.id;
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
      nationColor  = passport.color;
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
////////Pass Preview Avatar/////////
////////////////////////////////////
function passAvatarChoose(){
  const avatarPreview = document.createElement('div');
  const avatarLink    = document.createElement('input');
  const avatarButton  = document.createElement('button');
  const avatarBox     = document.createElement('div');
  const rAvatarEdit   = document.querySelector('#LeftSide > div:nth-of-type(2)');
  if(rAvatarEdit){
    rAvatarEdit.remove();
  }
  
  avatarLink.placeholder = userAvatar;
  avatarPreview.style.backgroundImage = `url(${userAvatar})`;
  avatarBox.append(avatarPreview, avatarLink, avatarButton);
  LeftSide.append(avatarBox);
  
  avatarLink.addEventListener('input', ()=>{
    const clearLink = avatarLink.value.replace(/\.(png|jpeg|jpg|gif).*/i, '.$1');
    avatarLink.value = clearLink;
    if(avatarLink.value.search(/.(jpg|jpeg|png|gif)/) == -1){
      avatarPreview.style.backgroundImage = `url(${userAvatar})`;
      newAvatar = userAvatar;
    }else{
      avatarPreview.style.backgroundImage = `url(${avatarLink.value})`;
      newAvatar = avatarLink.value;
    }
  });
  avatarLink.addEventListener('focusout', ()=>{
    if(avatarLink.value.search(/.(jpg|jpeg|png|gif)/) == -1){
      avatarLink.value = '';
      newAvatar = userAvatar;
      document.documentElement.style.setProperty('--PassAvatar', `url(${userAvatar})`);
    }else if(avatarLink.value === '' || avatarLink.value === ' '){
      newAvatar = userAvatar;
      document.documentElement.style.setProperty('--PassAvatar', `url(${userAvatar})`);
    }else{
      document.documentElement.style.setProperty('--PassAvatar', `url(${newAvatar})`);
    }
  });
  
  avatarPreview.addEventListener('click', ()=>{
    avatarLink.focus();
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
  sendButton.innerHTML= 'PRONTO';
  
  docPreview.append(docTextArea);
  actArea.append(docPreview);
  LeftSide2.append(actArea, sendButton);
  
  //Functions
  textField.addEventListener('input', ()=>{
    docTextArea.innerHTML = textField.value;
  });
  
  sendButton.addEventListener('click', ()=>{
    // sendPassport();
    pagIs = 3;
    pagesNavigation();
    pageCount();
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
    document.documentElement.style.setProperty('--GateTrans', '');
    document.documentElement.style.setProperty('--GateStyleTrans', '');
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
    document.documentElement.style.setProperty('--GateTrans', 'opacity 0.3s 0s ease-in-out, backdrop-filter 0.3s 0.4s ease-in-out');
    document.documentElement.style.setProperty('--GateStyleTrans', 'top 0.4s 0s ease-in, filter 0.3s 0s ease-in-out');
    document.documentElement.style.setProperty('--BTNFalse', 'none');
    document.documentElement.style.setProperty('--InpFalse', 'none');
    document.documentElement.style.setProperty('--LoginBTN', '0');
    document.documentElement.style.setProperty('--LoginInp', '0');
    document.documentElement.style.setProperty('--GateStatus', '');
    document.documentElement.style.setProperty('--TrapClickVisibility', '');
    document.documentElement.style.setProperty('--TrapClickStyle', '');
    document.documentElement.style.setProperty('--PassAvatar', ``);
    setTimeout(()=>{
      document.documentElement.style.setProperty('--GateStyle', '');
    }, 1500)
  }, 100)
}

// PassPreview.addEventListener('click', ()=>{
//   closeGate();
//   setTimeout(()=>{
//     autorizeToPass();
//   }, 3000)
// });

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
  // loginSequence();
}

function sendPassport(){
  const infosEdit   = document.querySelectorAll('#RightSide > div:nth-child(3) input');
  const infosExte   = document.querySelectorAll('#RightSide > div:nth-child(4) input');
  const docEdit     = document.querySelectorAll('#RightSide2 div:nth-child(1) textarea');
  getDocs.doc(caminho).update({
    nome:    infosExte[0].value,
    avatar:  newAvatar,
    num:     parseInt(registred),
    status:  'Pendente',
    extra:   '',
    info4:   infosEdit[3].value,
    info5:   infosEdit[0].value,
    sex:     infosEdit[1].value,
    mensagem:docEdit[0].value,
    orig:    infosEdit[2].value,
    nacao:   nationSelect,
    Ncolor:  nationColor,
    gift:    giftIs,
    paper:   needaPaper
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
    const avatarPrev  = document.querySelector('#LeftSide > div:nth-of-type(2) > div:nth-of-type(1)');
    const avatarLink  = document.querySelector('#LeftSide > div:nth-of-type(2) > input:nth-of-type(1)');
    const infosEdit   = document.querySelectorAll('#RightSide > div:nth-child(3) input');
    const infosExte   = document.querySelectorAll('#RightSide > div:nth-child(4) input');
    const docEdit     = document.querySelectorAll('#RightSide2 div:nth-child(1) textarea');
    const docPreview  = document.querySelectorAll('#LeftSide2 > div:nth-child(1) > div:nth-child(1) > div');
    const giftGetLink = document.querySelector('#RightSide3 > div > input:nth-of-type(1)');
    const giftPaper   = document.querySelector('#RightSide3 > div > div > button:nth-of-type(1)');
    const giftIMGPrev = document.querySelector('#RightSide3 > div > div:nth-of-type(2) > img:nth-of-type(1)');
    const giftImage   = document.querySelector('#LeftSide3 > div > div:nth-of-type(1) > img:nth-of-type(1)');
    const passTypeClass=document.querySelector('#PassPreview > div:nth-child(1)');
    const passPreview = document.querySelector('#PassPreview > div:nth-child(1)');
    const passPavatar = document.querySelector('#PassPreview > div:nth-child(1) > div:nth-of-type(1)');
    infosEdit[0].value      = data.info5;
    infosEdit[1].value      = data.sex;
    infosEdit[2].value      = data.orig;
    infosEdit[3].value      = data.info4;
    infosExte[0].value      = data.nome;
    docEdit  [0].value      = data.mensagem;
    docPreview[0].innerHTML = data.mensagem;
    giftGetLink.value       = data.gift;
    
    if(data.nacao === '' || data.nacao == undefined || data.nacao == null){
      passCountry = 'Antegria';
      nationSelect= 'Antegria';
      nationColor = '#314d21';
    }else{
      passTypeClass.removeAttribute('class');
      passTypeClass.classList.add(data.nacao);
      // passPreview.style.backgroundColor = data.Ncolor;
      passCountry = data.nacao;
      nationSelect= data.nacao;
      nationColor = data.Ncolor;
    }
    
    if(data.paper === 1){
      giftPaper.click();
    }
    if(data.gift !== '' || data.gift !== ' ' || data.gift !== undefined){
      giftImage.src = data.gift;
      giftIMGPrev.src = data.gift;
      giftIs = data.gift;
    }
    
    if(data.avatar !== '' || data.avata !== ' ' || data.avatar !== undefined){
      avatarPrev.style.backgroundImage = `url(${data.avatar})`;
      avatarLink.value = data.avatar;
      document.documentElement.style.setProperty('--PassAvatar', `url(${data.avatar})`);
      newAvatar = data.avatar;
    }
    
    const getPassIcons = document.querySelectorAll('#RightSide > div:nth-child(5) > div');
    setTimeout(()=>{
      for(let i = 0; i < getPassIcons.length; i++){
        getPassIcons[i].removeAttribute('class');
        if(getPassIcons[i].value === data.nacao){
          getPassIcons[i].click();
        }
      }
    }, 1000)
    
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

//////////////////////////////////////////////////////////////
/////////////////////Pagina De Presentes//////////////////////
/////////////////////////////////////////////////////////////
function giftPage(){
  RightSide3.innerHTML = '';
  LeftSide3.innerHTML = '';
  const pageTitle   = document.createElement('h2');
  const leftTitle   = document.createElement('h2');
  const giftSpec    = document.createElement('h3');
  const giftObse    = document.createElement('h4');
  const giftBox     = document.createElement('div');
  const onePagePrev = document.createElement('div');
  const gift        = document.createElement('img');
  const giftIMG     = document.createElement('img');
  const giftPaper   = document.createElement('div');
  const giftUpload  = document.createElement('input');
  const giftPreview = document.createElement('div');
  const giftButtons = document.createElement('div');
  const giftSwitcher= document.createElement('button');
  const contentIn   = document.createElement('div');
  const contentLIn  = document.createElement('div');
  const paperDesign = document.createElement('div');
  const paperTitle  = document.createElement('p');
  const passExample = document.createElement('div');
  const sendPass    = document.createElement('button');
  
  //Textos
  pageTitle.innerHTML    = 'Enviar Presente';
  giftSpec.innerHTML     = 'Escolha uma Imagem';
  giftObse.innerHTML     = 'Você pode usar os chats do discord para fazer upload da imagem, copiar o link da imagem enviada no chat do discord e colar na barra do link.';
  giftSwitcher.innerHTML = 'PAPER?';
  giftUpload.placeholder = 'Link de uma imagem PNG, JPEG, JPG ou GIF.';
  paperTitle.innerHTML   = 'PRESENTE';
  sendPass.innerHTML     = 'ENVIAR';
  
  //Sources
  giftSwitcher.value = 0;
  giftSwitcher.classList.add('bdeactive');
  gift.classList.add('ItemMode');
  ///////////Junções///////////
  giftButtons.append(giftSwitcher);
  contentIn.append(pageTitle, giftSpec, giftUpload, giftButtons, giftObse, onePagePrev);
  onePagePrev.append(giftIMG);
  RightSide3.append(contentIn);
  
  ///////Left Side////////
  //Text Areas
  leftTitle.innerHTML = 'Preview do Presente';
  //Aplicações
  contentLIn.append(giftPaper);
  paperDesign.append(paperTitle)
  giftPaper.append(paperDesign, gift);
  LeftSide3.append(leftTitle, contentLIn, passExample, sendPass);
  
  //Functions
  
  
  sendPass.addEventListener('click', ()=>{
    sendPassport();
  });
  
  giftUpload.addEventListener('input', ()=>{
    const clearLink = giftUpload.value.replace(/\.(png|jpeg|jpg|gif).*/i, '.$1');
    
    //Conditions
    if(giftUpload.value.search(/.(jpg|jpeg|png|gif)/) == -1){
      gift.src    = '';
      giftIMG.src = '';
      giftIs      = '';
    }else{
      giftUpload.value = clearLink;
      gift.src    = giftUpload.value;
      giftIMG.src = giftUpload.value;
      giftIs      = giftUpload.value;
    }
  })
  giftUpload.addEventListener('focusout', ()=>{
    const clearLink = giftUpload.value.replace(/\.(png|jpeg|jpg|gif).*/i, '.$1');
    //Conditions
    if(giftUpload.value.search(/.(jpg|jpeg|png|gif)/) == -1){
      giftUpload.value = '';
      gift.src    = '';
      giftIMG.src = '';
      giftIs      = '';
    }else{
      giftUpload.value = clearLink;
      gift.src    = giftUpload.value;
      giftIMG.src = giftUpload.value;
      giftIs      = giftUpload.value;
    }
  });
  
  giftSwitcher.addEventListener('click', ()=>{
    giftSwitcher.removeAttribute('class');
    gift.removeAttribute('class');
    if(giftSwitcher.value === '0'){
      giftSwitcher.value = 1;
      needaPaper         = 1;
      document.documentElement.style.setProperty('--Papers', 'flex');
      document.documentElement.style.setProperty('--PaperBG', '#e9c7d3');
      document.documentElement.style.setProperty('--PaperShadow', '0.3vw 0.4vw 0.01vw #0005');
      giftSwitcher.innerHTML = 'PAPER';
      giftSwitcher.classList.add('bactive');
      gift.classList.add('PaperMode');
    }else{
      giftSwitcher.value = 0;
      needaPaper         = 0;
      document.documentElement.style.setProperty('--Papers', 'none');
      document.documentElement.style.setProperty('--PaperBG', '');
      document.documentElement.style.setProperty('--PaperShadow', '');
      giftSwitcher.innerHTML = 'PAPER?';
      gift.classList.add('ItemMode');
      giftSwitcher.classList.add('bdeactive');
    }
  });
}

////////////////////////////////////////////////////
////////////////Initilize On Opne//////////////////
///////////////////////////////////////////////////
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
  giftPage();
  passAvatarChoose();
}

onStart();
function onStart(){
  const localNum = document.querySelector('#model1 p:nth-of-type(1)');
  const localNum2 = document.querySelector('#model2 p:nth-of-type(1)');
  const guiche   = Math.floor(Math.random() * 315);
  
  localNum.innerHTML = `N ${guiche.toString().padStart(3, '0')}`;
  localNum2.innerHTML= `N ${guiche.toString().padStart(3, '0')}`
}

NextPage.addEventListener('click', ()=>{
    pagIs = pagIs + 1;
    pagesNavigation();
    pageCount();
});
PrevPage.addEventListener('click', ()=>{
    pagIs = pagIs - 1;
    pagesNavigation();
    pageCount();
});
