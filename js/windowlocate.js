
var sexo = document.getElementById("locateTeste");
sexo.value = window.location.hash;

//On Whity
  if(sexo.value == "#whity"){
    whitie();
  }
    if(sexo.value == "#Whity"){
      whitie();
    }
    if(sexo.value == "#whitykun_"){
      whitie();
    }
    if(sexo.value == "#WhityKun_"){
      whitie();
    }

//On Pandas
const pandao = ["#pandas", "#Pandas", "#pandas_s2", "#Pandas_S2", "#Pandos", "#pandos", "#pandas_S2", "#Pandas_s2", "#Pandoca", "#pandoca"];
  //open King
  if(pandao.includes(sexo.value)){
    pandos();
    invLoad();
  }


//On Kingo
const kingao = ["#king", "#King", "#kingo", "#Kingo", "#kingudo", "#Kingudo", "#Kingao", "#kingao", "#kingola", "#Kingola"];
  //open King
  if(kingao.includes(sexo.value)){
    kingo();
    invLoad();
  }
  
//On Fools
const foolzao = ["#Fools", "#fools", "#Fooly", "#fooly", "#Fools113", "#fools113", "#Foolzão", "#foolzão"];
  //open Fools
  if(foolzao.includes(sexo.value)){
    fools();
  }
  
//On Junin
const junesco = ["#Juninho", "#juninho", "#Junin", "#junin", "#junesco", "#Junesco", "#greque", "#Greque"];
  //open Junin
  if(junesco.includes(sexo.value)){
    junin();
  }
  
//On Sbeeker
const sbeekeru = ["#Sbeeker", "#sbeeker", "#Sbekeer", "#sbekeer", "#SteveESneker", "#steveesneker", "#stevesneker", "#SteveSneker"];
  //open Sbeeker
  if(sbeekeru.includes(sexo.value)){
    sbeeker();
  }
  
//On Raffa
const raffas = ["#Rafa", "#rafa", "#rafaasmile", "#RafaaSmile", "#rafinha", "#Rafinha", "#filho01", "#Filho01"];
  //open Rafa
  if(raffas.includes(sexo.value)){
    rafa();
  }
  
//On Girl
const girlBunny = ["#girl", "#Girl", "#GirlStrangerFear", "#girlstrangerfear", "#BunBunny", "#bunbunny"];
  //open Girl
  if(girlBunny.includes(sexo.value)){
    girl();
  }
  
//On Mandrax
const mandracao = ["#mandrax", "#Mandrax", "#Draaaxxy", "#draaaxxy", "#Draxy", "#draxy"];
  //open Mandrax
  if(mandracao.includes(sexo.value)){
    mandrax();
  }

//On Steve
const stevon = ["#Steve", "#steve", "#sbevee_", "#Sbevee_", "#weebo", "#Weebo"];
  //open Mandrax
  if(stevon.includes(sexo.value)){
    steve();
    invLoad();
  }
