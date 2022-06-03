//     password     //
 //Variaveis//
var passAll = document.getElementById("centerScreen");
var passBGM = document.getElementById("passBGM");
var volFade = document.getElementById("volNum");
var passCheck = document.getElementById("passCck");
var warning = document.getElementById("warnBox");
var pasScreen=document.getElementById("passScreen");

//Variaveis dos botões//
var passBtn = document.getElementById("menuBTN5");

//Variavel do conteudo e Janelas
var lineSec = document.getElementById("secat");
var designScreen = document.getElementById('centerDesign');

//Variavel De Audios
var confSFX = document.getElementById('confirmSFX');
var deniedSFX = document.getElementById('deniedSFX');

//Loads
var bgMain = document.getElementById('bgPrincipal');
var bgMenu = document.getElementById('bgMenu');
var selCor = document.getElementById('selCores');
var selBorder = document.getElementById('selBord');
var mainBorder = document.getElementById('mainBord');
var menuBorder = document.getElementById('menuBord');
var textCor = document.getElementById('textCor');
var textFont = document.getElementById('textFont');
var sbekCheck=document.getElementById('unlockSbee');
var lineSecret=document.getElementById('unlockLine3');

//Variaveis para Designs
var cnlPass = document.getElementById('bgBtn1');
var cnfPass = document.getElementById('bgBtn2');

//Volumes Padrões
confSFX.volume = 0.5;

//   --Fim Das Variaveis --

//Abrir
function passOpen(){
  passBtn.setAttribute("onclick", "passOpenPls()");
}
function passOpenPls(){
  passBtn.setAttribute("onclick", "plsPassOpen()");
}
function plsPassOpen(){
  passBtn.setAttribute("onclick", "okPassOpen()");
}
function okPassOpen(){
  passBtn.setAttribute("onclick", "password()");
}

function password(){
  passAll.style.display = "flex";
  passBGM.play();
  passBGM.volume = 0.3;
  volFade.value = 300;
  imgAsDes.volume = "0.001";
  pasScreen.style.opacity = "1";
          //Close Menu
  var menuOp = document.getElementById("menuPos");
  var menuBtn = document.getElementById("menu");
  menuOp.style.left = "-280px";
  menuBtn.style.transform = "";
}
//Fechar
function passClose(){
  var passInput = document.getElementById("passIs")
  passAll.style.display = "none";
  //passBtn.setAttribute("onclick", "passOpen()");
  var letters = document.getElementsByClassName("ltrs");
  for(i = 0; i <letters.length; i++){
    letters[i].value = null;
  }
  passInput.value = null;
}
//audio Fade

function audioFade(){
  //audio volume fade
  volFade.value -= 1;
  if(volFade.value < 100){
    volFade.value = "0"+volFade.value;
  }
  if(volFade.value < 10){
    volFade.value = "0"+volFade.value;
  }
  if(volFade.value < 1){
    volFade.value = "0001";
  }
  
  floop = setTimeout(audioFade, 5);
  
  if(volFade.value.match("0001")){
    clearTimeout(floop);
  }
  passBGM.volume = "0."+volFade.value;
}


//Confirmar
function passConfirm(){
  //Variavel Dos Input//
  var pLtr1 = document.getElementById("lett1");
  var pLtr2 = document.getElementById("lett2");
  var pLtr3 = document.getElementById("lett3");
  var pLtr4 = document.getElementById("lett4");
  var pLtr5 = document.getElementById("lett5");
  var pLtr6 = document.getElementById("lett6");
  var pLtr7 = document.getElementById("lett7");
  var pLtr8 = document.getElementById("lett8");
  var pLtr9 = document.getElementById("lett9");
  var pLtr10 = document.getElementById("lett10");
  var pLtr11 = document.getElementById("lett11");
  var pLtr12 = document.getElementById("lett12");
  var pLtr13 = document.getElementById("lett13");
  var pLtr14 = document.getElementById("lett14");
  var pLtr15 = document.getElementById("lett15");
  var pLtr16 = document.getElementById("lett16");
  var pLtr17 = document.getElementById("lett17");
  var pLtr18 = document.getElementById("lett18");
  var pLtr19 = document.getElementById("lett19");
  var pLtr20 = document.getElementById("lett20");
  var pLtr21 = document.getElementById("lett21");
  var pLtr22 = document.getElementById("lett22");
  var pLtr23 = document.getElementById("lett23");
  var pLtr24 = document.getElementById("lett24");
  //value Some
  var passInput = document.getElementById("passIs");
  var pLtrIs = [pLtr1.value+pLtr2.value+pLtr3.value+pLtr4.value+pLtr5.value+pLtr6.value+pLtr7.value+pLtr8.value+pLtr9.value+pLtr10.value+pLtr11.value+pLtr12.value+pLtr13.value+pLtr14.value+pLtr15.value+pLtr16.value+pLtr17.value+pLtr18.value+pLtr19.value+pLtr20.value+pLtr21.value+pLtr22.value+pLtr23.value+pLtr24.value];
  var letters = document.getElementsByClassName("ltrs");
  
  passInput.value = pLtrIs;
  
  if(passCheck.value.match(2)){
    audioFade();
    passCheck.value = 1;
  }
 
 doubleCheck();
  
}
function clearPassInput(){ 
    for(i = 0; i <letters.length; i++){
      letters[i].value = null;
    }
}


function upperCaps(e){
  var start = e.target.selectionStart;
  var end = e.target.selectionEnd;
  const letra = document.getElementsByClassName("ltrs");
  e.target.value = e.target.value.toUpperCase();
  e.target.setSelectionRange(start, end);
}
const letra = document.getElementsByClassName("ltrs");
for(i = 0; i <letra.length; i++){
  letra[i].addEventListener("keyup", upperCaps, false);
}
