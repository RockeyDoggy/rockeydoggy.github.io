

                     //Logme//
userID.value = localStorage.getItem("LoggThis");
versionUser();

      //Verificações//
function versionUser(){
  //Ser Visitante
  if(userID.value == ""){
    //Areas Visiveis
    nickID.innerHTML = "Visitante";
    typeID.innerHTML = "";
    //Formulario
    dataType.value = "";
    dataName.value = "";
    dataNick.value = "";
    dataUserID.value = "";
    dataUserAvatar.value = "";
    dataBossLink.value = "";
    nickID.style.opacity = "0";
    nickID.style.pointerEvents = "";
    vistadecima.style.opacity = "";
  }
  //Ser Steve//
  if(userID.value == stevenUni){
    //Areas Visiveis
    nickID.innerHTML = steveInfos.nick;
    typeID.innerHTML = steveInfos.user_type;
    //Formulario
    dataType.value = steveInfos.user_type;
    dataName.value = steveInfos.nick;
    dataNick.value = steveInfos.display_nick;
    dataUserID.value = steveInfos.identification;
    dataUserAvatar.value = steveInfos.avatar_url;
    dataBossLink.value = steveInfos.link;
    nickID.style.opacity = "1";
    nickID.style.pointerEvents = "auto";
    vistadecima.style.opacity = "1";
    vistadecima.display = "block";
  }else{
    vistadecima.style.opacity = "";
    vistadecima.display = "";
  }
  //Ser King
  if(userID.value == kungKingo){
    //Areas Visiveis
    nickID.innerHTML      = kingInfos.nick;
    typeID.innerHTML      = kingInfos.user_type;
    //Formulario
    dataType.value        = kingInfos.user_type;
    dataName.value        = kingInfos.nick;
    dataNick.value        = kingInfos.display_nick;
    dataUserID.value      = kingInfos.identification;
    dataUserAvatar.value  = kingInfos.avatar_url;
    dataBossLink.value    = kingInfos.link;
    nickID.style.opacity  = "1";
  }
  if(userID.value == pandasInfo.identification){
    //ID Visiveis
    nickID.innerHTML      = pandasInfo.nick;
    typeID.innerHTML      = pandasInfo.user_type;
    //Formulario
    dataType.value        = pandasInfo.user_type;
    dataName.value        = pandasInfo.nick;
    dataNick.value        = pandasInfo.display_nick;
    dataUserID.value      = pandasInfo.identification;
    dataUserAvatar.value  = pandasInfo.avatar_url;
    dataBossLink.value    = pandasInfo.link;
    nickID.style.opacity  = "1";
  };
}
function welMessage(){
  const h5Message = document.createElement('h5');
  const h6Message = document.createElement('h6');
  const h7Message = document.createElement('h7');
  const h8Message = document.createElement('H8');
  h5Message.innerHTML = "Olá";
  h6Message.innerHTML = "{NOME}";
  h8Message.innerHTML = "Agora você pode resgatar seus itens e recompensas quando quiser.";
  imagePlac.setAttribute("class", "cardImage");
  errorScreen.style.display = "flex";
  errorScreen.style.zIndex = "200";
  errorBox.style.opacity = "1";
  errorBox.append(h5Message, h6Message, imagePlac, h8Message);
  errorBox.innerHTML = errorBox.innerHTML.replace(/{NOME}/g, dataNick.value);
  setTimeout(function(){
    errorBox.style.opacity = "0";
    setTimeout(function(){
      errorScreen.style.display = "";
      errorScreen.style.zIndex = "";
      errorBox.innerHTML = "";
    }, 1000);
  }, 3000)
}

