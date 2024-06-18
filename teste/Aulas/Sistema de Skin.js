//Array Das Skins
let skinList = [
  {
    nome: 'Azuzinho',
    desc: 'Endurece seu design',
    class:'skin1',
    selec: 0,
  },
  {
    nome: 'Padrão',
    desc: 'Design Padrão Chocho',
    class:'Corpo',
    selec: 1,
  }
];

//Extra
  //Janela e Funções da guia de Skins.
skinChange();
function skinChange(){
  //Criações da Guia incluindo Botão abre e fecha
  const colorScreen = document.createElement('div');
  const colorGuide  = document.createElement('div');
  const guideContent= document.createElement('div');
  const guideTitle  = document.createElement('h1');
  const skinsList   = document.createElement('div');
  const skinTabOpen = document.createElement('div');
  
  //Atributos
  colorScreen.classList.add('SchemeChange');
  guideTitle.innerHTML = 'Escolha Um Tema';
  skinTabOpen.innerHTML = '<<';
  skinTabOpen.value = 0;
  
  //Aplicações
  guideContent.append(guideTitle, skinsList)
  colorGuide.append(guideContent, skinTabOpen);
  colorScreen.append(colorGuide);
  document.body.append(colorScreen);
  
  //Funções Estravagantes | forEach para projetar todas as Sking
  playThemes();
  function playThemes(){
    skinsList.innerHTML = '';
    skinList.forEach((theme)=>{
      //Creations
      const themeBox  = document.createElement('div');
      const themeName = document.createElement('p');
      
      //Attributes
      themeName.innerHTML = theme.nome;
      
      themeBox.append(themeName)
      skinsList.append(themeBox);
      
      //Conditions
      (theme.selec >= 1) ? (themeBox.classList.add('checked'),
        corpo.removeAttribute('class'),
        corpo.classList.add(theme.class)) : '';
        //Um if que modifica a id do corpo do Formulario.
      
      //Functions
      
      //Triggers
      themeBox.addEventListener('click', ()=>{
        resetAllStatus();
        theme.selec = 1;
        playThemes();
      });
      console.log(corpo.classList);
    });
  }
  
  //Ativadores
    //Ações que acontecem ao clicar no botão de abrir a tab de Temas
  skinTabOpen.addEventListener('click', ()=>{
    if(skinTabOpen.value === 0){
      colorGuide.style.right = '0vw';
      skinTabOpen.value = 1;
      skinTabOpen.innerHTML = '>>';
      colorScreen.style.backdropFilter = 'blur(4px) contrast(120%) brightness(50%)';
      colorScreen.style.backgroundColor = '#0008';
    }else{
      colorGuide.style.right = ''; 
      skinTabOpen.value = 0;
      skinTabOpen.innerHTML = '<<';
      colorScreen.style.backdropFilter = '';
      colorScreen.style.backgroundColor = '';
    }
  });
}
  
//Função que reseta os Status
function resetAllStatus(){
  skinList.forEach((skinsStatus)=>{
    skinsStatus.selec = 0;
  });
}

//As Arrays recebem uma chave com valor de Status, 
//essas chaves é quem decide qual class o corpo da form vai receber, graças ao if(theme.selec)
//Esse if remove a class padrão do corpo e adiciona uma novo diacordo com a skinList.class
//Afinal se o theme.selec de alguma array for igual a 1 o if vai aplicar a class dessa array com status 1 no corpo.
//Apartir do momento que uma skin é clicada, ela ativa a função resetAllStatus() que reseta todos os skinList.status para 0...
//E logo depois coloca skinList.status clicado para 1, quando a array for atualizada, instantaneamente o if ira mudar para a
//Class do array que tem status = 1.
//Lembrando que é necessario um forEach para fazer multiplas modificações.
//O segundo if é do Verificador da tab, e quem define isso é o skinTabOpen.value, valor 0 para a tab fechada e 1 aberta
//Baseado nesse numero ele aplicara alterações diferentes pra cada linha definida no style.
