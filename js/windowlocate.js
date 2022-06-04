
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
const pandoca = ["#pandas", "#Pandas", "#pandas_s2", "#Pandas_S2", "#Pandos", "#pandos", "#pandas_S2", "#Pandas_s2", "#Pandoca", "#pandoca"];
 
  if(pandoca.includes(tstInp.value)){
    pandos();
  }
