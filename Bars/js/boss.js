// ------------------------------------------------------ //

//Streamlabs Links

//var goal-Current = document.getElementById('goal-current').innerHTML;
//var goal-Total = document.getElementById('goal-total').innerHTML;
// document.getElementById('paypal').innerHTML = goal-Current;
// document.getElementById('maximo').innerHTML = goal-total;

//Funções padrões

//Skin Location
//Fundo
var sFundo = "url(https://i.imgur.com/z95zJ1e.png)";
//Barra
var sBarraC = "https://i.imgur.com/92tDKRl.gif";
var sBarraR = "https://i.imgur.com/92tDKRl.gif";
var sBarraV = "https://i.imgur.com/gEVSAwQ.gif";
//Barra Pausada
var pBarraC = "https://i.imgur.com/4lBsfBq.png";
var pBarraR = "https://i.imgur.com/4lBsfBq.png";
var pBarraV = "https://i.imgur.com/dbIIMdv.png";

//Sub Titulo
var sSub = "url(https://i.imgur.com/dhzHf17.png)";
//Borda
var sBorda = "url(https://i.imgur.com/US7RdKj.png)";
//Avatar
var sAvatar = "https://i.imgur.com/AJKDmh4.png";
//Contador de Vidas
var sLifeCount0 = "url(https://i.imgur.com/h7oCVXf.png)";
var sLifeCount1 = "url(https://i.imgur.com/lMoAUyz.png)";
var sLifeCount2 = "url(https://i.imgur.com/ls9pywl.png)";
var sLifeCount3 = "url(https://i.imgur.com/ErIoY8S.png)";
var sLifeCount4 = "url(https://i.imgur.com/FBE0AYc.png)";
var sLifeCount5 = "url(https://i.imgur.com/ORL9u93.png)";



//Status de Doante

