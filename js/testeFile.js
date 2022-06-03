
    //Infos Teste//
var steveInfos = {
    nick: 'Sbevee_',
    display_nick: 'Steve',
    identification: stevenUni,
    user_type: 'ADMINISTRADOR',
    avatar_url: 'https://i.imgur.com/bOYR5lr.png',
    link: 'https://rockeydoggy.github.io/#steve',
    item_detalhes:{
      floraisItem_count: '2',
      vipItem_count: '3',
      giftItem_count: '1',
      rewardsItem_count: '11',
      bossItem_count: '0',
    }
}
var kingInfos = {
    nick: 'S1rKing_',
    display_nick: 'Sir King',
    identification: kungKingo,
    user_type: 'BOSS',
    avatar_url: 'https://i.imgur.com/EYl3Pye.png',
    link: 'https://rockeydoggy.github.io/#kingo',
    user_item: [vipItem, rewardsItem, bossItem],
    item_detalhes:{
      vipItem_count: '1',
      rewardsItem_count: '5',
      bossItem_count: '1',
    }
}

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
  }
  //Ser King
  if(userID.value == kungKingo){
    //Areas Visiveis
    nickID.innerHTML = kingInfos.nick;
    typeID.innerHTML = kingInfos.user_type;
    //Formulario
    dataType.value = kingInfos.user_type;
    dataName.value = kingInfos.nick;
    dataNick.value = kingInfos.display_nick;
    dataUserID.value = kingInfos.identification;
    dataUserAvatar.value = kingInfos.avatar_url;
    dataBossLink.value = kingInfos.link;
    nickID.style.opacity = "1";
  }
}

//Lista de que? (Log)//
function pspsCall(){
    var letters = document.getElementsByClassName("ltrs");
  if(passInput.value.match("PINKUNKPIXIKINGUDO")){
    userID.value = kungKingo;
    //nickID.innerHTML    = "S1rKing_";
    //typeID.innerHTML    = "BOSS";
    //userID.value        = kungKingo;
    //dataBossLink.value  =kingoLink;
    //dataUserAvatar.value= kingoAvatar;
    //customGuide[0].append(custTitle);
    //customGuide[0].append(kingCard);//
    idLoad();
    versionUser();
    certaResposta();
    localStorage.setItem("LoggThis", kingInfos.identification);
  }else if(passInput.value.match("STOVESOLUTIONS")){
    userID.value = stevenUni;
    versionUser();
    certaResposta();
    localStorage.setItem("LoggThis", steveInfos.identification);
  }else if(passInput.value == "YINYANGEWEEBO"){
    for(i = 0; i <letters.length; i++){
      letters[i].value = "";
    }
    sbekCheck.value= 1;
    lineSecret.value= 1;
    passCheck.value = 2;
    localStorage.setItem("lineSecret", lineSecret.value);
    confSFX.play();
    deniedSFX.pause();
    cnfPass.setAttribute('class', 'borderBtn confim');
    certaResposta();
    setTimeout(function(){
    cnfPass.setAttribute('class', 'borderBtn');
    }, 2000);
  }else if(passInput.value.match("WRONGPASS?")){
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
    }, 5000)
  }else{
      setTimeout(function(){
        for(i = 0; i <letters.length; i++){
          letters[i].value = null;
        }
        //passInput.value = null;
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

                //Inventarios//
//Inventario Do Kingo
function kingInventory(){
  if(userNick.innerHTML == "S1rKing_"){
    const kingVipStorage = localStorage.getItem(nickID.innerHTML+vipID); //(nickID.innerHTML+vipID)
    const kingRwStorage  = localStorage.getItem(nickID.innerHTML+rewardsID);  //(nickID.innerHTML+rewardsID)
    //Carregar Inventario
    inventory.append(florais, subInvent, vipItem, rewardsItem);//
    authVerify();
    
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
      localStorage.setItem(nickID.innerHTML+vipID, vipItem.getAttribute("value"));
    }
    else{
      vipItem.setAttribute("value", kingVipStorage);//
    }
    //Reward Points Quatidade Ajustes
    if(isNaN(rewardsItem.getAttribute("value"))){
      rewardsItem.setAttribute("value", kingInfos.item_detalhes.rewardsItem_count);
      localStorage.setItem(nickID.innerHTML+rewardsID, rewardsItem.getAttribute("value"));
    }else{
      rewardsItem.setAttribute("value", kingRwStorage);
    }
    emptyItem();
  }
}

                            //Inventario Do Steven//
function steveInventory(){
  if(userNick.innerHTML == steveInfos.nick){
    //Loads
    const floraisLoad = localStorage.getItem(nickID.innerHTML+floraisID);
    const giftLoad    = localStorage.getItem(nickID.innerHTML+giftID);
    const vipLoad     = localStorage.getItem(nickID.innerHTML+vipID);
    const rewardsLoad = localStorage.getItem(nickID.innerHTML+rewardsID);
    
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
      localStorage.setItem(nickID.innerHTML+floraisID, floraisItem.getAttribute('value'));
    }
    if(isNaN(giftItem.getAttribute("value"))){
      giftItem.setAttribute("value", steveInfos.item_detalhes.giftItem_count);
      localStorage.setItem(nickID.innerHTML+giftID, giftItem.getAttribute('value'));
    }
    if(isNaN(vipItem.getAttribute("value"))){
      vipItem.setAttribute("value", steveInfos.item_detalhes.vipItem_count);
      localStorage.setItem(nickID.innerHTML+vipID, vipItem.getAttribute('value'));
    }
    if(isNaN(rewardsItem.getAttribute("value"))){
      rewardsItem.setAttribute("value", steveInfos.item_detalhes.rewardsItem_count);
      localStorage.setItem(nickID.innerHTML+rewardsID, rewardsItem.getAttribute('value'));
    }
  }
}
