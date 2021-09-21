//Inspecionar
function encerrarSpec(){
  // Encerrar Inspecionar
  
  var itemTitle = document.getElementById('itemName');
  var itemEmbed = document.getElementById('embedItem');
  var itemDescr = document.getElementById('rodapeItem');
  var inspecBox = document.getElementById('inspecionar');
  var inspcVisi = document.getElementById('inspecPos');
  var expand = document.getElementById('expBtn');

  //Design
  inspcVisi.style.top = "0%";
  expand.style.opacity = "0";
  inspecBox.style.cssText= "border-top:double 5px #444; border-bottom:double 3px #444; box-shadow:0px 0px 0px -0px #555, inset 0 0px 0px -0px #555; opacity:0; height:0px;";
  
  //Triggers
  setTimeout(function(){
  document.getElementById("blackground").style.display = "none";
  inspcVisi.style.display = "none";
  }, 1000)

  //Textos
  itemTitle.innerHTML = "";
  itemDescr.innerHTML = "";

  //Embed
  itemEmbed.innerHTML = '';
}

//  Flora'eyes
function floraeyes(){
  //Variaveis
  var itemTitle = document.getElementById('itemName');
  var itemEmbed = document.getElementById('embedItem');
  var itemDescr = document.getElementById('rodapeItem');
  var inspcVisi = document.getElementById('inspecPos');
  var inspecBox = document.getElementById('inspecionar');
  var expand = document.getElementById('expBtn');

//Play

  document.getElementById('blackground').style.display = "initial";
  inspcVisi.style.display = "initial";
  inspecBox.style.height = "";

  //Textos
  itemTitle.innerHTML = "Flora'Eyes";
  itemDescr.innerHTML = "<h1><u>A Primeira Skin De Barra</u></h1><p>Os boss possuem uma barra de vida que fica visivel no centro inferior da tela nas lives, se você ja derrotou um boss que carregava uma Flora'Eyes no <b>Inventario de Loots</b>, provavelmente quando você se tornar boss o design da Barra De Vida tera uma aparencia diferente da Barra De Vida padrão.</p><h2>Visualizar</h2>";

  //Embed
  itemEmbed.innerHTML = '<model-viewer src="https://dl.dropboxusercontent.com/s/tu9nwql3bls6oer/Flora%27Eyes%20Textured.gltf" camera-controls auto-rotate camera-orbit="-172.8deg 85.86deg 431.9m" rotation-per-second="60deg" field-of-view="80deg" exposure="0.7" id="floraeyemod"</model-viewer>';

  //Design
  expand.style.opacity = "1";
  inspecionar.style.cssText = "border-top:double 5px #75F; border-bottom:double 3px #75F; box-shadow:0px 8px 10px -6px #71F, inset 0 -8px 10px -5px #71F;";
}

function expand(){
  var inspecBox = document.getElementById('inspecionar');
  var inspcVisi = document.getElementById('inspecPos');
  var expand = document.getElementById('expBtn');
  
  inspecBox.style.cssText= "height:99%; overflow-y:scroll; border-top:double 5px #75F; border-bottom:double 3px #75F; box-shadow:0px 8px 10px -6px #71F, inset 0 -8px 10px -5px #71F;";
  inspcVisi.style.top= "0%";
}

function openMenu(){
  var menuOp = document.getElementById("menuPos");
  var menuBtn = document.getElementById("menu");
  menuOp.style.left = "0";
  menuBtn.style.transform = "scale(0) rotate(360deg)";
}
function menuClose(){
  var menuOp = document.getElementById("menuPos");
  var menuBtn = document.getElementById("menu");
  menuOp.style.left = "-280px";
  menuBtn.style.transform = "";
}

//   //-Botão De Mutar-//   //
var muteBtn = document.getElementById("muteB");
var volAtual= document.getElementById("aVolume");

function saveMute(){
  var volAtual= document.getElementById("aVolume");
  if(muteBtn.value.match(1)){
    muteBtn.value = 2;
    muteBtn.setAttribute("class", "btnOff");
    volAtual.value = '001';
  }else{
    muteBtn.value = 1;
    muteBtn.setAttribute("class", "btnOn");
    volAtual.value = 999;
  }
  setTimeout(function(){
    localStorage.setItem("muteSave", muteBtn.value);
    localStorage.setItem("designMute", muteBtn.getAttribute("class"));
    localStorage.setItem("volValue", volAtual.value);
  }, 100);
}

muteBtn.value = localStorage.getItem("muteSave");
muteBtn.setAttribute("class", localStorage.getItem("designMute"));
volAtual.value = localStorage.getItem("volValue");


setTimeout(function volumeA(){
  var media = document.querySelectorAll("video", "audio");
  var volumeAtual= document.getElementById("aVolume").value;
  var mButtonVol = document.getElementById("muteB");
  var i;
  for(i = 0; i <media.length; i++){
    media[i].volume = "0."+volumeAtual;
  }
  
  var mButtonVol = document.getElementById("muteB");
  if(mButtonVol.value.match(null)){
    mButtonVol.value = 1;
    mButtonVol.setAttribute("class", "btnOn");
  }
  setTimeout(volumeA, 100);
}, 100)


//     Customização      //
var custScreen = document.getElementById('centerDesign');
var imgAsDes = document.getElementById('ImageAsDesign');
var volFade = document.getElementById("volNum");

