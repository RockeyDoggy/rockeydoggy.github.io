//Pandas
function pandos(){
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
  
  bgDesign.style.backgroundImage = "linear-gradient(-185deg, rgba(10,5,15,1), rgba(35,30,40,1))";
  bgDesign.style.boxShadow = "inset 0px 30px 20px -25px #FC7, inset 0px -30px 20px -20px #100500";
  bgDesign.style.borderTop = "double 5px #FC9";
  invent.style.background = "rgba(5,0,10,0.8)";
  invent.style.borderTop = "double 4px #97F";
  invent.style.borderBottom = "double 4px #97F";
  invent.style.boxShadow = "inset 0px 15px 15px -13px #429, inset 0px -15px 15px -15px #429";
  invent.style.filter = "saturate(100%)";
  
  //(Informações)
  banner.style.background = "url(https://i.imgur.com/kLIT76F.png)";
  headNome.innerHTML = "Pandas";
  nick.innerHTML = "Pandas_S2";
  malav.innerHTML = 'pandas_infos';
    nick.setAttribute("onclick", "pandoTwitch()");
    nick.setAttribute('class', 'sbHover');
    
    
  //Equipament
  loadEquipedItem();
  //Historico
  loadStory();
  
  //Info Bar
  var vidBar = document.getElementById("vBar");
  var difBar = document.getElementById("dBar");
  var forBar = document.getElementById("fBar");
  var resBar = document.getElementById("rBar");
  setTimeout(function(){
    vidBar.style.width= "5.0%";   //Vida
    difBar.style.width = "20%";   //Dificuldade
    forBar.style.width = "8%";  //Força
    resBar.style.width = "2.5%";  //Resistencia
    }, 100);
  
  window.location.hash = "pandas";
  invLoad();
  newInv();
}
//Kingo End

function pandoTwitch(){
  window.open('https://www.twitch.tv/pandas_s2', '_blank');
}