//Lista de que? (Log)//
function pspsCall(){
  var letters = document.getElementsByClassName("ltrs");
  if(passInput.value.match(kingudo)){
    userID.value = kungKingo;
    //nickID.innerHTML    = "S1rKing_";
    //typeID.innerHTML    = "BOSS";
    //userID.value        = kungKingo;
    //dataBossLink.value  =kingoLink;
    //dataUserAvatar.value= kingoAvatar;
    //customGuide[0].append(custTitle);//
    //customGuide[0].append(kingCard);//
    idLoad();
    versionUser();
    certaResposta();
    localStorage.setItem("LoggThis", kingInfos.identification);
    //Message
    imagePlac.setAttribute("src", "https://i.imgur.com/C8bdCDJ.png");
    welMessage();
    
    //clear Password
    setTimeout(function(){
      passClose();
    }, 7000);
  }else if(passInput.value.match(stove)){
    userID.value = steveInfos.identification;
    versionUser();
    certaResposta();
    localStorage.setItem("LoggThis", steveInfos.identification);
    //Message
    imagePlac.setAttribute("src", "https://i.imgur.com/jpqYsWu.png");
    welMessage();
    
    //clear Password
    setTimeout(function(){
      passClose();
    }, 7000);
  }else if(passInput.value.match(pandola)){
    userID.value = pandasInfo.identification;
    versionUser();
    certaResposta();
    localStorage.setItem("LoggThis", pandasInfo.identification);
    //Message
    imagePlac.setAttribute("src", "https://i.imgur.com/kLIT76F.png");
    welMessage();
    
    //clear Password
    setTimeout(function(){
      passClose();
    }, 7000);
  }else if(passInput.value.match(prank)){
    //passAll.style.display = "none";
    passCheck.value = 2;
    warning.style.display = "initial";
    warning.innerHTML = "<h1>Sim!</h1><h2>A Senha Está Errada</h2><h3>Até Mais!</h3>";
    warning.style.opacity = 1;
    pasScreen.style.opacity = 0;
    cnfPass.setAttribute('class', 'borderBtn den');
    setTimeout(function(){
      passAll.style.display = "none";
      warning.style.display = "none";
      warning.innerHTML = "";
      pasScreen.style.opacity = 1;
      certaResposta();
      passClose();
    }, 5000)
  }else if(passInput.value.match(sbk)){
    sbekCheck.value= 1;
    lineSecret.value= 1;
    passCheck.value = 2;
    localStorage.setItem("lineSecret", lineSecret.value);
    confSFX.play();//
    deniedSFX.pause();
    cnfPass.setAttribute('class', 'borderBtn confim');
    certaResposta();
    setTimeout(function(){
        cnfPass.setAttribute('class', 'borderBtn');
        passClose();
    }, 2000);
  }else{
    setTimeout(function(){
      warning.style.opacity = 0;
    }, 2000);
  
    //sound and alerts
    deniedSFX.play();
    cnfPass.setAttribute('class', 'borderBtn den');
    setTimeout(function(){
      cnfPass.setAttribute('class', 'borderBtn');
    }, 1000);
  }
    
}

//function clearKeys(){
//    var letters = document.getElementsByClassName("ltrs");
//    setTimeout(function(){
//        for(i = 0; i <letters.length; i++){
//    letters[i].value = null;
//    }, 2000)
//}

                //Inventarios//
//Inventario Do Kingo
function kingInventory(){
  if(userNick.innerHTML == "S1rKing_"){
    const kingVipStorage = localStorage.getItem(userNick.innerHTML+vipID); //(nickID.innerHTML+vipID)
    const kingRwStorage  = localStorage.getItem(userNick.innerHTML+rewardsID);  //(nickID.innerHTML+rewardsID)
    //Carregar Inventario
    inventory.append(florais, subInvent, vipItem, rewardsItem);//
    authVerify();
    //Valores
    vipItem.setAttribute("value", kingVipStorage);//
    rewardsItem.setAttribute("value", kingRwStorage);
    
    //condições//
    if(nickID.innerHTML == userNick.innerHTML){
      vipItem.setAttribute("onclick", "rwVip()");
      rewardsItem.setAttribute("onClick", "claimRewards()");
      vipItem.setAttribute("value", kingVipStorage);
      rewardsItem.setAttribute("value", kingRwStorage);
    }
    else{
      vipItem.removeAttribute("onclick");
      rewardsItem.removeAttribute("onClick");
    }
    //Vip Quantidade Ajustes//
    if(isNaN(vipItem.getAttribute("value"))){
      vipItem.setAttribute("value", kingInfos.item_detalhes.vipItem_count);
      localStorage.setItem(userNick.innerHTML+vipID, vipItem.getAttribute("value"));
    }
    //Reward Points Quatidade Ajustes
    if(isNaN(rewardsItem.getAttribute("value"))){
      rewardsItem.setAttribute("value", kingInfos.item_detalhes.rewardsItem_count);
      localStorage.setItem(userNick.innerHTML+rewardsID, rewardsItem.getAttribute("value"));
    }
    emptyItem();
  }
}

                            //Inventario Do Steven//