function custom(){
  custScreen.style.display = "flex";
  imgAsDes.play();
  imgAsDes.volume = 0.3;
  passBGM.volume = '0.001';
            //Close Menu
  var menuOp = document.getElementById("menuPos");
  var menuBtn = document.getElementById("menu");
  menuOp.style.left = "-280px";
  menuBtn.style.transform = "";
}



//Loads Functions
setTimeout(function loadAll(){
  bgMain.value = localStorage.getItem("bgMain");
  bgMenu.value = localStorage.getItem("bgMenu");
  selCor.value = localStorage.getItem("selCor");
  selBorder.value = localStorage.getItem("selBorder");
  mainBorder.value = localStorage.getItem("mainBorder");
  menuBorder.value = localStorage.getItem("menuBorder");
  textCor.value = localStorage.getItem("textCor");
  textFont.value = localStorage.getItem("textFont");
  sbekCheck.value = localStorage.getItem("sbekCheck");
  lineSecret.value = localStorage.getItem("lineSecret")
    if(bgMain.value == 0){
      bgMain.value = 0;
    }
    if(bgMenu.value == 0){
      bgMenu.value = 0;
    }
    if(selCor.value == 0){
      selCor.value = 0;
    }
    if(selBorder.value == 0){
      selBorder.value = 0;
    }
    if(mainBorder.value == 0){
      mainBorder.value = 0;
    }
    if(menuBorder.value == 0){
      menuBorder.value = 0;
    }
    if(textCor.value == 0){
      textCor.value = 0;
    }
    if(textFont.value == 0){
      textFont.value = 0;
    }
    if(sbekCheck.value == 0){
      sbekCheck.value = 0;
    }
    if(lineSecret.value == 0){
      lineSecret.value = 0;
    }
  
}, 300);

setTimeout(function leitor(){
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
  
  //Variavel de ações
  var sChar2 = document.getElementById("sChar2");
  var sChar3 = document.getElementById("sChar3");
  var sbeeker = document.getElementById("sbeeker");
  var sChar4 = document.getElementById("sChar4");
  var sChar5 = document.getElementById("sChar5");
  var sbkLock= document.getElementById("sbkUnlocked");

  
  if(lineSecret.value.match(1)){
    lineSec.style.display = "initial";
    sChar3.setAttribute('class', 'charbox');
    sChar3.setAttribute('onclick', 'sbeeker()');
    sChar3.removeAttribute('disabled');
    sChar3.innerHTML = "<p>Sbeeker</p>";
    sChar3.setAttribute('id', 'sbeeker');
    sbkLock.setAttribute('class', 'itemBox xis');
  }
  
  var volAll = document.getElementById('aVolume');
  if(volAll.value == 0){
    volAll.value = 999;
  }
  setTimeout(leitor, 100);
}, 200)
//Save and Quit
function saveDesign(){
  localStorage.setItem("bgMain", bgMain.value);
  localStorage.setItem("bgMenu", bgMenu.value);
  localStorage.setItem("selCor", selCor.value);
  localStorage.setItem("selBorder", selBorder.value);
  localStorage.setItem("mainBorder", mainBorder.value);
  localStorage.setItem("menuBorder", menuBorder.value);
  localStorage.setItem("textCor", textCor.value);
  localStorage.setItem("textFont", textFont.value);
  localStorage.setItem("sbekCheck", sbekCheck.value);
  localStorage.setItem("lineSecret", lineSecret.value);
}

function closeDesign(){
  designScreen.style.display = "none";
  imgAsDes.volume = "0.001";
}

function encerrar(){
  document.getElementById('brackground').style.display = "none";
  document.getElementById('ProfileTab').style.display ="none";
  var tabBanner = document.getElementById("bannerEaster");
  var tabBanner2 = document.getElementById("bannerTab");
  document.getElementById("pTabFooter").innerHTML = "";
  document.getElementById("pStory").innerHTML = "";
  //document.getElementById("char1").style.display ="none";
  tabBanner2.innerHTML=""
  var folBanner = document.getElementById("bannerTab");
  folBanner.style.backgroundImage = "url(https://i.imgur.com/PpHVeZ2.png)";
  document.getElementById("pChar").innerHTML = "";
  document.getElementById('blackground').style.display = "none";
  // Encerrar Inspecionar
  var inspec = document.getElementById("inspecPos");
  inspec.style.display = "none";
  
  var itemTitle = document.getElementById('itemName');
  var itemEmbed = document.getElementById('embedItem');
  var itemDescr = document.getElementById('rodapeItem');
  var inspecBox = document.getElementById('inspecionar');
  var nick = document.getElementById('nick');

  //Textos
  itemTitle.innerHTML = "";
  itemDescr.innerHTML = "";
  nick.removeAttribute('class');
  nick.removeAttribute('onclick');

  //Embed
  itemEmbed.innerHTML = '';

  //Design
  
//  var vidBar = document.getElementById("vBar");
//  var difBar = document.getElementById("dBar");
//  var forBar = document.getElementById("fBar");
//  var resBar = document.getElementById("rBar");
//  setTimeout(function(){
//    vidBar.style.width= "2.5%";
//    difBar.style.width = "2.5%";
//    forBar.style.width = "2.5%";
//    resBar.style.width = "2.5%";
//    }, 50);
  
//  tabBanner.style.filter = 'blur(2px) saturate(1.3) contrast(1.3) brightness(100%)';
var menuBtn = document.getElementById("menu");
menuBtn.style.transform = "";
}
