//SirKingo
function kingo(){
  var menuBtn = document.getElementById("menu");
  menuBtn.style.transform = "scale(0) rotate(360deg)";
  
  //Visibilidade
  document.getElementById('ProfileTab').style.display = "initial";
  document.getElementById('brackground').style.display = "initial";
  
  //Variaveis
    var banner = document.getElementById("bannerTab");
    var headNome = document.getElementById("nome");
    var nick = document.getElementById("nick");
    var bgDesign = document.getElementById("pTabBody");
    var invent = document.getElementById("pChar");
    
  //Design de Pagina
  bgDesign.style.background = "linear-gradient(-185deg, rgba(15,15,15,1), rgba(35,35,35,1))";
  
  bgDesign.style.boxShadow = "none";
  bgDesign.style.borderTop = "double 5px #333";
  invent.style.background = "";
  invent.style.borderTop = "";
  invent.style.borderBottom = "";
  invent.style.boxShadow = "none";
  invent.style.filter = "";
  
  //(Informações)
  banner.style.background = "url(https://i.imgur.com/C8bdCDJ.png)";
  headNome.innerHTML = "Sir King";
  nick.innerHTML = "S1rKing_";
    nick.setAttribute("onclick", "kingoTwitch()");
    nick.setAttribute('class', 'sbHover');
    
  //Inventory
    //Flora'eyes
    var floraEyes = document.createElement("IMG");
    floraEyes.setAttribute("src", "https://i.imgur.com/sinfJsj.png");
    floraEyes.setAttribute("title", "Flora'Eyes");
    floraEyes.setAttribute("draggable", "false");
    //Gerar
      //invent.appendChild(floraEyes);
    
  //Info Bar
  var vidBar = document.getElementById("vBar");
  var difBar = document.getElementById("dBar");
  var forBar = document.getElementById("fBar");
  var resBar = document.getElementById("rBar");
  setTimeout(function(){
    vidBar.style.width= "4.0%";
    difBar.style.width = "10%";
    forBar.style.width = "5.9%";
    resBar.style.width = "2.5%";
    }, 100);
    
  //Historico
  var hBox = document.getElementById("pStory");
  
    //Conteudo tab 01
    var name1 = document.createElement("DIV");
    name1.setAttribute("id", "leftName");
    name1.innerHTML = "S1rKing_";
    
    var cName1 = document.createElement("DIV");
    cName1.setAttribute("id", "centralName");
    cName1.innerHTML = "-1.11 HP"
    
    var rName1 = document.createElement("DIV");
    rName1.setAttribute("id", "rightName");
    rName1.innerHTML = "Sbeeker";
    
      //painel 01
       var killTab1 = document.createElement("DIV");
       killTab1.setAttribute("id", "killBar");
       killTab1.appendChild(name1)+killTab1.appendChild(cName1)+killTab1.appendChild(rName1);
    
    //Conteudo tab 02
    var name2 = document.createElement("DIV");
    name2.setAttribute("id", "leftName");
    name2.innerHTML = "S1rKing_";
    
    var cName2 = document.createElement("DIV");
    cName2.setAttribute("id", "centralName");
    cName2.innerHTML = "-1 HP"
    
    var rName2 = document.createElement("DIV");
    rName2.setAttribute("id", "rightName");
    rName2.innerHTML = "Sbeeker";
    
      //painel 02
       var killTab2 = document.createElement("DIV");
       killTab2.setAttribute("id", "killBar");
       killTab2.appendChild(name2)+killTab2.appendChild(cName2)+killTab2.appendChild(rName2);
    
    //Conteudo tab 03
    var name3 = document.createElement("DIV");
    name3.setAttribute("id", "leftName");
    name3.innerHTML = "S1rKing_";
    
    var cName3 = document.createElement("DIV");
    cName3.setAttribute("id", "centralName");
    cName3.innerHTML = "Derrotou"
    
    var rName3 = document.createElement("DIV");
    rName3.setAttribute("id", "rightName");
    rName3.innerHTML = "Kinguinha";
    
      //painel 03
       var killTab3 = document.createElement("DIV");
       killTab3.setAttribute("id", "killBar");
       killTab3.appendChild(name3)+killTab3.appendChild(cName3)+killTab3.appendChild(rName3);
  
    //Projeção da Lista
    hBox.appendChild(killTab3)+hBox.appendChild(killTab2)+hBox.appendChild(killTab1);
  
  window.location.hash = "kingo";
  invLoad();
}
//Kingo End

function kingoTwitch(){
  window.open('https://www.twitch.tv/s1rking_', '_blank');
}