setTimeout(function refletir(){
  setTimeout(refletir, 1000);
  
  //var atual = document.getElementById("goal-current").innerHTML;
  var atual = "{AMOUNT}";
  //var total = document.getElementById("goal-total").innerHTML;
  var total = "{GOAL}";
  var Paypal = document.getElementById("paypal").innerHTML;
  var Pix = document.getElementById("pix").innerHTML;
  
  var palSoma = document.getElementById('palsoma').innerHTML;
  var pixSoma = document.getElementById('pixsoma').innerHTML;
  
  var result = parseInt(palSoma) + parseInt(pixSoma);
  var max = document.getElementById('goal-total').innerHTML;
  var porcento = Math.ceil(100 - result / max * 100);
  var nPorcento = Math.ceil(result / max * 100);
  
  //var plusPorcent = porcento + 1;
  var healthcount = max - result;
  
  //Titulos
  
	var titulo = document.getElementById("title").innerHTML;
	var Nick = titulo;

	var subTitle = "Gacha é Merda";
  
  var pixNow = document.getElementById('pix').innerHTML;
  
	document.getElementById('nome').innerHTML = Nick;
	document.getElementById('subtitulo').innerHTML = subTitle;
  
  if(porcento < 0){
    document.getElementById('cBar').style.width = "0%";
    document.getElementById('rBar').style.width = "0%";
  }
  //Life count
  if(nPorcento < 99){
    document.getElementById('lc5').style.opacity = "1";
    document.getElementById('lc4').style.opacity = "0";
    document.getElementById('lc3').style.opacity = "0";
    document.getElementById('lc2').style.opacity = "0";
    document.getElementById('lc1').style.opacity = "0";
    document.getElementById('lc0').style.opacity = "0";
  }
  
  if(nPorcento > 99){
    document.getElementById('lc5').style.opacity = "0";
    document.getElementById('lc4').style.opacity = "1";
    document.getElementById('lc3').style.opacity = "0";
    document.getElementById('lc2').style.opacity = "0";
    document.getElementById('lc1').style.opacity = "0";
    document.getElementById('lc0').style.opacity = "0";
    document.getElementById('Avatar').style.cssText = "filter:grayscale(100%) contrast(200%);";
  }
  
  if(nPorcento > 199){
    document.getElementById('lc5').style.opacity = "0";
    document.getElementById('lc4').style.opacity = "0";
    document.getElementById('lc3').style.opacity = "1";
    document.getElementById('lc2').style.opacity = "0";
    document.getElementById('lc1').style.opacity = "0";
    document.getElementById('lc0').style.opacity = "0";
  }
  
  if(nPorcento > 299){
    document.getElementById('lc5').style.opacity = "0";
    document.getElementById('lc4').style.opacity = "0";
    document.getElementById('lc3').style.opacity = "0";
    document.getElementById('lc2').style.opacity = "1";
    document.getElementById('lc1').style.opacity = "0";
    document.getElementById('lc0').style.opacity = "0";
  }
  
  if(nPorcento > 399){
    document.getElementById('lc5').style.opacity = "0";
    document.getElementById('lc4').style.opacity = "0";
    document.getElementById('lc3').style.opacity = "0";
    document.getElementById('lc2').style.opacity = "0";
    document.getElementById('lc1').style.opacity = "1";
    document.getElementById('lc0').style.opacity = "0";
  }
  
  if(nPorcento > 499){
    document.getElementById('lc5').style.opacity = "0";
    document.getElementById('lc4').style.opacity = "0";
    document.getElementById('lc3').style.opacity = "0";
    document.getElementById('lc2').style.opacity = "0";
    document.getElementById('lc1').style.opacity = "0";
    document.getElementById('lc0').style.opacity = "1";
  }
  
  document.getElementById('maximo').innerHTML= total;
  document.getElementById('paypal').innerHTML= atual;
  document.getElementById('palsoma').innerHTML = Paypal;
  document.getElementById('pixsoma').innerHTML = Pix;
  document.getElementById('result').innerHTML = parseInt(palSoma) + parseInt(pixSoma);
  document.getElementById('teste').innerHTML = porcento + "%";
  document.getElementById('cBar').style.width = porcento + "%";
  document.getElementById('rBar').style.width = porcento + "%";
  document.getElementById('saude').innerHTML = max - result + " hp";
  
  //Save Pix Results
  
  //Reações no momento
  if(Paypal > palSoma){
    document.getElementById('saude').style.animation = "redblink 1s ease-out infinite";
  }else{
    document.getElementById('saude').style.animation = ""
  }
  if(Pix > pixSoma){
    document.getElementById('saude').style.animation = "redblink 1s ease-out infinite";
  }else{
    document.getElementById('saude').style.animation = ""
  }
  
  //Ocultar
  
  	if(Paypal == palSoma)
    {}else{
      document.getElementById('saude').style.animation = "redblink 1s ease-out infinite";
			document.getElementById('cBarIMG').src = sBarraC;
			document.getElementById('rBarIMG').src = sBarraR;
			document.getElementById('vBarIMG').src = sBarraV;
  	  document.getElementById('projeto').style.cssText="";
  	  setTimeout(function(){
  	    document.getElementById('projeto').style.cssText="transform:scale(0.8); bottom:-20px; opacity:0.45;";
				//Barra
				document.getElementById('cBarIMG').src = pBarraC;
				document.getElementById('rBarIMG').src = pBarraR;
				document.getElementById('vBarIMG').src = pBarraV;
  	}, 90000)};
  
  	if(Pix == pixSoma)
    {
    }else{
      document.getElementById('saude').style.animation = "redblink 1s ease-out infinite";
			document.getElementById('cBarIMG').src = sBarraC;
			document.getElementById('rBarIMG').src = sBarraR;
			document.getElementById('vBarIMG').src = sBarraV;
  	  document.getElementById('projeto').style.cssText="";
  	  setTimeout(function(){
  	    document.getElementById('projeto').style.cssText="transform:scale(0.8); bottom:-20px; opacity:0.45;";
				//Barra
				document.getElementById('cBarIMG').src = pBarraC;
				document.getElementById('rBarIMG').src = pBarraR;
				document.getElementById('vBarIMG').src = pBarraV;
  	}, 90000);
  }
  
  
  
  //script da meta
  
  
  var donMeta = document.getElementById('goal-current').innerHTML;
  var armMeta = document.getElementById('armazenado').innerHTML;
  var resMeta = document.getElementById('resultado-meta');
  var dinBar = document.getElementById('dina-meta');
  var metaExib = document.getElementById('metaStats');
  
  //Nome da Meta
  var metaName = "Espuma acustica";
  //Historico salvo (Armazenado)
  var historico = -23;
  
  var totalMeta = 1300;
  
  var calcMeta = result + parseInt(armMeta);
  var calcBarMeta = Math.ceil(resMeta / totalMeta * 100);
  var parcent = Math.ceil(calcMeta / totalMeta * 100);
  var history = document.getElementById('armazenado');
  
  resMeta.innerHTML = calcMeta;
  dinBar.style.width = Math.ceil(calcMeta / totalMeta * 100) + "%";
  metaExib.innerHTML = calcMeta + "/" + totalMeta + " R$";
  history.innerHTML = historico;
  //document.getElementById('teste').innerHTML= parcent;
  document.getElementById('nomeDaMeta').innerHTML = metaName;
  
  if(parcent > 50){
    document.getElementById('imageMeta').style.cssText="opacity:0;";
    document.getElementById('imagePurple').style.cssText="opacity:1;";
    document.getElementById('dina-meta').style.boxShadow= "3px 0 10px 5px #70F, inset 2px 0 10px 3px #70F";
    document.getElementById('barLight').style.cssText ="border-right:8px dashed #70F; box-shadow:inset -10px 0 10px 0px #70F, inset -4px 0 10px 0px #70F, 5px 0 10px 0 #70F";
    document.getElementById('metaStats').style.cssText = "font-weight:bold;";
  }else{
    document.getElementById('imageMeta').style.cssText="";
    document.getElementById('imagePurple').style.cssText="";
    document.getElementById('dina-meta').style.boxShadow= "";
    document.getElementById('barLight').style.cssText ="";
  }
  
  if(parcent > 90){
    document.getElementById('imageMeta').style.cssText="opacity:0;";
    document.getElementById('imagePurple').style.cssText="opacity:0;";
    document.getElementById('imageOrange').style.cssText="opacity:1;";
    document.getElementById('dina-meta').style.boxShadow= "2px 0 10px 3px #F70, inset 2px 0 10px 3px #F70";
    document.getElementById('barLight').style.cssText ="border-right:2px solid #F75; box-shadow:inset -10px 0 5px -2px #F70, inset -5px 0 5px 0px #F70, 5px 0 5px 0px #F70";
    document.getElementById('metaStats').style.cssText = "font-weight:bold; color:#FFF;";
  }else{
    document.getElementById('imageOrange').style.cssText="opacity:0;";
  }

}, 5000);

