
function junin(){
  var menuBtn = document.getElementById("menu");
  menuBtn.style.transform = "scale(0) rotate(360deg)";
  
  //+Variaveis//
  var banner = document.getElementById("bannerTab");
  var headNome = document.getElementById("nome");
  var nick = document.getElementById("nick");
  var bgDesign = document.getElementById("pTabBody");
  var invent = document.getElementById("pChar");
  
  document.getElementById('ProfileTab').style.display = "initial";
  document.getElementById('brackground').style.display = "initial";
  
  //Design de Pagina
  bgDesign.style.background = "linear-gradient(-185deg, rgba(15,0,17,1), rgba(35,30,45,1))";
  bgDesign.style.boxShadow = "inset 0px 30px 20px -25px #FC7, inset 0px -30px 20px -20px #100500";
  bgDesign.style.borderTop = "double 5px #FC9";
  invent.style.background = "rgba(5,0,10,0.8)";
  invent.style.borderTop = "double 4px #97F";
  invent.style.borderBottom = "double 4px #97F";
  invent.style.boxShadow = "inset 0px 15px 15px -13px #429, inset 0px -15px 15px -15px #429";
  invent.style.filter = "saturate(100%)";
  
  //Pagina do Juninho (Informações)
  banner.style.background = "url(https://i.imgur.com/UjzWIes.png)";
  headNome.innerHTML = "Juninho";
  nick.innerHTML = "rGreque";
  
    //Inventory
      //Flora'eyes
      var floraEyes = document.createElement("IMG");
      floraEyes.setAttribute("src", "https://i.imgur.com/sinfJsj.png");
      floraEyes.setAttribute("title", "Flora'Eyes");
      floraEyes.setAttribute("draggable", "false");
      floraEyes.setAttribute("onClick", "floraeyes()");
      //create
      invent.appendChild(floraEyes);
  
  //Info Bar
  var vidBar = document.getElementById("vBar");
  var difBar = document.getElementById("dBar");
  var forBar = document.getElementById("fBar");
  var resBar = document.getElementById("rBar");
  
  setTimeout(function(){
  vidBar.style.width= "15%";
  difBar.style.width = "50%";
  forBar.style.width = "70%";
  resBar.style.width = "21%";
  }, 100);
  
  //Historico
  var hBox = document.getElementById("pStory");
  
    //Conteudo tab 01
    var name1 = document.createElement("DIV");
    name1.setAttribute("id", "leftName");
    name1.innerHTML = "rGreque";
    
    var cName1 = document.createElement("DIV");
    cName1.setAttribute("id", "centralName");
    cName1.innerHTML = "-50HP"
    
    var rName1 = document.createElement("DIV");
    rName1.setAttribute("id", "rightName");
    rName1.innerHTML = "Fools113";
    
      //painel 01
       var killTab1 = document.createElement("DIV");
       killTab1.setAttribute("id", "killBar");
       killTab1.appendChild(name1)+killTab1.appendChild(cName1)+killTab1.appendChild(rName1);
  
    //Conteudo tab 02
    var name2 = document.createElement("DIV");
    name2.setAttribute("id", "leftName");
    name2.innerHTML = "rGreque";
    
    var cName2 = document.createElement("DIV");
    cName2.setAttribute("id", "centralName");
    cName2.innerHTML = "♚"
    
    var rName2 = document.createElement("DIV");
    rName2.setAttribute("id", "rightName");
    rName2.innerHTML = "Tornou-se Um Boss";
    
      //painel 02
       var killTab2 = document.createElement("DIV");
       killTab2.setAttribute("id", "killBar");
       killTab2.appendChild(name2)+killTab2.appendChild(cName2)+killTab2.appendChild(rName2);
  
    //Conteudo tab 03
    var name3 = document.createElement("DIV");
    name3.setAttribute("id", "leftName");
    name3.innerHTML = "Fools113";
    
    var cName3 = document.createElement("DIV");
    cName3.setAttribute("id", "centralName");
    cName3.innerHTML = "-50hp"
    
    var rName3 = document.createElement("DIV");
    rName3.setAttribute("id", "rightName");
    rName3.innerHTML = "rGreque";
    
      //painel 03
       var killTab3 = document.createElement("DIV");
       killTab3.setAttribute("id", "killBar");
       killTab3.appendChild(name3)+killTab3.appendChild(cName3)+killTab3.appendChild(rName3);
  
    //Conteudo tab 04
    var name4 = document.createElement("DIV");
    name4.setAttribute("id", "leftName");
    name4.innerHTML = "Fools113";
    
    var cName4 = document.createElement("DIV");
    cName4.setAttribute("id", "centralName");
    cName4.innerHTML = "Matou"
    
    var rName4 = document.createElement("DIV");
    rName4.setAttribute("id", "rightName");
    rName4.innerHTML = "rGreque";
    
      //painel 04
       var killTab4 = document.createElement("DIV");
       killTab4.setAttribute("id", "killBar");
       killTab4.appendChild(name4)+killTab4.appendChild(cName4)+killTab4.appendChild(rName4);
  
  
  
  //Projeção da Lista
  hBox.appendChild(killTab4)+hBox.appendChild(killTab3)+hBox.appendChild(killTab2)+hBox.appendChild(killTab1);

}
