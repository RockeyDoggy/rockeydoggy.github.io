
//Sbeeker
function sbeeker(){
  //Variaveis
var banner = document.getElementById("bannerTab");
var headNome = document.getElementById("nome");
var nick = document.getElementById("nick");
var bgDesign = document.getElementById("pTabBody");
var invent = document.getElementById("pChar");

  //Visibilidade
  document.getElementById('ProfileTab').style.display = "initial";
  document.getElementById('brackground').style.display = "initial";
  banner.style.backgroundImage = "url(https://i.imgur.com/fKw0EZY.png)";

  //Datas
  headNome.innerHTML = 'Sbeeker';
  nick.innerHTML = 'Sbevee_ & SnekerRoyal';
  //DatasDesign
  nick.setAttribute('class', 'sbHover');
  nick.setAttribute('onclick', 'sbkLink()');

  //inventario
    //Design
    bgDesign.style.boxShadow = "inset 0px 30px 20px -25px #FC1, inset 0px -30px 20px -20px #100500";
    bgDesign.style.borderTop = "double 5px #FF9";
    bgDesign.style.backgroundImage = "linear-gradient(5deg, rgba(13,18,22,1), rgba(6,17,28,1))";
    invent.style.background = "rgba(5,5,5,0.8)";
    invent.style.borderTop = "double 4px #FF8";
    invent.style.borderBottom = "double 4px #FF8";
    invent.style.boxShadow = "0px 6px 5px -6px #FF0, inset 0px -6px 5px -6px #FF0, 0px -6px 5px -6px #FF0, inset 0px 6px 5px -6px #FF0";
    invent.style.filter = "";

    //Itens do Inventario
      var floraEyes = document.createElement("IMG");
      floraEyes.setAttribute("src", "https://i.imgur.com/sinfJsj.png");
      floraEyes.setAttribute("title", "Flora'Eyes");
      floraEyes.setAttribute("draggable", "false");
      floraEyes.setAttribute("onClick", "floraeyes()");
      //create
      invent.appendChild(floraEyes);

  //Itens de Boss
    //titulo
    var invText = document.createElement("H4");
    invText.innerHTML = "Inventario (Boss):";
    
    var invBox = document.getElementById("pChar");
    invBox.appendChild(invText);
    
    //Lista de Itens
    //vip
    var vipIcon = document.createElement("IMG");
    vipIcon.setAttribute("src", "https://i.imgur.com/k3TAPyL.png");
    vipIcon.setAttribute("title", "VIP x5");
    vipIcon.setAttribute("draggable", "false");
    vipIcon.setAttribute("id", "bossI");
    
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
    
    //Projetar Itens
    //invBox.appendChild(vipIcon)+invBox.appendChild(rPoints)+invBox.appendChild(rSecret)+invBox.appendChild(bossIcon);
  
  //Barras
  var vidBar = document.getElementById("vBar");
  var difBar = document.getElementById("dBar");
  var forBar = document.getElementById("fBar");
  var resBar = document.getElementById("rBar");
  setTimeout(function(){
    vidBar.style.width= "15%";
    difBar.style.width = "4%";
    forBar.style.width = "2.8%";
    resBar.style.width = "15%";
    }, 100);
  
//Historico
  var story = document.getElementById('pStory');
  //Historico 01
     //Dados do Historico 01
  var hName1 = document.createElement("DIV");
  hName1.setAttribute("id", "leftName");
  hName1.innerHTML =  "Sbeeker";

  var actName1 = document.createElement("DIV");
  actName1.setAttribute("id", "centralName");
  actName1.innerHTML ="";

  var wName1 = document.createElement("DIV");
  wName1.setAttribute("id", "rightName");
  wName1.innerHTML = "👁  Tornaram-se Boss Misteriosamente";

  var act1 = document.createElement("DIV");
  act1.appendChild(hName1)+act1.appendChild(actName1)+act1.appendChild(wName1);
  act1.setAttribute("id", "killBar");

  //Historico 02
    //Dados do Historico 02
  var hName2 = document.createElement("DIV");
  hName2.setAttribute("id", "leftName");
  hName2.innerHTML =  "GirlStrangerFear";

  var actName2 = document.createElement("DIV");
  actName2.setAttribute("id", "centralName");
  actName2.innerHTML ="-1.5 HP";

  var wName2 = document.createElement("DIV");
  wName2.setAttribute("id", "rightName");
  wName2.innerHTML = "Sbeeker";

  var act2 = document.createElement("DIV");
  act2.appendChild(hName2)+act2.appendChild(actName2)+act2.appendChild(wName2);
  act2.setAttribute("id", "killBar");

  //Historico 03
    //Dados do Historico 03
  var hName3 = document.createElement("DIV");
  hName3.setAttribute("id", "leftName");
  hName3.innerHTML =  "S1rking_";

  var actName3 = document.createElement("DIV");
  actName3.setAttribute("id", "centralName");
  actName3.innerHTML ="-1.11 HP";

  var wName3 = document.createElement("DIV");
  wName3.setAttribute("id", "rightName");
  wName3.innerHTML = "Sbeeker";
  
      //Escrita 03
    var act3 = document.createElement("DIV");
    act3.appendChild(hName3)+act3.appendChild(actName3)+act3.appendChild(wName3);
    act3.setAttribute("id", "killBar");

  //Historico 04
    //Dados do Historico 04
  var hName4 = document.createElement("DIV");
  hName4.setAttribute("id", "leftName");
  hName4.innerHTML =  "S1rking_";

  var actName4 = document.createElement("DIV");
  actName4.setAttribute("id", "centralName");
  actName4.innerHTML ="-1 HP";

  var wName4 = document.createElement("DIV");
  wName4.setAttribute("id", "rightName");
  wName4.innerHTML = "Sbeeker";
  
      //Escrita 04
    var act4 = document.createElement("DIV");
    act4.appendChild(hName4)+act4.appendChild(actName4)+act4.appendChild(wName4);
    act4.setAttribute("id", "killBar");

  //Historico 05
    //Dados do Historico 05
  var hName5 = document.createElement("DIV");
  hName5.setAttribute("id", "leftName");
  hName5.innerHTML =  "Fools113";

  var actName5 = document.createElement("DIV");
  actName5.setAttribute("id", "centralName");
  actName5.innerHTML ="-20 HP";

  var wName5 = document.createElement("DIV");
  wName5.setAttribute("id", "rightName");
  wName5.innerHTML = "Sbeeker";
  
      //Escrita 05
    var act5 = document.createElement("DIV");
    act5.appendChild(hName5)+act5.appendChild(actName5)+act5.appendChild(wName5);
    act5.setAttribute("id", "killBar");

  //Historico 06
    //Dados do Historico 06
  var hName6 = document.createElement("DIV");
  hName6.setAttribute("id", "leftName");
  hName6.innerHTML =  "WhityKun_";

  var actName6 = document.createElement("DIV");
  actName6.setAttribute("id", "centralName");
  actName6.innerHTML ="-5.61 HP";

  var wName6 = document.createElement("DIV");
  wName6.setAttribute("id", "rightName");
  wName6.innerHTML = "Sbeeker";
  
      //Escrita 06
    var act6 = document.createElement("DIV");
    act6.appendChild(hName6)+act6.appendChild(actName6)+act6.appendChild(wName6);
    act6.setAttribute("id", "killBar");

  //Historico 07
    //Dados do Historico 07
  var hName7 = document.createElement("DIV");
  hName7.setAttribute("id", "leftName");
  hName7.innerHTML =  "WhityKun_";

  var actName7 = document.createElement("DIV");
  actName7.setAttribute("id", "centralName");
  actName7.innerHTML ="-3 HP";

  var wName7 = document.createElement("DIV");
  wName7.setAttribute("id", "rightName");
  wName7.innerHTML = "Sbeeker";
  
      //Escrita 07
    var act7 = document.createElement("DIV");
    act7.appendChild(hName7)+act7.appendChild(actName7)+act7.appendChild(wName7);
    act7.setAttribute("id", "killBar");
  

  //Escrever Historico
  story.appendChild(act7)+story.appendChild(act6)+story.appendChild(act5)+story.appendChild(act4)+story.appendChild(act3)+story.appendChild(act2)+story.appendChild(act1);
  
window.location.hash = "sbeeker"
            //Fim//
}


  //Links Externos
  function sbkLink(){
    window.open('https://www.twitch.tv/snekerroyal');
    setTimeout(function sbkLink2(){
      window.open('https://www.twitch.tv/sbevee_', '_blank');
    }, 50)
  }
