//     Pagina Do Fools   (Inicio)    //

function fools(){
  var menuBtn = document.getElementById("menu");
  menuBtn.style.transform = "scale(0) rotate(360deg)";
  

//Identificações
var userNome = document.getElementById("nome");
var userNick = document.getElementById("nick");
userNome.innerHTML ="Fools";
userNick.innerHTML ="Fools113";

//Banners ID
//Tab
var tabDesign = document.getElementById("pTabBody");
var scrollBar = document.getElementById("killBar");
var banner = document.getElementById("bannerTab");
var invent = document.getElementById("pChar");

tabDesign.style.backgroundImage = "linear-gradient(-185deg, rgba(10,5,15,1), rgba(35,30,40,1))";
tabDesign.style.boxShadow = "inset 0px 30px 20px -25px #FC7, inset 0px -30px 20px -20px #100500";
tabDesign.style.borderTop = "double 5px #FC9";
banner.style.backgroundImage = "url(https://i.imgur.com/PpHVeZ2.png)";
invent.style.background = "rgba(5,0,10,0.8)";
invent.style.borderTop = "double 4px #97F";
invent.style.borderBottom = "double 4px #97F";
invent.style.boxShadow = "inset 0px 15px 15px -13px #429, inset 0px -15px 15px -15px #429";
invent.style.filter = "saturate(100%)";
  
//Texto das barras
var resTXT = document.getElementById("resTxt");

//Barras
var vidBar = document.getElementById("vBar");
var difBar = document.getElementById("dBar");
var forBar = document.getElementById("fBar");
var resBar = document.getElementById("rBar");
  

//   Tab 1   //
var name1 = document.createElement("DIV");
name1.setAttribute("id", "leftName");
name1.innerHTML = "Draaaxxy";

var cName1 = document.createElement("DIV");
cName1.setAttribute("id", "centralName");
cName1.innerHTML = "-5HP"

var rName1 = document.createElement("DIV");
rName1.setAttribute("id", "rightName");
rName1.innerHTML = "Fools113";

//---------------------------//


//   Tab 2   //
var name2 = document.createElement("DIV");
name2.setAttribute("id", "leftName");
name2.innerHTML = "Fools113";

var cName2 = document.createElement("DIV");
cName2.setAttribute("id", "centralName");
cName2.innerHTML = "✬"

var rName2 = document.createElement("DIV");
rName2.setAttribute("id", "rightName");
rName2.innerHTML = "Se Tornou Boss";


//   Tab 3   //
var name3 = document.createElement("DIV");
name3.setAttribute("id", "leftName");
name3.innerHTML = "Fools113";

var cName3 = document.createElement("DIV");
cName3.setAttribute("id", "centralName");
cName3.innerHTML = "MATOU"

var rName3 = document.createElement("DIV");
rName3.setAttribute("id", "rightName");
rName3.innerHTML = "rGreque";


//   Tab 4   //
var name4 = document.createElement("DIV");
name4.setAttribute("id", "leftName");
name4.innerHTML = "Sbeeve";

var cName4 = document.createElement("DIV");
cName4.setAttribute("id", "centralName");
cName4.innerHTML = "-3.48 HP"

var rName4 = document.createElement("DIV");
rName4.setAttribute("id", "rightName");
rName4.innerHTML = "Fools113";


//   Tab 5   //
var name5 = document.createElement("DIV");
name5.setAttribute("id", "leftName");
name5.innerHTML = "RafaaSmile";

var cName5 = document.createElement("DIV");
cName5.setAttribute("id", "centralName");
cName5.innerHTML = "-0.21 HP"

var rName5 = document.createElement("DIV");
rName5.setAttribute("id", "rightName");
rName5.innerHTML = "Fools113";


//   Tab 6   //
var name6 = document.createElement("DIV");
name6.setAttribute("id", "leftName");
name6.innerHTML = "Fools113";

var cName6 = document.createElement("DIV");
cName6.setAttribute("id", "centralName");
cName6.innerHTML = "⇋"

var rName6 = document.createElement("DIV");
rName6.setAttribute("id", "rightName");
rName6.innerHTML = "Se Matou";


//   Tab 7   //
var name7 = document.createElement("DIV");
name7.setAttribute("id", "leftName");
name7.innerHTML = "rGreque";

var cName7 = document.createElement("DIV");
cName7.setAttribute("id", "centralName");
cName7.innerHTML = "MATOU"

var rName7 = document.createElement("DIV");
rName7.setAttribute("id", "rightName");
rName7.innerHTML = "Fools113";


//   Tab 8   //
var name8 = document.createElement("DIV");
name8.setAttribute("id", "leftName");
name8.innerHTML = "Fools113";

var cName8 = document.createElement("DIV");
cName8.setAttribute("id", "centralName");
cName8.innerHTML = "✬"

var rName8 = document.createElement("DIV");
rName8.setAttribute("id", "rightName");
rName8.innerHTML = "Se Tornou Boss";


//   Tab 9   //
var name9 = document.createElement("DIV");
name9.setAttribute("id", "leftName");
name9.innerHTML = "Fools113";

var cName9 = document.createElement("DIV");
cName9.setAttribute("id", "centralName");
cName9.innerHTML = "MATOU"

var rName9 = document.createElement("DIV");
rName9.setAttribute("id", "rightName");
rName9.innerHTML = "RockeyDoggy";


//---------------------------//

//   Tab 10   //
var name10 = document.createElement("DIV");
name10.setAttribute("id", "leftName");
name10.innerHTML = "Fools113";

var cName10 = document.createElement("DIV");
cName10.setAttribute("id", "centralName");
cName10.innerHTML = "♚"

var rName10 = document.createElement("DIV");
rName10.setAttribute("id", "rightName");
rName10.innerHTML = "Venceu (Deixou De Ser Boss)";

//---------------------------//

//Num 1
var killTab1 = document.createElement("DIV");
killTab1.appendChild(name1)+killTab1.appendChild(cName1)+killTab1.appendChild(rName1);
killTab1.setAttribute("id", "killBar");

//Num 2
var killTab2 = document.createElement("DIV");
killTab2.setAttribute("id", "killBar");
killTab2.appendChild(name2)+killTab2.appendChild(cName2)+killTab2.appendChild(rName2);

//Num 3
var killTab3 = document.createElement("DIV");
killTab3.setAttribute("id", "killBar");
killTab3.appendChild(name3)+killTab3.appendChild(cName3)+killTab3.appendChild(rName3);

//Num 4
var killTab4 = document.createElement("DIV");
killTab4.setAttribute("id", "killBar");
killTab4.appendChild(name4)+killTab4.appendChild(cName4)+killTab4.appendChild(rName4);

//Num 5
var killTab5 = document.createElement("DIV");
killTab5.setAttribute("id", "killBar");
killTab5.appendChild(name5)+killTab5.appendChild(cName5)+killTab5.appendChild(rName5);

//Num 6
var killTab6 = document.createElement("DIV");
killTab6.setAttribute("id", "killBar");
killTab6.appendChild(name6)+killTab6.appendChild(cName6)+killTab6.appendChild(rName6);

//Num 7
var killTab7 = document.createElement("DIV");
killTab7.setAttribute("id", "killBar");
killTab7.appendChild(name7)+killTab7.appendChild(cName7)+killTab7.appendChild(rName7);

//Num 8
var killTab8 = document.createElement("DIV");
killTab8.setAttribute("id", "killBar");
killTab8.appendChild(name8)+killTab8.appendChild(cName8)+killTab8.appendChild(rName8);

//Num 9
var killTab9 = document.createElement("DIV");
killTab9.setAttribute("id", "killBar");
killTab9.appendChild(name9)+killTab9.appendChild(cName9)+killTab9.appendChild(rName9);

//Num 10
var killTab10 = document.createElement("DIV");
killTab10.setAttribute("id", "killBar");
killTab10.appendChild(name10)+killTab10.appendChild(cName10)+killTab10.appendChild(rName10);



//Lista Inserida Na caixa
var inside = document.getElementById("pStory");
inside.appendChild(killTab10)+inside.appendChild(killTab1)+inside.appendChild(killTab2)+inside.appendChild(killTab3)+inside.appendChild(killTab4)+inside.appendChild(killTab5)+inside.appendChild(killTab6)+inside.appendChild(killTab7)+inside.appendChild(killTab8)+inside.appendChild(killTab9);


//    -- Skins  --      //

//1
var skinsIcon = document.getElementById("pChar");
var skin1 = document.createElement("IMG");
skin1.setAttribute("src", "https://i.imgur.com/sinfJsj.png");
skin1.setAttribute("draggable", "false");
skin1.setAttribute("title", "Flora'eyes");
skin1.setAttribute("onClick", "floraeyes()");

//2
var skin2 = document.createElement("IMG");
skin2.setAttribute("src", "https://i.imgur.com/sinfJsj.png");
skin2.setAttribute("draggable", "false");
skin2.setAttribute("title", "Flora'eyes");

//3
var skin3 = document.createElement("IMG");
skin3.setAttribute("src", "https://i.imgur.com/sinfJsj.png");
skin3.setAttribute("draggable", "false");
skin3.setAttribute("title", "Flora'eyes");

//Espelhar
skinsIcon.appendChild(skin1);


//   ~~Inventario De Boss~~    //

//titulo
var invText = document.createElement("H4");
invText.innerHTML = "Inventario (Boss):";

var invBox = document.getElementById("pChar");
//invBox.appendChild(invText);

//Lista de Itens
//vip
var vipIcon = document.createElement("IMG");
vipIcon.setAttribute("src", "https://i.imgur.com/k3TAPyL.png");
vipIcon.setAttribute("title", "VIP x5");
vipIcon.setAttribute("draggable", "false");
vipIcon.setAttribute("id", "bossI");

//Flora'eyes
var floraEyes = document.createElement("IMG");
floraEyes.setAttribute("src", "https://i.imgur.com/sinfJsj.png");
floraEyes.setAttribute("title", "Flora'Eyes x2");
floraEyes.setAttribute("draggable", "false");
floraEyes.setAttribute("id", "bossI");
floraEyes.setAttribute("onClick", "floraeyes()");

//Reward Points
var rPoints = document.createElement("IMG");
rPoints.setAttribute("src", "https://i.imgur.com/6izGPZC.png");
rPoints.setAttribute("title", "Reward Points Back x5");
rPoints.setAttribute("draggable", "false");
rPoints.setAttribute("id", "bossI");

//Secret
var rSecret = document.createElement("IMG");
rSecret.setAttribute("src", "https://i.imgur.com/4DOFkLe.png");
rSecret.setAttribute("title", "????? x5");
rSecret.setAttribute("draggable", "false");
rSecret.setAttribute("id", "bossI");

//Boss
var bossIcon = document.createElement("IMG");
bossIcon.setAttribute("src", "https://i.imgur.com/LezwGkz.png");
bossIcon.setAttribute("title", "Se Tornar um Boss x1");
bossIcon.setAttribute("draggable", "false");
bossIcon.setAttribute("id", "bossI");


//
//invBox.appendChild(vipIcon)+invBox.appendChild(floraEyes)+invBox.appendChild(rPoints)+invBox.appendChild(rSecret)+invBox.appendChild(bossIcon);

//    ~~Status~~    //
setTimeout(function(){
  vidBar.style.width = "15%";
  difBar.style.width = "50%";
  forBar.style.width = "87%";
  resBar.style.width = "40%";
  }, 100);

//  ~~Design edit~~    //


//~~  Ativar Segredo  ~~//
var rodaPe = document.getElementById("pTabFooter");
var segredo = document.createElement("DIV");
var linkTop = document.createElement("A");
linkTop.setAttribute("href", "#nome");
linkTop.appendChild(segredo);
segredo.innerHTML="Você quer saber a verdade?";
segredo.setAttribute("id", "foolsSecret");
segredo.setAttribute("onClick", "playSecret()");

rodaPe.appendChild(linkTop);

//     ~~Pascoa~~     //
resTXT.setAttribute("onClick", "bigDi()");
resBar.setAttribute("onClick", "bigDi()");
resTXT.style.cursor = "pointer";
resBar.style.cursor = "pointer";
  document.getElementById('ProfileTab').style.display = "initial";
  document.getElementById('brackground').style.display = "initial";
}