setTimeout(function diminuir(){
	document.getElementById('projeto').style.cssText="transform:scale(0.8); bottom:-20px; opacity:0.95;";
}, 80000)

//setTimeout(function somarPix(){
//  setTimeout(somarPix, 100);
//  var Pix = document.getElementById('pix').innerHTML;
//  localStorage.setItem('nPix', Pix);
//  document.getElementById('pixsoma').innerHTML = localStorage.getItem("nPix");
//}, 100)

//Skin Da Barra
//Fundo
document.getElementById('bg').style.backgroundImage = sFundo;
//Avatar
document.getElementById('Avatar').src = sAvatar;
//Barra
document.getElementById('cBarIMG').src = sBarraC;
document.getElementById('rBarIMG').src = sBarraR;
document.getElementById('vBarIMG').src = sBarraV;
//Barra De Subititulo
document.getElementById('bgS').style.backgroundImage = sSub;
//Bordas
document.getElementById('borda').style.backgroundImage = sBorda;
//Contador De Vidas
document.getElementById('lc0').style.backgroundImage = sLifeCount0;
document.getElementById('lc1').style.backgroundImage = sLifeCount1;
document.getElementById('lc2').style.backgroundImage = sLifeCount2;
document.getElementById('lc3').style.backgroundImage = sLifeCount3;
document.getElementById('lc4').style.backgroundImage = sLifeCount4;
document.getElementById('lc5').style.backgroundImage = sLifeCount5;





// Script da meta de donate



setTimeout(function meta(){
  
}, 1000)
