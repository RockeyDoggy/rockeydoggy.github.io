//     Pagina do Steve    //

function steve(){
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
  invent.style.background = "rgba(5,5,5,0.8)";
  invent.style.borderTop = "double 4px #333";
  invent.style.borderBottom = "double 4px #333";
  invent.style.boxShadow = "none";
  invent.style.filter = "saturate(0%)";
  
  //(Informações)
  banner.style.background = "url(https://i.imgur.com/jpqYsWu.png)";
  headNome.innerHTML = "Steve";
  nick.innerHTML = "Sbevee_";
    
  //Inventory
    //Flora'eyes
    var floraEyes = document.createElement("IMG");
    floraEyes.setAttribute("src", "https://i.imgur.com/sinfJsj.png");
    floraEyes.setAttribute("title", "Flora'Eyes");
    floraEyes.setAttribute("draggable", "false");
    floraEyes.setAttribute("onClick", "floraeyes()");
    //Gerar
    invent.appendChild(floraEyes);
    
  //Info Bar
  var vidBar = document.getElementById("vBar");
  var difBar = document.getElementById("dBar");
  var forBar = document.getElementById("fBar");
  var resBar = document.getElementById("rBar");
  setTimeout(function(){
    vidBar.style.width= "2.5%";
    difBar.style.width = "2.5%";
    forBar.style.width = "3.4%";
    resBar.style.width = "2.5%";
    }, 100);
    
  //Historico
  var hBox = document.getElementById("pStory");
  
    //Conteudo tab 01
    var name1 = document.createElement("DIV");
    name1.setAttribute("id", "leftName");
    name1.innerHTML = "Sbevee_";
    
    var cName1 = document.createElement("DIV");
    cName1.setAttribute("id", "centralName");
    cName1.innerHTML = "-3,48HP"
    
    var rName1 = document.createElement("DIV");
    rName1.setAttribute("id", "rightName");
    rName1.innerHTML = "Fools113";
    
      //painel 01
       var killTab1 = document.createElement("DIV");
       killTab1.setAttribute("id", "killBar");
       killTab1.appendChild(name1)+killTab1.appendChild(cName1)+killTab1.appendChild(rName1);
    
    //Projeção da Lista
    hBox.appendChild(killTab1);
}
