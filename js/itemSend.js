const webLink = "https://discord.com/api/webhooks/978928859820998686/z82tOcgHuanJveCdpliYt6DezSk9egtFDaJlQBQyWFWjpfXJynLVtFbDDZJsUQANpydA";
const botName = "The Eye in One Mind";
const botAvatar="https://cdn.discordapp.com/attachments/490283052010831875/798729546912235561/GIFMaker.org_8r22tq.gif";
//Identificadores
const nickID = document.getElementById("idName");
const typeID = document.getElementById("idType");
const userID = document.getElementById("codeWho");

//Mapa de Perfil
const passCenter = document.getElementById("centerScreen");
  //Mapa 2
const userCode   = document.getElementById("codeWho");
const passInput  = document.getElementById("passIs");
const authTab    = document.getElementById("auth");
const mastButton = document.getElementById("rwMasteClaim");
const errorScreen= document.getElementById("errorCentralize");
const errorBox   = document.getElementById("errorBox");
//Mapa de mensagem de Reward Confirm
const rewardWin = document.getElementById("rewardConfirm");
const rewardTxt = document.getElementById("text-rwContent");
const centRw = document.getElementById("centrelizeRW");

  //Criar Icones Destacados//
const florais = document.createElement("IMG");
florais.setAttribute("src", "https://i.imgur.com/VbAIghD.png");
florais.setAttribute("title", "Flora'Eyes");
florais.setAttribute("onclick", "floraeyes()");
florais.setAttribute("class", "purpleItem");
const florID = "0";
const florSRC= "https://i.imgur.com/VbAIghD.png";

//Criar Icone Florais
const floraisItem = document.createElement("IMG");
floraisItem.setAttribute("src", "https://i.imgur.com/VbAIghD.png");
floraisItem.setAttribute("title", "Flora'Eyes");
floraisItem.setAttribute("id", "lItem");
floraisItem.setAttribute("class", "orangeItem");
const floraisID = "1";
const floraisSRC= "https://i.imgur.com/VbAIghD.png";

//Criar Icone Vip
const vipItem = document.createElement("IMG");
vipItem.setAttribute("src", "https://i.imgur.com/pXQUwin.png");
vipItem.setAttribute("title", "Vip");
vipItem.setAttribute("id", "lItem");
vipItem.setAttribute("class", "purpleItem");
const vipID = "2";
const vipSRC= "https://i.imgur.com/pXQUwin.png";

//Criar Icone de Gift Sub
const giftItem = document.createElement("IMG");
giftItem.setAttribute("src", "https://i.imgur.com/3lRtdml.png");
giftItem.setAttribute("title", "Gift Sub");
giftItem.setAttribute("id", "lItem");
giftItem.setAttribute("class", "purpleItem");
const giftID = "3";
const giftSRC= "https://i.imgur.com/3lRtdml.png";

//Criar Icone de Reward Points
const rewardsItem = document.createElement("IMG");
rewardsItem.setAttribute("src", "https://i.imgur.com/8cPSvAg.png");
rewardsItem.setAttribute("title", "Reward Points Back");
rewardsItem.setAttribute("id", "lItem");
rewardsItem.setAttribute("class", "yellItem");
const rewardsID = "4";
const rewardsSRC= "https://i.imgur.com/8cPSvAg.png";

//Criar Icone de Boss
const bossItem = document.createElement("IMG");
bossItem.setAttribute("src", "https://i.imgur.com/y3aPgPs.png");
bossItem.setAttribute("title", "Boss Atual");
bossItem.setAttribute("id", "lItem");
bossItem.setAttribute("class", "redItem");
const bossID = "5";
const bossSRC= "https://i.imgur.com/y3aPgPs.png";

//Criar Inventario Distribuivel
const subInvent = document.createElement("H2");
subInvent.innerHTML = "INVENTARIO:";


//Criar setor
const custTitle = document.createElement("h2");
custTitle.innerHTML = "Identidade";

//Composição da Janela de Confirmação de Resgate
const h1Message = document.createElement("H1");
const h2Message = document.createElement("H2");
const h3Message = document.createElement("H3");
const h4Message = document.createElement("H4");
const imagePlac = document.createElement("IMG");
const countSpan = document.createElement("SPAN");
  //Input
const inputMess = document.createElement("INPUT");
inputMess.setAttribute("id", "extreField");
inputMess.setAttribute("onkeyup", "instantFill()");
inputMess.setAttribute("value", "");

const extraSpecs = document.getElementById("extreField");
  //Botão Extra