function steveInventory(){
  if(userNick.innerHTML == steveInfos.nick){
    //Loads
    const floraisLoad = localStorage.getItem(userNick.innerHTML+floraisID);
    const giftLoad    = localStorage.getItem(userNick.innerHTML+giftID);
    const vipLoad     = localStorage.getItem(userNick.innerHTML+vipID);
    const rewardsLoad = localStorage.getItem(userNick.innerHTML+rewardsID);
    
    if(nickID.innerHTML == userNick.innerHTML){
      //Itens Disponiveis
      floraisItem.setAttribute("onclick", "claimFlorais()");
      giftItem.setAttribute("onclick", "claimGiftSub()");
      vipItem.setAttribute("onclick", "rwVip()");
      rewardsItem.setAttribute("onClick", "claimRewards()");//
      //Itens Para Exibir
      inventory.append(subInvent, floraisItem, vipItem,giftItem, rewardsItem, bossItem);//
      inventory.style.filter = "none";
    
      //Carregar Quantidades
      floraisItem.setAttribute("value", floraisLoad);
      giftItem.setAttribute("value", giftLoad);
      vipItem.setAttribute("value",  vipLoad);
      rewardsItem.setAttribute("value",  rewardsLoad);
      
      authVerify();
      emptyItem();
    }else{
      //Itens Disponiveis
      floraisItem.removeAttribute("onclick");
      giftItem.removeAttribute("onclick");
      vipItem.removeAttribute("onclick");
      rewardsItem.removeAttribute("onClick");
    }
    
    //Quantidades caso o valor seja nulo//
    if(isNaN(floraisItem.getAttribute("value"))){
      floraisItem.setAttribute("value", steveInfos.item_detalhes.floraisItem_count);
      localStorage.setItem(userNick.innerHTML+floraisID, floraisItem.getAttribute('value'));
    }
    if(isNaN(giftItem.getAttribute("value"))){
      giftItem.setAttribute("value", steveInfos.item_detalhes.giftItem_count);
      localStorage.setItem(userNick.innerHTMLL+giftID, giftItem.getAttribute('value'));
    }
    if(isNaN(vipItem.getAttribute("value"))){
      vipItem.setAttribute("value", steveInfos.item_detalhes.vipItem_count);
      localStorage.setItem(userNick.innerHTML+vipID, vipItem.getAttribute('value'));
    }
    if(isNaN(rewardsItem.getAttribute("value"))){
      rewardsItem.setAttribute("value", steveInfos.item_detalhes.rewardsItem_count);
      localStorage.setItem(userNick.innerHTML+rewardsID, rewardsItem.getAttribute('value'));
    }
  }
}


          ///Inventario Do Pandas///
function pandasInventory(){
  if(userNick.innerHTML == pandasInfo.nick){
    //Loads
    const vipLoad     = localStorage.getItem(userNick.innerHTML+vipID);
    const rewardsLoad = localStorage.getItem(userNick.innerHTML+rewardsID);
    //Carregar Inventario
    inventory.append(florais, subInvent, vipItem, rewardsItem);//
    authVerify();
    
    //Carregar Quantidades
    vipItem.setAttribute("value",  vipLoad);
    rewardsItem.setAttribute("value",  rewardsLoad);
    
    //Se O Boss Estiver Logado
    if(nickID.innerHTML == userNick.innerHTML){
      //Itens Disponiveis
      vipItem.setAttribute("onclick", "rwVip()");
      rewardsItem.setAttribute("onClick", "claimRewards()");//
      //Itens Para Exibir
      inventory.style.filter = "none";
      emptyItem();
    }else{
      vipItem.removeAttribute("onclick");
      rewardsItem.removeAttribute("onClick");
    }
    
    //Vip Quantidade Ajustes//
    if(isNaN(vipItem.getAttribute("value"))){
      vipItem.setAttribute("value", pandasInfo.item_detalhes.vip);
      localStorage.setItem(userNick.innerHTML+vipID, vipItem.getAttribute("value"));
    }
    
    //Rewards Quantidade Ajustes//
    if(isNaN(rewardsItem.getAttribute("value"))){
      rewardsItem.setAttribute("value", pandasInfo.item_detalhes.rewards);
      localStorage.setItem(userNick.innerHTML+rewardsID, rewardsItem.getAttribute("value"));
    }
  }
}
//hmmm