function playSecret(){
//~~   Pedido    ~~//
  var tabBanner = document.getElementById("bannerTab");
  var divBanner = document.createElement("DIV");
  var videoBanner = document.createElement("VIDEO");
  var bannerSource= document.createElement("SOURCE");
  var gradientBann= document.createElement("DIV");
  var gBG = document.getElementById("gradientBG");
  
  divBanner.setAttribute("id", "bannerEaster");
  bannerSource.setAttribute("src", "https://dl.dropboxusercontent.com/s/yrw6f66zsca4ad4/Rolled.mp4")
  divBanner.appendChild(videoBanner);
  videoBanner.appendChild(bannerSource);
  gradientBann.setAttribute("id", "gradientBG");
  gradientBann.setAttribute("onclick", "stopSecret()");
  videoBanner.play();
  //
  tabBanner.appendChild(divBanner)+tabBanner.appendChild(gradientBann);
  tabBanner.style.filter = "blur(2px) saturate(1) contrast(1) brightness(100%)";
  var rodaPe = document.getElementById("pTabFooter");
  var folBanner = document.getElementById("bannerTab");
  folBanner.style.backgroundImage = "none";
  rodaPe.innerHTML = "";
}

function stopSecret(){
  var tabBanner = document.getElementById("bannerEaster");
  var tabBanner2 = document.getElementById("bannerTab");
  tabBanner2.innerHTML=""
  tabBanner.style.filter = "blur(2px) saturate(1.3) contrast(1.3) brightness(100%)";
  var folBanner = document.getElementById("bannerTab");
  folBanner.style.backgroundImage = "url(https://i.imgur.com/PpHVeZ2.png)";
}


//    (FIM)       //