const claimMore = document.createElement("BUTTON");
claimMore.setAttribute("id", "infButton");

//Checagem Dupla
function doubleCheck(){
  pspsCall();
}

function screenKill(){
  pasScreen.style.opacity= "0";
  setTimeout(function(){
    centerScreen.style.display = "none";   //
  }, 1000)
}

//listing
const dataType        = document.getElementById("dataType");
const dataName        = document.getElementById("dataName");
const dataNick        = document.getElementById("dataNick");
const dataUserID      = document.getElementById("dataUserId");
const dataItem        = document.getElementById("dataItem");
const dataItemID      = document.getElementById("dataItemId");
const dataItemCount   = document.getElementById("dataItemCount");
const dataItemPay     = document.getElementById("dataItemPay");
const dataItemIcon    = document.getElementById("dataItemIcon");
const dataUserAvatar  = document.getElementById("dataUserAvatar");
const dataBossLink    = document.getElementById("dataBossLink");
const dataExtra       = document.getElementById("dataExtra");
const dataVerify      = document.getElementById("dataVerify");
const vistadecima     = document.getElementById("debug");

//Default Users
function idLoad(){
  if(userID.value == ""){
    typeID.innerHTML = "Desconhecido";
    nickID.innerHTML = "Visitante"
  }else{
    dataType.value = typeID.innerHTML;
    dataName.value = nickID.innerHTML;
    dataUserID.value = userID.value;
    nickID.style.opacity = "1";
  }
}

//Create Unlocked Chars
const customGuide = document.getElementsByClassName("selDesign");
//Criar o King_
const kingCard = document.createElement("button");
kingCard.setAttribute("title", "Você Esta Logado como S1rKing_");
kingCard.setAttribute("class", "itemBox xis");
kingCard.setAttribute("style", "background:url(https://i.imgur.com/EYl3Pye.png);");//

//Se o Password For Certo
function certaResposta(){
  cnfPass.setAttribute('class', 'borderBtn confim');
  deniedSFX.pause();
  localStorage.setItem("loggedHas", nickID.innerHTML);
  screenKill();
  audioFade();
}


//Sistema de Detectação de Item Por Nome//
function itemInfos(){
  if(dataItem.value == "Flora'Eyes"){
    dataItemID.value    = floraisID;
    dataItemIcon.value  = florais.src;
  }
  if(dataItem.value == "Vip"){
    dataItemID.value    = vipID;
    dataItemIcon.value  = vipItem.src;
    dataItemCount.value = vipItem.getAttribute("value");
  }
  if(dataItem.value == rewardsItem.getAttribute("title")){
    dataItemID.value    = rewardsID;
    dataItemIcon.value  = rewardsItem.src;
    dataItemCount.value = rewardsItem.getAttribute("value");
  }
  if(dataItem.value == giftItem.getAttribute("title")){
    dataItemID.value    = giftID;
    dataItemIcon.value  = giftItem.src;
    dataItemCount.value = giftItem.getAttribute("value");
  }
}

          //Claim Vip//
function rwVip(){
//Local Save Itens Count
const saveRew = localStorage.setItem(nickID.innerHTML+rewardsID+"value", rewardsItem.getAttribute("value"));
  //claim Funções
  centRw.style.display = "flex";
  dataItem.value = vipItem.title;
  dataItemCount.value = vipItem.getAttribute("value");
  //localStorage.setItem("kingoVipValue", vipItem.getAttribute("value"));
  itemInfos();//
  //Window Messages
  h1Message.innerHTML = "{ITEM}{COUNT}"
  imagePlac.src = vipItem.src;
  imagePlac.title = vipItem.title;
  imagePlac.setAttribute("class", "purpleItem");
  countSpan.innerHTML = "{COUNT}";
  h2Message.innerHTML = "Olá {NICK}, você esta prestes a resgatar 1 {ITEM}, só precisamos saber mais uma coisa.";
  inputMess.setAttribute("placeholder", "Quem você quer presentear?");
  rewardTxt.append(h1Message, imagePlac, countSpan, h2Message, inputMess);
  rewardTxt.innerHTML = rewardTxt.innerHTML.replace(/{NICK}/g, "<b>"+dataNick.value+"</b>").replace(/{ITEM}/g, "<b>"+dataItem.value+"</b>").replace(/{COUNT}/g, "<i>"+dataItemCount.value+"x</i>");
  
  //verificar Disponibilidade//
  itemClaimeble();
}

