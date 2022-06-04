
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
const panducao = ["#pandas", "#Pandas", "#pandas_s2", "#Pandas_S2", "#Pandos", "#pandos", "#pandas_S2", "#Pandas_s2", "#Pandoca", "#pandoca"]; //Tags Validas
 
  if(panducao.includes(sexo.value)){
    pandos();
  }

if(sexo.value == "#Pandos"){
    pandos();
}