//Local Save Itens Count
const saveVip = localStorage.setItem(nickID.innerHTML+vipID+"Value", vipItem.getAttribute("value"));
const saveRew = localStorage.setItem(nickID.innerHTML+rewardsID+"value", rewardsItem.getAttribute("value"));
const loadVip = localStorage.getItem(nickID.innerHTML+vipID+"Value");
const loadRew = localStorage.getItem(nickID.innerHTML+rewardsID+"value");


        //Claim Reward Points//
function claimRewards(){
  //Local Save Itens Count
  const saveRew = localStorage.setItem(nickID.innerHTML+rewardsID+"value", rewardsItem.getAttribute("value"));
  //Claim Funções
  centRw.style.display = "flex";
  dataItem.value = rewardsItem.title;
  dataItemCount.value = rewardsItem.getAttribute("value");
  //localStorage.setItem("kingoRwValue", rewardsItem.getAttribute("value"));//
  //Botão Extra
  mastButton.style.display = "inline";
  itemInfos();//
  //Window Message Format
  h1Message.innerHTML = "{ITEM}{COUNT}"
  imagePlac.src = rewardsItem.src;
  imagePlac.setAttribute("class", "yellItem");
  imagePlac.title = rewardsItem.title;
  countSpan.innerHTML = "{COUNT}";
  h2Message.innerHTML = "Olá {NICK}, você esta prestes a resgatar {ITEM}.<br/> A cada resgate, você recupera 1 Reward Channel que você tenha usado em live começando pelos de 10.000 Channel Points para Baixo, Ou você pode clicar no botão sacrificar tudo e ter de volta qualquer recompensa a cima de 10.000 pontos de canal.";
  h3Message.innerHTML = 'OBS: Ao clicar em "Sacrificar Tudo" Você ira perder 5x de {ITEM} porém tera resgate de até 300.000 pontos de volta.<br/> -E não esqueça que você só tera de volta pontos que ja usou recentemente.'
  inputMess.setAttribute("placeholder", "Caso Queira de Volta algum Resgate Especifico...");
  rewardTxt.append(h1Message, imagePlac, countSpan, h2Message, h3Message, inputMess);
  rewardTxt.innerHTML = rewardTxt.innerHTML.replace(/{NICK}/g, "<b>"+dataNick.value+"</b>").replace(/{ITEM}/g, "<b>"+dataItem.value+"</b>").replace(/{COUNT}/g, "<i>"+dataItemCount.value+"x</i>");
  
  
  //verificar Disponibilidade
  itemClaimeble();
}


        //Claim Flora'Eyes//
function claimFlorais(){
  //Informações e visibilidades
  centRw.style.display = "flex";
  //Datas
  dataItem.value = floraisItem.title;
  dataItemCount.value = floraisItem.getAttribute("value");
  itemInfos();
  
  //Formato da Janela
  h1Message.innerHTML = "{ITEM}{COUNT}";
  imagePlac.src = floraisItem.src;
  imagePlac.title = floraisItem.title;
  imagePlac.setAttribute("class", "orangeItem");
  countSpan.innerHTML = "{COUNT}";
  h2Message.innerHTML = "Olá {NICK}, você possui {COUNT2} {ITEM}. <br /> {ITEM} é uma skin para a barra de vida que substituira a barra de vida padrão ou a do Boss anterior.";
  h3Message.innerHTML = "- Ao se tornar boss a skin {ITEM} sera colocada automaticamente.";
  inputMess.setAttribute("placeholder", "Nick para presentear.");
  rewardTxt.append(h1Message, imagePlac, countSpan, h2Message, h3Message, inputMess);
  rewardTxt.innerHTML = rewardTxt.innerHTML.replace(/{NICK}/g, "<b>"+dataNick.value+"</b>").replace(/{ITEM}/g, "<b>"+dataItem.value+"</b>").replace(/{COUNT}/g, "<i>"+dataItemCount.value+"x</i>").replace(/{COUNT2}/g, "<b>"+dataItemCount.value+"x</b>");
  
  itemClaimeble();
}

        //Claim Flora'Eyes//
function claimGiftSub(){
  //Informações e visibilidades
  centRw.style.display = "flex";
  //Datas
  dataItem.value = giftItem.title;
  dataItemCount.value = giftItem.getAttribute("value");
  itemInfos();
  
  //Formato da Janela
  h1Message.innerHTML = "{ITEM}{COUNT}";
  imagePlac.src = giftItem.src;
  imagePlac.title = giftItem.title;
  imagePlac.setAttribute("class", "purpleItem");
  countSpan.innerHTML = "{COUNT}";
  h2Message.innerHTML = "Olá {NOME}, você Possui {COUNT2} {ITEM}, vale uma Inscrição no nosso canal da Twitch como presente ou para si mesmo.";
  inputMess.setAttribute("placeholder", "Nick para presentear. (Deixe vazio caso seja pra si mesmo)");
  rewardTxt.append(h1Message, imagePlac, countSpan, h2Message, inputMess);
  rewardTxt.innerHTML = rewardTxt.innerHTML.replace(/{NICK}/g, "<b>"+dataNick.value+"</b>").replace(/{ITEM}/g, "<b>"+dataItem.value+"</b>").replace(/{COUNT}/g, "<i>"+dataItemCount.value+"x</i>").replace(/{COUNT2}/g, "<b>"+dataItemCount.value+"x</b>");
  
  itemClaimeble();
}


        //Função de Carregamento de Inventario//
function invLoad(){
//Local Save Itens Count
const saveRew = localStorage.setItem(nickID.innerHTML+rewardsID+"value", rewardsItem.getAttribute("value"));//
  //Carregar o King King
  kingInventory();
  steveInventory();
  //Carregar Inventario Do King
}


const remOne = 1;
const remFive= 5;

//Função de Confirmação
function confirmRW(){
  
//Local Save Itens Count
  //Confirm Const
  const reduceVip     = vipItem.getAttribute("value") - remOne;
  const reduceRewards = rewardsItem.getAttribute("value") - remOne;
  const reduceflorais = floraisItem.getAttribute("value") - remOne;
  const reduceGift = giftItem.getAttribute("value") - remOne;
  //Redefinir Algumas Coisas
  mastButton.style.display = "";
  mastButton.style.filter = "";
  rewardTxt.innerHTML = "";
  //Descontar Vip
  if(dataItemID.value == "2"){
    vipItem.setAttribute("value", reduceVip);
    localStorage.setItem(nickID.innerHTML+vipID , vipItem.getAttribute("value"));
    dataItemCount.value = vipItem.getAttribute("value");//
    dataItemPay.value = remOne;
  }
  //Descontar Rewards
  if(dataItemID.value == "4"){
    rewardsItem.setAttribute("value", reduceRewards);
    localStorage.setItem(nickID.innerHTML+rewardsID, rewardsItem.getAttribute("value"));//
    dataItemCount.value = rewardsItem.getAttribute("value");//
    dataItemPay.value = remOne;
  }
  //Descontar GiftSub
  if(dataItemID.value == "3"){
    giftItem.setAttribute("value", reduceGift);
    localStorage.setItem(nickID.innerHTML+giftID, giftItem.getAttribute("value"));
    dataItemCount.value = giftItem.getAttribute("value");//
    dataItemPay.value = remOne;
  }
  //Descontar Florais
  if(dataItemID.value == "1"){
    floraisItem.setAttribute("value", reduceflorais);
    localStorage.setItem(nickID.innerHTML+floraisID, floraisItem.getAttribute("value"));
    dataItemCount.value = floraisItem.getAttribute("value");//
    dataItemPay.value = remOne;
  }
  //Design da Janela
  centRw.style.display = "none";
  
  //verificar Disponibilidade
  emptyItem();
  itemClaimeble();//
  solicitarReward();
}

 //Sacrificar Tudo mais//
function sacrifice(){
  //constante de ação
  const killRewards = rewardsItem.getAttribute("value") - remFive;
  //Pequenas Modificações ao sair
  mastButton.style.display = "";
  rewardTxt.innerHTML = "";
  
  //Descontar Reward
  if(dataItemID.value == "4"){
    if(rewardsItem.getAttribute("value") > 4){
      rewardsItem.setAttribute("value", killRewards);
      localStorage.setItem("kingoRwValue", rewardsItem.getAttribute("value"));
      dataItemCount.value = rewardsItem.getAttribute("value");//
      centRw.style.display = "none";
      dataItemPay.value = 5;
      solicitarReward();
    }else{
      centRw.style.display = "none";
      errorScreen.style.display = "flex";
      errorBox.style.opacity    = "1";
      //Mensagem De Erro//
      const h1Error = document.createElement("H1");
      h1Error.innerHTML = "NÃO TEM COMO";
      const h2Error = document.createElement("H2");
      h2Error.innerHTML = "Acho Que Você não tem Reward Channel Back o Suficiente para isso :C.";
      const btnError =document.createElement("BUTTON");
      btnError.innerHTML = "OK";
      btnError.setAttribute("onclick", "closeError()");
      errorBox.append(h1Error, h2Error, btnError);
    }
  }
  emptyItem();
}

//Função de cancelamento//
function cancelRW(){
  centRw.style.display = "none"; //Cancel Reward Action
  rewardTxt.innerHTML = "";
  mastButton.style.display = "";
  mastButton.style.filter = "";
}


//Constantes de Funções de autorização
const botaoConfirm = document.getElementById("rwClaim");

//Função de Verificação de Disponibilidade
function itemClaimeble(){
  if(dataItemCount.value < 1){
    botaoConfirm.removeAttribute("onClick");
    botaoConfirm.style.backgroundColor = "#353";
    botaoConfirm.style.color = "#555";
  }else{
    botaoConfirm.setAttribute("onClick", "confirmRW()")
    botaoConfirm.style.backgroundColor = "";
    botaoConfirm.style.color = "";
  }
  if(dataItemID.value == rewardsID){
    if(dataItemCount.value < 5){
      mastButton.style.filter = "saturate(0%)";
    }else{
      mastButton.style.filter = "";
    }
  }
}

//Caso Não atenda ou Atenda as Condições ao sacrificar//
function closeError(){
  errorBox.style.opacity    = "0";
  setTimeout(function(){
    errorScreen.style.display = "none";
    errorBox.innerHTML = "";
  },900)//
}

//Caso Não Possua Mais Stacks desse Item
function emptyItem(){
  const desactiveColors = "filter:saturate(0%) brightness(50%) !important;";
  if(rewardsItem.getAttribute("value") < 1){
    rewardsItem.setAttribute("style", desactiveColors);
  }else{
    rewardsItem.removeAttribute("style");//
  }
  if(vipItem.getAttribute("value") < 1){
    vipItem.setAttribute("style", desactiveColors);
  }else{
    vipItem.removeAttribute("style");//
  }
}

//Verificador
function authVerify(){
  if(nickID.innerHTML == userNick.innerHTML){
    dataVerify.value = ":white_check_mark: " + nickID.innerHTML;
  }else{
    dataVerify.value = ":x:"+nickID.innerHTML;
  }
  // else if(userID.value == stevenUni){
   // dataVerify.value = ":white_check_mark: " + nickID.innerHTML;
  //}
  
}

//Refletir ao Especificar
function instantFill(){
  const fieldUpdate = document.getElementById("extreField");
  inputMess.setAttribute("value", fieldUpdate.value);
}

//Função De Postagem
function solicitarReward(){
  //Relogio
  var data = new Date(),
      time = data.toLocaleTimeString();
  //Update
  dataExtra.value = inputMess.getAttribute("value");
    //Comunicação com O Serve Do Discord
  const request = new XMLHttpRequest(); //Contato com servidor
  request.open("POST", webLink); //Função Post E Qual Servidor
  request.setRequestHeader('Content-type', 'application/json'); //Não sei bem

  //Formato Da Mensagem do Discord
  const params = {
    username: botName,     //Nick do Bot Opcional
    avatar_url: botAvatar,   //Opcional Avatar do Bot
    //content:" Testa", //Mensagem Comum Discord que o Bot vai mandar (Opcional)
    "embeds": [       //Mensagem que o bot vai mandar em Embed
    {
      "author": {
        "name": dataName.value,
        "url": dataBossLink.value,
        "icon_url": dataUserAvatar.value
      },
      "title": "**__" + dataNick.value + "__**" + " *Resgatou Item* " + "**__"+dataItem.value+"__**",
      //"url": "https://google.com/",
      "description": "",
      "color": 15105570,
      "fields": [
        {
          "name": " **"+dataItem.value +"** " + dataItemPay.value + "x",
          "value": "**"+dataName.value+"**" + " *Resgatou:* " + "**" + dataItemPay.value+ " " +dataItem.value+"**",
          "inline": true
        },
        {
          "name": "**(" +dataItemCount.value+ "x)** *Restantes*",
          "value": "**"+dataVerify.value+"**",
          "inline": true
        },
        {
          "name": "** "+dataExtra.value+" **",
          "value": "*"+time+"*"
        }
      ],
      "thumbnail": {
        "url": dataItemIcon.value
      },
      "footer":
        {
          "text": "Site Do Boss",
          "icon_url": "https://i.imgur.com/pv8rDm5.png",
        },
     // "image": {
     //   "url": "https://i.imgur.com/SefZShA.png" //Embed Image
     //   }
      }
    ],
  }
  request.send(JSON.stringify(params));//Conteudo que vai ser enviado
}
