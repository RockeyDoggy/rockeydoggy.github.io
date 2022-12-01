const titles    = / *\#[^#]*\)*/;
const subTitles = /##[^]*/;

const fontSel = document.querySelectorAll('.defFont');

document.addEventListener('keyup', function(e){
  event.preventDefault();
  
  if (e.ctrlKey) {
      e.preventDefault();
  }
  if(e.ctrlKey && e.key === 's' && e.target.tagName === 'DIV' ||e.ctrlKey && e.key === 's' && e.target.tagName === 'INPUT'){
    e.preventDefault();
    saveAllFile();
  }
  if(e.ctrlKey && e.keycode == 83 && e.target.tagName === 'DIV' || e.ctrlKey && e.keycode == 83 && e.target.tagName === 'INPUT'){
    e.preventDefault();
  }
});

const loggedHas = localStorage.getItem('Usuario');
const Logged    = localStorage.getItem('TryLoggin');
console.log(Logged);
//Load HaS
User.value = loggedHas;
insertName.value = loggedHas;
UserInTitle.innerHTML = loggedHas;
quem.value            = loggedHas;
LogInputReact();
PageIndex = localStorage.getItem('Ultima_Pagina');

//Coletar Informações
const bookAuthor      = document.createElement('p'); bookAuthor.innerHTML     = loggedHas;
const bookFileName    = document.createElement('p'); bookFileName.innerHTML   = '';
const bookPagesPatch  = document.createElement('p'); bookPagesPatch.innerHTML = '';
const bookPages       = document.createElement('p'); bookPages.innerHTML      = '';
const booksHaveCount  = document.createElement('p'); booksHaveCount.innerHTML = 0;

//Debugg de Criação
const bookTitle       = document.createElement('input'); bookTitle.value          = '';
const bookCover       = document.createElement('input'); bookCover.value          = '';
const bookDescrição   = document.createElement('input'); bookDescrição.value      = '';
const bookDedicatoria = document.createElement('input'); bookDedicatoria.value    = '';
const bookObservação  = document.createElement('input'); bookObservação.value     = '';
const bookNumero      = document.createElement('input'); bookNumero.value         = '';
const bookPageIndexes = document.createElement('input'); bookPageIndexes.value    = '';
const bookCor         = document.createElement('input'); bookCor.value            = '';
const bookArquivo     = document.createElement('input'); bookArquivo.value        = '';
const pagesIndexMax   = document.createElement('input'); pagesIndexMax.value      = '';
const createNewPage   = document.createElement('button');createNewPage.innerHTML  = 'N';
const bookPageColor   = document.createElement('input'); bookPageColor.value      = '';
const getIndex        = document.createElement('input'); getIndex.value = '';
const pageIndexing    = document.createElement('input'); pageIndexing.value = PageIndex;
createNewPage.setAttribute('id', 'CreatePageButton'); createNewPage.title = 'Criar Nova Pagina...';

createNewPage.addEventListener('click', ()=>{ //Criar Pagina
  const createAs        = Math.floor(parseInt(pagesIndexMax.value));
  const CreatedName     = `Pagina ${createAs}`;
  bookPages.innerHTML   = CreatedName;
  PageFile.innerHTML    = CreatedName;
  PageName.value        = `Pagina ${createAs}`;
  // PageFont.value     = pageNow.fonte;
  editor.innerHTML      = '';
  
  //Criar uma cor aleatoria
  const randomColor  = Math.floor(Math.random()*16777215).toString(16);
  const colorNumberIs= `#${randomColor}`;
  const hexColorCode = colorNumberIs.padEnd(7, "0");
  console.log(hexColorCode);
  
  //File
  const SaveNew  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(bookPages.innerHTML);
  SaveNew.set({
    nome:     PageName.value,
    fonte:    PageFont.value,
    fundo:    BackgroundPage.value,
    historia: '<h2>Nova Pagina...</h2>',
    numero:   createAs,
    pagina:   PageFile.innerHTML,
    cor:      hexColorCode,
  });
  
  // NextButton.removeEventListener('click', goNextPage);
  // PrevButton.removeEventListener('click', goPreviewPage);
  pageIndexing.value = Math.floor(parseInt(PageIndex) + 1);
  setTimeout(()=>{
    nextPageRead();
  }, 500)
});


imageSend.addEventListener('click', () =>{
  const urlimg = document.getElementById('ImgSource');
  const imgLink= prompt("Link Da Imagem");
  document.execCommand("insertImage", "0", imgLink);//
});

FontSize.addEventListener('click', () =>{
  fontList.style.maxHeight = "0vw";
  if(sizeOp.style.maxHeight  == 0 || sizeOp.style.maxHeight == '0vw'){
    sizeOp.style.maxHeight = '25vw';
  }else{
    sizeOp.style.maxHeight = '0vw';
  }
})

sizeOp.addEventListener('click', () =>{
    sizeOp.style.maxHeight = '0vw';
})

TitleBtn.addEventListener('click', ()=>{
  sizeOp.style.maxHeight = '0vw';
  if(fontList.style.maxHeight == 0 || fontList.style.maxHeight == "0vw"){
    fontList.style.maxHeight = "20vw";
  }else{
    fontList.style.maxHeight = "0vw";
  }
})

//Font Formatting
fontList.addEventListener('click', ()=>{
  fontList.style.maxHeight = "0vw";
  const fontNum = event.target;
  console.log(fontNum.value);
  if(fontNum.value == '1'){
     document.documentElement.style.setProperty('--FileFont', 'Helvetica');
  }
  else if(fontNum.value == '2'){
     document.documentElement.style.setProperty('--FileFont', 'Verdana');
  }
  else if(fontNum.value == '3'){
     document.documentElement.style.setProperty('--FileFont', 'Trebuchet MS');
  }
  else if(fontNum.value == '4'){
     document.documentElement.style.setProperty('--FileFont', 'Agency FB');
  }
  else if(fontNum.value == '5'){
     document.documentElement.style.setProperty('--FileFont', 'Calibri');
  }
  else if(fontNum.value == '6'){
     document.documentElement.style.setProperty('--FileFont', 'Time New Roman');
  }
  else if(fontNum.value == '7'){
     document.documentElement.style.setProperty('--FileFont', 'Arial');
  }
});

editor.addEventListener('keyup', ()=>{
  charLength.innerHTML = editor.innerHTML.length;
  if(editor.innerHTML.length > 1000000){
    charLength.style.setProperty("--CharCountColor", "#F00");
    charLength.style.setProperty("--CharCountLight", "0 0 0.6vw #F00");
    charLength.title = 'Apartir de 1.000.000 (1 Milhão), algumas informações podem não ser salvas corretamente';
  }else{
    charLength.style.setProperty("--CharCountColor", "#333");
    charLength.style.setProperty("--CharCountLight", "0 0 1vw #000");
    charLength.title = 'Quantidade de Caracteres no Documento';
  }
})

//Sistema De Cores
if(localStorage.getItem('colorSave') !== null){
  const colorStory = localStorage.getItem('colorSave');
  UsedColor = JSON.parse(colorStory);
}else{
  var UsedColor = [];
}

loadColors();
console.log(UsedColor);

//Formatação de cor
TextColor.addEventListener('focusout', ()=>{
  
  const colorValue = TextColor.value;
  const newColors = {hex: colorValue};
  UsedColor.push(newColors);
  if(UsedColor.length > 17){
    UsedColor.splice(0,1);
  };
  
  localStorage.setItem('colorSave', JSON.stringify(UsedColor));
  loadColors();
  
  document.execCommand('fontSize',false, 2);
  var fontElements = document.getElementsByTagName("font");
  for (var b = 0, len = fontElements.length; b < len; ++b) {
    if(fontElements[b].size == 2) {
      fontElements[b].removeAttribute("size");
      fontElements[b].style.color = colorValue;
    }
  }
  
});

//Editor de Cor
TextColor.addEventListener('input', ()=>{
  document.execCommand('fontSize',false, 2);
  document.execCommand("foreColor", false, TextColor.value);
  var fontElements = document.getElementsByTagName("font");
  for (var b = 0, len = fontElements.length; b < len; ++b) {
    if(fontElements[b].size == 2) {
      fontElements[b].removeAttribute("size");
      fontElements[b].style.color = TextColor.value;
    }
  }
});

TextColor.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--TextHighlightedColor', 'none');
  document.documentElement.style.setProperty('--TextHighlightedBackground', '#0002');
});

SavedColors.addEventListener('click', ()=>{
  if(ListOfColor.style.maxHeight == '9vw'){
    ListOfColor.removeAttribute('style');
    document.documentElement.style.setProperty('--TextHighlightedColor', '#AAA');
    document.documentElement.style.setProperty('--TextHighlightedBackground', '#111');
  }else{
    ListOfColor.style.maxHeight = '9vw';
    ListOfColor.style.border = 'solid 0.25vw #555';
    document.documentElement.style.setProperty('--TextHighlightedColor', 'none');
    document.documentElement.style.setProperty('--TextHighlightedBackground', '#0002');
  }
});

//Carregar Cores ja usadas

function loadColors(){
  const colorReset = document.createElement('button');
  colorReset.title = 'Remover Cores';
  colorReset.addEventListener('click', ()=>{
    document.execCommand("removeFormat", false, 'foreColor');
    TextColor.value = "#10101005";
    UsedColor = [];
    loadColors();
  });
  
  ListOfColor.innerHTML = '';
  ListOfColor.append(colorReset);
  
  UsedColor.slice().reverse().forEach((cores, index)=>{
    const colorBlock = document.createElement('button');
    colorBlock.setAttribute('style', `background:${cores.hex};`);
    colorBlock.title = cores.hex;//teste
    ListOfColor.append(colorBlock);
    colorBlock.addEventListener('click', ()=>{
      document.execCommand("foreColor", false, cores.hex);
      TextColor.value = cores.hex;
    });
  });
  
}

//Remover Historico de cores


//Fechar Abas
editor.addEventListener('click', ()=>{
  ListOfColor.removeAttribute('style');
  fontList.removeAttribute('style');
  sizeOp.removeAttribute('style');
  document.documentElement.style.setProperty('--TextHighlightedColor', '#AAA');
  document.documentElement.style.setProperty('--TextHighlightedBackground', '#111');
  
  //Detect font size
  const selection = window.getSelection();
  const winSize   = window.innerWidth;
  if (selection) { 
    const size = window.getComputedStyle(selection.anchorNode.parentElement, null).getPropertyValue('font-size');
    const aaa = parseInt(size).toPrecision(3) * 100 / winSize;
    const moreAaa = Math.round(aaa * 6);
    FontSize.innerHTML = moreAaa;
  }
});

//Arquivos
saveFile.addEventListener('click', ()=>{
  saveAllFile();
});

        // Login Writter //
//Active log
ItsMe.addEventListener('click', ()=>{
  LogInputReact();
  loginScreen.style.setProperty('--LogView', 'flex');
  setTimeout(()=>{
    loginScreen.style.setProperty('--LogStyle', '1');
  }, 200)
})

//Confirm Log
logIn.addEventListener('click', ()=>{
  closeLogginScreen();
  localStorage.setItem('Usuario', insertName.value);
  localStorage.setItem('TryLoggin', 'Yes');
  booksHave.innerHTML = '';
  whenLoggin();
  loadBooks();
})

resetIn.addEventListener('click', ()=>{
  const loggedHasUpdated = localStorage.getItem('Usuario');
  closeLogginScreen();
  insertName.value = loggedHasUpdated;
});
//Text Functions
insertName.addEventListener('input', ()=>{
  if(insertName.value == ''|| insertName.value == null || insertName.value == undefined){
    logIn.innerHTML = '?';
  }else if(insertName.value == 'Quem Sou Eu?' || insertName.value == 'Quem é Você?' || insertName.value == 'Quem?' || insertName.value == 'Quem Sou?' || insertName.value == 'Perguntou?'){
    logIn.innerHTML = '?';
  }
  else{
    logIn.innerHTML = 'Confirmar';
  }
});

insertName.addEventListener('keyup', ()=>{
  if(event.keyCode == 13){
    closeLogginScreen();
    localStorage.setItem('Usuario', insertName.value);
    localStorage.setItem('TryLoggin', 'Yes');
    booksHave.innerHTML = '';
    whenLoggin();
    loadBooks();
  }
})

//Criar uma Historia
addBook.addEventListener('click', ()=>{
  
})



function LogInputReact(){
  if(insertName.value == ''|| insertName.value == null || insertName.value == undefined){
    logIn.innerHTML = '?';
  }else if(insertName.value == 'Quem Sou Eu?' || insertName.value == 'Quem é Você?' || insertName.value == 'Quem?' || insertName.value == 'Quem Sou?' || insertName.value == 'Perguntou?'){
    logIn.innerHTML = '?';
  }
  else{
    logIn.innerHTML = 'Confirmar';
  }
  
  if(Logged == "Yes"){
    loginScreen.style.setProperty('--LogView', 'none');
    loginScreen.style.setProperty('--LogStyle', '0');
  }else{
    loginScreen.style.setProperty('--LogView', 'flex');
    loginScreen.style.setProperty('--LogStyle', '1');
  }
  
  if(UserInTitle.innerHTML == '' || UserInTitle.innerHTML == ' ' || UserInTitle.innerHTML == null || UserInTitle.innerHTML == undefined){
    addBook.style.setProperty('--Abble', 'none');
    addBook.setAttribute('disabled', 'true');
  }else{
    addBook.style.setProperty('--Abble', 'inline');
    addBook.removeAttribute('disabled');
  }
}

function whenLoggin(){
  UserInTitle.innerHTML = insertName.value;
  bookAuthor.innerHTML  = insertName.value;
  quem.value            = insertName.value;
  
  if(UserInTitle.innerHTML == '' || UserInTitle.innerHTML == ' ' || UserInTitle.innerHTML == null || UserInTitle.innerHTML == undefined){
    addBook.style.setProperty('--Abble', 'none');
    addBook.setAttribute('disabled', 'true');
    ItsMe.removeAttribute('style');
    ItsMe.removeAttribute('style');
  }else{
    addBook.style.setProperty('--Abble', 'inline');
    addBook.removeAttribute('disabled');
    
    
    ItsMe.style.setProperty('--EyeActivityColor', '#7F7');
    ItsMe.style.setProperty('--EyeActivityLight', '0 0 0.8vw #0F0');
    
    fooly.collection(insertName.value).doc('Exemplo').set({
      nome:         'Exemplo',
      descrição:    'Livro De Exemplo',
      dedicatoria:  `Ao ${insertName.value}`,
      capa:         'https://privatissimumexaminatorium.files.wordpress.com/2013/01/modelo-de-capas-livro-pense-direito.jpg',
      observação:   'Esse livro é um exemplo de como são formatado os livros.',
      numero:       Math.floor(parseInt(booksHaveCount.innerHTML)+1),
    });
    setTimeout(()=>{
      fooly.collection(insertName.value).doc('Exemplo').delete().then((livrinhos)=>{
        ItsMe.style.cssText = 'background-color:#F44; box-shadow:0 0 0.8vw #F00;';
        booksHaveCount.innerHTML = Math.floor(booksHaveCount.innerHTML - 1);
      });
      setTimeout(()=>{
        ItsMe.removeAttribute('style');
        booksHave.innerHTML = '';
        loadBooks();
      },400);
    }, 5000);
  }
}

function closeLogginScreen(){
  loginScreen.style.setProperty('--LogStyle', '0');
  setTimeout(()=>{
    loginScreen.style.setProperty('--LogView', 'none');
  }, 300);
}
function loadBooks(){
  const loggedHasVer = localStorage.getItem('Usuario');
  const pageLast  = localStorage.getItem('Ultima_Pagina');
  const lastBook  = localStorage.getItem('Ultimo_Livro');
  booksHave.innerHTML = '';
  listOfMarked.innerHTML = '';
  const tester = fooly.collection(loggedHasVer).orderBy("numero", "desc");
  tester.get().then((livros)=>{
    const forInd = livros.docs;
    livros.docs.forEach((pega, index)=>{
      const BookShelf        = pega.data();
      const covers           = document.createElement('button');
      const removeButton     = document.createElement('span');
      covers.title           = BookShelf.nome;
      covers.innerHTML       = BookShelf.nome;
      covers.setAttribute('style', `background-image:url(${BookShelf.capa}); border-color:${BookShelf.cor}; background-color:${BookShelf.cor};`);
      
      covers.addEventListener('mouseover', ()=>{
        bookTitle.value           =  BookShelf.nome;
        bookCover.value           =  BookShelf.capa;
        bookDescrição.value       =  BookShelf.descrição;
        bookDedicatoria.value     =  BookShelf.dedicatoria;
        bookObservação.value      =  BookShelf.observação;
        bookNumero.value          =  index;
        bookCor.value             =  BookShelf.cor;
        bookArquivo.value         =  BookShelf.arquivo;
        bookAuthor.value          =  loggedHas;
        bookFileName.innerHTML    =  BookShelf.arquivo;
        bookPagesPatch.innerHTML  =  'paginas';
        bookPages.innerHTML       =  'Pagina 0';
        bookCor.setAttribute('style', `background-color:${BookShelf.cor};`);
        //Ler a Ultima Pagina
        if(isNaN(pageLast) || lastBook !== bookTitle.value){
          PageIndex = 0;
        }else{
          PageIndex = pageLast;
        }
        pageIndexing.value = PageIndex;
      });
      covers.addEventListener('click', ()=>{
        window.putInfos = function(){
          bookTitle.value           =  BookShelf.nome;
          bookCover.value           =  BookShelf.capa;
          bookDescrição.value       =  BookShelf.descrição;
          bookDedicatoria.value     =  BookShelf.dedicatoria;
          bookObservação.value      =  BookShelf.observação;
          bookNumero.value          =  index;
          bookCor.value             =  BookShelf.cor;
          bookArquivo.value         =  BookShelf.arquivo;
          bookAuthor.value          =  loggedHas;
          bookFileName.innerHTML    =  BookShelf.arquivo;
          bookPagesPatch.innerHTML  =  'paginas';
          bookPages.innerHTML       =  `Pagina ${pageLast}`;
          PageFile.innerHTML        =  bookPages.innerHTML;
          bookCor.setAttribute('style', `background-color:${BookShelf.cor};`);
          document.documentElement.style.setProperty('--LobbyDisplay', 'none');
          //Ler a Ultima Pagina
          localStorage.setItem('Ultimo_Livro', bookTitle.value);
          if(pageLast == undefined || pageLast == null || pageLast > livros.size){
            PageIndex = 0;
          }else{
            PageIndex = pageLast;
          }
          
          bookGet();
          // loadBookPages();
          loadPages();
        // loadAllPages();
        }
        putInfos();
      });
      booksHave.append(covers);
      if(livros.size == null || livros.size == undefined || isNaN(livros.size)){
        booksHaveCount.innerHTML = 0;
      }else{
        booksHaveCount.innerHTML = livros.size;
      }
  
      //Menu de Paginas Marcadas
      const bookName  = document.createElement('h2');
      const bookSlot  = document.createElement('div');
      bookName.innerHTML = BookShelf.nome;
      listOfMarked.append(bookName, bookSlot);
      
      const markedPages = fooly.collection(loggedHasVer + '_Marcações').where("livro", "==", BookShelf.nome);
      window.loadAllMarkers = function(){ 
        markedPages.get().then((markedIs)=>{
          markedIs.docs.forEach((bookMarks)=>{
            //Puxar os Dados
            const mPage = bookMarks.data();
            
            //Criar Os Dados Para Projetar
            const pageParagraph = document.createElement('p');
            //Projetar os Dados
            if(mPage.livro = BookShelf.nome){
              pageParagraph.innerHTML = mPage.nome;
              pageParagraph.style.setProperty('--MarkedIndex', `'${mPage.numero}'`);
              pageParagraph.style.setProperty('--MarkedColor', mPage.cor)
              bookSlot.append(pageParagraph);
              
              //Funcionalidades do paragrafo
              pageParagraph.addEventListener('mouseover', ()=>{
                markDetails.innerHTML = '';
                //Elementos de Exibição
                const markBookCover = document.createElement('img');
                const markGradient  = document.createElement('div'); markGradient.setAttribute('id', 'gradientMass');
                const markTitle     = document.createElement('h3');
                const markBookTitle = document.createElement('h4');
                const markDescript  = document.createElement('h5');
                const markPageIs    = document.createElement('h6');
                
                //Dados inseridos nos Elementos
                markBookCover.src       = BookShelf.capa;
                markTitle.innerHTML     = mPage.nome;
                markBookTitle.innerHTML = mPage.livro;
                markDescript.innerHTML  = mPage.descrição;
                markPageIs.innerHTML    = mPage.pagina;
                
                markDetails.append(markBookCover, markGradient, markTitle, markBookTitle, markDescript, markPageIs);
              });
              
              pageParagraph.addEventListener('click', ()=>{
                bookTitle.value           =  BookShelf.nome;
                bookCover.value           =  BookShelf.capa;
                bookDescrição.value       =  BookShelf.descrição;
                bookDedicatoria.value     =  BookShelf.dedicatoria;
                bookObservação.value      =  BookShelf.observação;
                bookNumero.value          =  index;
                bookCor.value             =  BookShelf.cor;
                bookArquivo.value         =  BookShelf.arquivo;
                bookAuthor.value          =  loggedHas;
                bookFileName.innerHTML    =  BookShelf.arquivo;
                bookPagesPatch.innerHTML  =  'paginas';
                bookPages.innerHTML       =  `Pagina ${pageLast}`;
                PageFile.innerHTML        =  bookPages.innerHTML;
                bookCor.setAttribute('style', `background-color:${BookShelf.cor};`);
                document.documentElement.style.setProperty('--LobbyDisplay', 'none');
                //Ler a Ultima Pagina
                localStorage.setItem('Ultimo_Livro', bookTitle.value);
                if(pageLast == undefined || pageLast == null || pageLast > livros.size){
                  PageIndex = 0;
                }else{
                  PageIndex = pageLast;
                }
                pageIndexing.value = mPage.numero;
                bookGet();
                // loadBookPages();
                loadPages();
              // loadAllPages();
                
                menuClose();
              });
              
            }
          });
        });
      }
      
      loadAllMarkers();
    });
  });
  if(UserInTitle.innerHTML == '' || UserInTitle.innerHTML == ' ' || UserInTitle.innerHTML == null || UserInTitle.innerHTML == undefined){
  }else{
    ItsMe.style.setProperty('--EyeActivityColor', '#7F7');
    ItsMe.style.setProperty('--EyeActivityLight', '0 0 0.8vw #0F0');
  }
  
}

function closeBookCreat(){
  //--CreateBookDisplay
  //--CreateBookOpacity
  createBookScreen.style.setProperty('--CreateBookOpacity', '0');
  setTimeout(()=>{
    createBookScreen.style.setProperty('--CreateBookDisplay', 'none');
    CoverCreate.value = '';
    NameCreate.value = '';
    CoverCreate.value = '';
    Descript.value = '';
    dedicatoria.value = '';
    observacao.value = '';
    FileName.value = '';
      CoverCreate.value = '';
      CoverPreview.removeAttribute('src');
      CoverPreview.style.setProperty('--CoverPreviewBorder', `none`);
  }, 210);
}

function clearInputs(){
  CoverCreate.value = '';
  NameCreate.value = '';
  CoverCreate.value = '';
  Descript.value = '';
  dedicatoria.value = '';
  observacao.value = '';
  FileName.value = '';
  CoverCreate.value = '';
  CoverPreview.removeAttribute('src');
  CoverPreview.style.setProperty('--CoverPreviewBorder', `none`);
  bookTitle.value        = '';
  bookCover.value        = '';
  bookDescrição.value    = '';
  bookDedicatoria.value  = '';
  bookObservação.value   = '';
  bookNumero.value       = '';
  bookCor.value          = '';
  bookArquivo.value      = '';
}

//Carregar o Livro no Editor
function bookGet(){
  BookTitle.value       = bookTitle.value;
  BookCover.value       = bookCover.value;
  BookDescript.value    = bookDescrição.value;
  BookDedication.value  = bookDedicatoria.value;
  BookObs.value         = bookObservação.value;
  BookPageIndex.value   = 0;
  BookColor.value       = bookCor.value;
  quem.value            = bookAuthor.value;
  BookFile.value        = bookArquivo.value;
  NameOfBook.innerHTML  = bookTitle.value;
  BookColor.style.color = bookCor.value;
}

//Carregar Paginas do Livro

//Snapversion (Ler Paginas)
function loadPages(){
  const loggedHasVer = localStorage.getItem('Usuario');
  const localPages = fooly.collection(loggedHasVer).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML);
  localPages.orderBy("numero", "asc").onSnapshot((onShot)=>{
    PageListLocate.innerHTML = '';
    algoBid = onShot.size;
    
    //Page List
    onShot.forEach((leituraDoc, index)=>{
      // PageListLocate.innerHTML = '';
      const pages = leituraDoc.data();
      // pagesOrdery(pages, index);
      atualBid = algoBid;
      pagesOrdery(pages, index);
      
      if(PageIndex > Math.floor(onShot.size - 1)){
        PageIndex = Math.floor(PageIndex - 1);
      }
      
      if(leituraDoc.type === 'added'){
        PageListLocate.innerHTML = '';
        pagesOrdery(pages, index);
      }
      if(leituraDoc.type === "modified"){
        PageListLocate.innerHTML = '';
        pagesOrdery(pages, index);
      }
    });
   
    
    //Rotornar da ultima pagina
    window.lastPageRead = ()=>{
      const lastIs    = pageIndexing.value;
      console.log('Pagina atual é ', lastIs);
      const LastPage  = onShot.docs[lastIs].data();
      const labelSel  = document.querySelectorAll(`#PageListLocate P`)[lastIs];
      const remLabel  = document.querySelectorAll(`#PageListLocate button#ldp`)[lastIs];
      const markBtn   = document.querySelectorAll(`#marcar`)[lastIs];
      //Valores
      editor.innerHTML              = LastPage.historia;
      console.log(pagesIndexMax.value);
      BackgroundPage.value          = LastPage.fundo;
      PageName.value                = LastPage.nome;
      PageFont.value                = LastPage.fonte;
      PageFile.innerHTML            = LastPage.nome;
      BookMarkColor.value           = LastPage.cor;
      BookPageIndex.value           = lastIs;
      PageIndex                     = lastIs;
      editor.style.backgroundColor  = LastPage.fundo;
      pagesIndexMax.value           = onShot.size;
      BookPageIndex.setAttribute('style', `color:${LastPage.cor};`);
      document.documentElement.style.setProperty('--editorFocusColor', `solid 0.2vw ${LastPage.cor}`);
      document.documentElement.style.setProperty('--editorLightColor', LastPage.cor);
      document.documentElement.style.setProperty('--SelectedPageColor', `linear-gradient(90deg, ${LastPage.cor} 20%, #0000 90%)`);
      labelSel.setAttribute('class', 'sel');
      remLabel.classList.add('visivel');
      markBtn.classList.add('visivel');
      window.historica = LastPage.historia;
      // pageRollDesign();
      document.documentElement.style.setProperty('--FileFont', LastPage.fonte);
    }
    lastPageRead();
    
   //Botão De Proximo
   window.nextPageFunction = ()=>{
     pageRollDesign();
     const nextIs    = Math.floor(parseInt(BookPageIndex.value) + 1);
     const NextPage  = onShot.docs[nextIs].data();
     const labelSel = document.querySelectorAll(`#PageListLocate P`)[nextIs];
     const remLabel = document.querySelectorAll(`#PageListLocate button#ldp`)[nextIs];
     const markBtn = document.querySelectorAll(`#marcar`)[nextIs];
     needSave();
     historica = NextPage.historia;
     //Valores
     editor.innerHTML              = NextPage.historia;
     bookPages.innerHTML           = NextPage.pagina;
     BackgroundPage.value          = NextPage.fundo;
     PageName.value                = NextPage.nome;
     PageFont.value                = NextPage.fonte;
     PageFile.innerHTML            = NextPage.nome;
     BookMarkColor.value           = NextPage.cor;
     BookPageIndex.value           = nextIs;
     PageIndex                     = nextIs;
     editor.style.backgroundColor  = NextPage.fundo;
     BookPageIndex.setAttribute('style', `color:${NextPage.cor};`);
     document.documentElement.style.setProperty('--editorFocusColor', `solid 0.2vw ${NextPage.cor}`);
     document.documentElement.style.setProperty('--editorLightColor', NextPage.cor);
     document.documentElement.style.setProperty('--SelectedPageColor', `linear-gradient(90deg, ${NextPage.cor} 20%, #0000 90%)`);
     labelSel.setAttribute('class', 'sel');
     remLabel.classList.add('visivel');
     markBtn.classList.add('visivel');
     localStorage.setItem('Ultima_Pagina', PageIndex);
     document.documentElement.style.setProperty('--FileFont', NextPage.fonte);
   }
   
   //Botão De Voltar Pagina
   window.prevPageFunction = ()=>{
     pageRollDesign();
     const prevIs    = Math.floor(parseInt(BookPageIndex.value) - 1);
     const PrevPage  = onShot.docs[prevIs].data();
     const labelSel = document.querySelectorAll(`#PageListLocate P`)[prevIs];
     const remLabel = document.querySelectorAll(`#PageListLocate button#ldp`)[prevIs];
     const markBtn = document.querySelectorAll(`#marcar`)[prevIs];
     needSave();
     historica = PrevPage.historia;
     //Valores
     bookPages.innerHTML           = PrevPage.pagina;
     editor.innerHTML              = PrevPage.historia;
     BackgroundPage.value          = PrevPage.fundo;
     PageName.value                = PrevPage.nome;
     PageFont.value                = PrevPage.fonte;
     PageFile.innerHTML            = PrevPage.nome;
     BookMarkColor.value           = PrevPage.cor;
     BookPageIndex.value           = prevIs;
     PageIndex                     = prevIs;
     editor.style.backgroundColor  = PrevPage.fundo;
     BookPageIndex.setAttribute('style', `color:${PrevPage.cor};`);
     document.documentElement.style.setProperty('--editorFocusColor', `solid 0.2vw ${PrevPage.cor}`);
     document.documentElement.style.setProperty('--editorLightColor', PrevPage.cor);
     document.documentElement.style.setProperty('--SelectedPageColor', `linear-gradient(90deg, ${PrevPage.cor} 20%, #0000 90%)`);
     labelSel.setAttribute('class', 'sel');
     remLabel.classList.add('visivel');
     markBtn.classList.add('visivel');
     localStorage.setItem('Ultima_Pagina', PageIndex);
     document.documentElement.style.setProperty('--FileFont', PrevPage.fonte);
   }
   
    
    //Design Update
    updatePageBackground();
  });
  
  //Disponibilidades
  nextPageRead();
  numberUpdate();
}


//Segunda Snapshot versão
function loadAllPages(){
  const loggedHasVer = localStorage.getItem('Usuario');
  fooly.collection(loggedHasVer).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).onSnapshot(snapPages =>{
    const pagesList = snapPages.docs.reduce((pages, doc, index)=>{
      const {nome, cor} = doc.data();
      pages += `<p style="--PageIndex:'${index}'; --PageColor:${cor};">${nome}</p>`, `<button>O</button>`;
      return pages;
    })
    PageListLocate.innerHTML = pagesList;
  })
}


//Carregar Paginas....
//adicionar
function pagesOrdery(pages, index){
  //Criações de Sequencia
  const pagina = document.createElement('p');
  const remover = document.createElement('button');
  const markPage= document.createElement('button'); markPage.setAttribute('id', 'marcar');
  //Editar criações
  pagina.innerHTML = pages.nome;
  pagina.style.setProperty('--PageIndex', `'${pages.numero}'`);
  pagina.style.setProperty('--PageColor', `${pages.cor}`);
  pagina.setAttribute     ('id', 'ldp');
  pagina.classList.add    (`pg${pages.numero}`);
  remover.setAttribute    ('id', 'ldp');
  // remover.setAttribute    ('disabled', 'true');
  remover .innerHTML    = 'O';
  markPage.innerHTML    = 'P';
  //Projetar na Pagina
  if(pages.marker == 'Marcado'){
    pagina.classList.add  (pages.marker);
    markPage.classList.add('MarcadoBtn');
    markPage.style.setProperty('--MarkBookColor', pages.cor);
  }else{
    markPage.classList.remove('MarcadoBtn');
  }
  PageListLocate.append(pagina, remover, markPage);
  
  //Funções das paginas ao Clicar
  pagina.addEventListener('click', ()=>{
    // saveEditor();xD
    needSave();
    historica = pages.historia;
    bookPages.innerHTML   = pages.pagina;
    PageFile.innerHTML    = pages.nome;
    BookPageIndex.value   = pages.numero;
    PageName.value        = pages.nome;
    PageFont.value        = pages.fonte;
    BackgroundPage.value  = pages.fundo;
    editor.innerHTML      = pages.historia;
    bookPageColor.value   = pages.cor;
    BookMarkColor.value   = pages.cor;
    getIndex.value        = pages.numero;
    window.PageIndex      = pages.numero;
    BookPageIndex.setAttribute('style', `color:${pages.cor};`);
    document.documentElement.style.setProperty('--editorFocusColor', `solid 0.2vw ${pages.cor}`);
    document.documentElement.style.setProperty('--editorLightColor', pages.cor);
    pageIndexing.value = PageIndex;
    document.documentElement.style.setProperty('--FileFont', pages.fonte);
    //Design Ao Clicar
    pageRollDesign();
    nextPageRead();
    numberUpdate();
    updatePageBackground();
    
      document.documentElement.style.setProperty('--SelectedPageColor', `linear-gradient(90deg, ${pages.cor} 20%, #0000 90%)`);
      pagina.classList.add  ('sel');
      remover.classList.add ('visivel');
      markPage.classList.add('visivel');
    //Salvar isso
    localStorage.setItem('Ultima_Cor', pages.fundo);
    localStorage.setItem('Ultima_Pagina', PageIndex);
  });
  
  //Funções da Pagina ao colocar o Mouse em cima
  pagina.addEventListener('mouseover', ()=>{
    userInfos.style.setProperty('--HoverColor', pages.cor);
    remover .setAttribute('style', 'opacity:1;');
    markPage.style.opacity = '1';
    markPage.style.textShadow = '0.1vw 0.1vw 0.2vw #000' ;
    // remover.style.backgroundColor = '';
    // remover.style.pointerEvents = 'auto';
  });
  
  //Funções ao Tirar o Mouse de cima
  pagina.addEventListener('mouseout', ()=>{
    remover .removeAttribute('style');
    markPage.style.opacity = '';
    markPage.style.textShadow = '';
  });
  
  //Botão Apagar Pagina
  remover.addEventListener('mouseover', ()=>{
    remover.removeAttribute('disabled');
  });
  remover.addEventListener('click', ()=>{
    window.remIndex = index;
    document.documentElement.style.setProperty('--WarningDisplay', 'flex');
    WarningBox.innerHTML = '';
    const confirmButton = document.createElement('BUTTON'); confirmButton.classList.add('denied');
    const returnButton  = document.createElement('BUTTON'); returnButton .classList.add('blank');
    const Warning       = document.createElement('h2');
    const subWarning    = document.createElement('h3');
    confirmButton.innerHTML = 'Apagar';
    returnButton.innerHTML  = 'Cancelar';
    Warning.innerHTML    = `Você Deseja apagar <b>${pages.nome}</b> Arquivo <b>${pages.pagina}</b>?`;
    subWarning.innerHTML = `Você ira apagar <b>${pages.nome}</b> da historia <b>${bookFileName.innerHTML}</b>, a proxima pagina se tornara a Pagina de Index <b>${index}</b>`; //Em Edição
    WarningBox.append(Warning, subWarning, returnButton, confirmButton);
    
    returnButton.addEventListener('click', ()=>{
      warningClose();
      console.log('Cancel')
    });
    
    confirmButton.addEventListener('click', ()=>{
      fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(pages.pagina).delete().then(()=>{
        warningClose();
      });
      pageIndexing.value = Math.floor(parseInt(pagesIndexMax.value) - 2);
    });
    
  });
  
  //Criar Marcação
  if(pages.marker == 'Marcado'){
    markPage.addEventListener('click', ()=>{
      const marcarPagina  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(pages.pagina);
      const marcarData    = fooly.collection(bookAuthor.innerHTML + '_Marcações').doc(bookFileName.innerHTML + '_' + pages.pagina);
      marcarPagina.update({
        marker: `unMk${pages.numero}`,
      });
      marcarData.delete().then(()=>{
      })
    });
    
  }else{
    markPage.addEventListener('click', ()=>{
      const confirmMark = document.createElement('button'); confirmMark.innerHTML= 'Marcar';   confirmMark.classList.add('confirm');
      const cancelMark  = document.createElement('button'); cancelMark.innerHTML = 'Cancelar'; cancelMark.classList.add('denied');
      openMarkerEditor();
      WarningBox.append(confirmMark, cancelMark);
      confirmMark.addEventListener('click', ()=>{
        const marcarPagina  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(pages.pagina);
        const marcarData    = fooly.collection(bookAuthor.innerHTML + '_Marcações').doc(bookFileName.innerHTML + '_' + pages.pagina);
        marcarPagina.update({
          marker: 'Marcado',
        });
        marcarData.set({
          nome:       markTitle.value,
          arquivo:    bookArquivo.value,
          descrição:  markDesc.value,
          livro:      bookTitle.value,
          pagina:     pages.pagina,
          numero:     pages.numero,
          cor:        pages.cor,
        });
        warningClose();
      });
      cancelMark.addEventListener('click', ()=>{
        warningClose();
      });
    });
  }
  setTimeout(()=>{
    nextPageRead();
  }, 300)
}


//Ao Modificar
function pagesListModify(pages, index){
  const labelSel = document.querySelectorAll(`#PageListLocate P`)[PageIndex];
  console.log(labelSel);
  labelSel.innerHTML    = pages.nome;
  PageName.value        = pages.nome;
  editor.innerHTML      = pages.historia;
  BackgroundPage.value  = pages.fundo;
  BookPageIndex.setAttribute('style', `color:${pages.cor};`);
  labelSel.style.setProperty('--PageIndex', `'${pages.numero}'`);
  labelSel.addEventListener('click', ()=>{
    PageName.value       = pages.nome;
    editor.innerHTML     = pages.historia;
    BackgroundPage.value = pages.fundo;
    editor.style.backgroundColor = pages.fundo;
  })
}


//Função de Remoção
function removePageList(){
  const labelSel = document.querySelectorAll(`#PageListLocate P`)[remIndex];
  const removSel = document.querySelectorAll(`#PageListLocate button`)[remIndex];
  labelSel.remove();
  removSel.remove();
}

//Remover Historia
function removeHistory(){
  fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).delete().then(()=>{
    document.documentElement.style.setProperty('--LobbyDisplay', 'flex');
    ItsMe.style.cssText = 'background-color:#F44; box-shadow:0 0 0.8vw #F00;';
    booksHaveCount.innerHTML = Math.floor(booksHaveCount.innerHTML - 1);
    setTimeout(()=>{
      ItsMe.removeAttribute('style');
      booksHave.innerHTML = '';
      loadBooks();
    }, 1000);
  });
}

function warningClose(){
  setTimeout(()=>{
    document.documentElement.style.setProperty('--WarningDisplay', 'none');
    WarningBox.innerHTML = '';
  }, 300);
}

function menuClose(){
  setTimeout(()=>{
    document.documentElement.style.setProperty('--PaginaDeMarcacoes', 'none');
    document.documentElement.style.setProperty('--CloseTabsActivated', 'none');
    //--CloseTabsActivated
  }, 400)
}

///Função de Salvar 
function saveAllFile(){
  const who   = document.getElementById('quem');
  const PageSave  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(bookPages.innerHTML);
  const bookSave  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML);
  
  bookSave.update({
    nome:         BookTitle.value,
    capa:         BookCover.value,
    descrição:    BookDescript.value,
    dedicatoria:  BookDedication.value,
    observação:   BookObs.value,
    cor:          BookColor.value,
    numero:       parseInt(bookNumero.value),
    arquivo:      bookFileName.innerHTML,
  }).then(()=>{
    // loadBooks();
  });     
 

  
  PageSave.update({
    nome:     PageName.value,
    fonte:    PageFont.value,
    fundo:    BackgroundPage.value,
    historia: editor.innerHTML,
    numero:   parseInt(BookPageIndex.value),
    pagina:   bookPages.innerHTML,
    cor:      BookMarkColor.value,
  });
  // tester();
  pageIndexing.value = BookPageIndex.value;
  localStorage.setItem('Ultima_Pagina', pageIndexing.value);
}

//Salvar Só o Editor
function saveEditor(){
  const PageSave  = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(bookPages.innerHTML);
  PageSave.update({
    historia: editor.innerHTML,
  });
  
}

//Função de passar e criar pagina
function nextPageRead(){
  if(editor.innerHTML.length > 20){
    // NextButton.removeAttribute('disabled');
    // NextButton.style.setProperty('--Playble', 'auto');
  }
  if(parseInt(BookPageIndex.value) > parseInt(pagesIndexMax.value) - 2){
    NextButton.setAttribute('disabled', 'true');
    NextButton.style.setProperty('--Playble', 'none');
    NextButton.style.display = 'none';
    moreButtons.append(createNewPage);
  }else{
    moreButtons.innerHTML = '';
    NextButton.style.display = '';
    NextButton.removeAttribute('disabled');
    NextButton.style.setProperty('--Playble', 'auto');
  }
  if(parseInt(BookPageIndex.value) > 0){
    PrevButton.removeAttribute('disabled');
    PrevButton.style.setProperty('--Playble', 'auto');
  }else{
    PrevButton.setAttribute('disabled', 'true');
    PrevButton.style.setProperty('--Playble', 'none');
  }
}

function previewPageButton(){
  if(BookPageIndex.value > 0){
    PrevButton.removeAttribute('disabled');
    PrevButton.style.setProperty('--Playble', 'auto');
  }else{
    PrevButton.setAttribute('disabled', 'true');
    PrevButton.style.setProperty('--Playble', 'none');
  }
}

function numberUpdate(){
  charLength.innerHTML = editor.innerHTML.length;
}


        
function pageRollDesign(){
  const kkk = document.querySelectorAll('ldp');
  for(var p = 0; p <ldp.length; p++){
    ldp[p].classList.remove('sel');
    ldp[p].classList.remove('visivel');
  }
  const markBtn = document.querySelectorAll('#PageListLocate #marcar');
  for(var l = 0; l <markBtn.length; l++){
    markBtn[l].classList.remove('visivel');
  }
}

//Proxima Pagina
function vaParaProxima(){
  const nextNumb = Math.floor(parseInt(BookPageIndex.value) + 1);
  const pathNumb = `Pagina ${nextNumb}`;
  const searchNext = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(pathNumb);
  searchNext.get().then((leiaIsso)=>{
    const essa = leiaIsso.data();
    editor.innerHTML = essa.historia;
  });
}


//Funções de Design
function updatePageBackground(){
  //if(BackgroundPage.value.search(/#&& a-z|0-9/)){
  //  editor.style.backgroundColor = BackgroundPage.value;
  //}else{
  //  editor.style.backgroundImage = `url(${BackgroundPage.value})`;
  //}
  if(BackgroundPage.value.search(/jpg|jpeg|png/) || BackgroundPage.value.length > 7){
    editor.style.backgroundImage = `url(${BackgroundPage.value})`;
  }
  if(BackgroundPage.value.length < 7){
    editor.style.backgroundColor = BackgroundPage.value;
  }
  else{
    editor.style.backgroundImage = BackgroundPage.value;
  }
}

//Precisa Salvar?
function needSave(){
  if(editor.innerHTML == historica){
    console.log('Não precisa Salvar');
  }else{
    console.log('Teve que salvar');
    saveAllFile();
  }
}

//

const winTitle    = document.createElement('h1');    winTitle.innerHTML = 'Adicionar Marcação (Detalhes)';
const mTitle      = document.createElement('h4');    mTitle  .innerHTML = 'Nome';
const mDesc       = document.createElement('h4');    mDesc   .innerHTML = 'Descrição';
const markTitle   = document.createElement('input'); markTitle.placeholder = 'Nome da Marcação';
const markDesc    = document.createElement('input'); markDesc .placeholder = 'Descrição da Marcação';

function openMarkerEditor(){
  document.documentElement.style.setProperty('--WarningDisplay', 'flex');
  WarningBox.innerHTML = '';
  WarningBox.append(winTitle, mTitle, markTitle, mDesc, markDesc);
}

getMarkeds();

//Funções De Marcações
function getMarkeds(){
  const whosLogged = localStorage.getItem('Usuario');
  const markPath = fooly.collection(whosLogged + '_Marcações');
  markPath.onSnapshot((snapMarks)=>{
    
    snapMarks.forEach((markeds)=>{
      const marker = markeds.data();
      if(markeds.type === 'added'){
        listOfMarked.innerHTML = '';
        const pags = document.createElement('p');
        pags.innerHTML = marker.nome;
      }
    });
  });
}

//Previsualizações enquanto cria
NameCreate.addEventListener('input', ()=>{
  FileName.value          = NameCreate.value.replace(/[^a-zA-Z0-9çéÉáÁíÍúÚóÓãÃõÕñÑ _-]/g, '').replace(/ /g, '_');
  bookFileName.innerHTML  = FileName.value;
  bookTitle.value         = NameCreate.value;
  bookArquivo.value       = FileName.value;
});

FileName.addEventListener('input', ()=>{
  FileName.value = FileName.value.replace(/[^a-zA-Z0-9çéÉáÁíÍúÚóÓãÃõÕñÑ _-]/g, '').replace(/ /g, '_');
  bookFileName.innerHTML = FileName.value;
});

CoverCreate.addEventListener('focusout', ()=>{
  if(CoverCreate.value.search(/.jpg|.jpeg|.png|.gif|.bmp/) !== -1){
    CoverPreview.src  = CoverCreate.value;
    CoverPreview.style.setProperty('--CoverPreviewBorder', `0.43vw solid ${docColor.value}`);
    bookCover.value   = CoverCreate.value;
  }else{
    
    CoverCreate.value = '';
    CoverPreview.removeAttribute('src');
    CoverPreview.style.setProperty('--CoverPreviewBorder', `none`);
  }
});

docColor.addEventListener('input', ()=>{
  CoverPreview.style.setProperty('--CoverBorderColor', docColor.value);
  bookCor.value = docColor.value;
  bookCor.setAttribute('style', `background-color:${docColor.value};`)
});

//Text Mirror
Descript.addEventListener('input', ()=>{
  bookDescrição.value = Descript.value;
});
dedicatoria.addEventListener('input', ()=>{
  bookDedicatoria.value = dedicatoria.value;
});
observacao.addEventListener('input', ()=>{
  bookObservação.value = observacao.value;
});
FileName.addEventListener('input', ()=>{
  bookArquivo.value = FileName.value;
});

//            //Criar Livro//         //
//Abrir Criação
addBook.addEventListener('click', ()=>{
  createBookScreen.style.setProperty('--CreateBookDisplay', 'flex');
  clearInputs();
  bookPagesPatch.innerHTML = 'paginas';
  bookPages.innerHTML      = 'Pagina 0';
  bookNumero.value         =  Math.floor(parseInt(booksHaveCount.innerHTML) + 1);
  setTimeout(()=>{
    createBookScreen.style.setProperty('--CreateBookOpacity', '1');
  }, 210);
})

//Cancelar Criação
cancelBook.addEventListener('click', ()=>{
  closeBookCreat();
})

//Criar Livro
CreateBook.addEventListener('click', ()=>{
  const createRandomColor = Math.floor(Math.random()*16777215).toString(16);
  const randomColor       = `#${createRandomColor}`;
  fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).set({
    nome:        NameCreate.value,
    capa:        CoverCreate.value,
    descrição:   Descript.value,
    dedicatoria: dedicatoria.value,
    observação:  observacao.value,
    numero:      Math.floor(parseInt(booksHaveCount.innerHTML)+1),
    cor:         docColor.value,
    arquivo:     FileName.value,
  });
  fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(bookPages.innerHTML).set({
    nome    :'Pagina 0',
    pagina  :'Pagina 0',
    fonte   :'Helvetica',
    historia:'<h2>Escreva Sua Historia</h2>',
    numero  : 0,
    fundo   :'#FFF',
    cor     :randomColor,
  });
  closeBookCreat();
  loadBooks();
});

//Botão de Voltar ao Lobby
BackToLobby.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--LobbyDisplay', 'flex');
  // NextButton.removeEventListener('click', goNextPage);
  // PrevButton.removeEventListener('click', goPreviewPage);
  PageListLocate.innerHTML='';
  localStorage.setItem('Ultima_Pagina', PageIndex);
  loadBooks();
  
});

//Remover Historia
DeleteHistory.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--WarningDisplay', 'flex');
  WarningBox.innerHTML = '';
  const confirmButton = document.createElement('BUTTON');
  const returnButton  = document.createElement('BUTTON');
  const Warning       = document.createElement('h2');
  const subWarning    = document.createElement('h3');
  confirmButton.innerHTML = 'APAGAR';   confirmButton.classList.add('denied');
  returnButton.innerHTML  = 'CANCELAR'; returnButton.classList.add('blank');
  Warning.innerHTML       = 'Você deseja realmente apagar essa historia?';
  subWarning.innerHTML    = `Essa ação não tem volta ${bookAuthor.innerHTML}.-`;
  returnButton.addEventListener('click', ()=>{
    warningClose();
  });
  confirmButton.addEventListener('click', ()=>{
    removeHistory();
    warningClose();
  })
  WarningBox.append(Warning, subWarning, returnButton, confirmButton);
  
  setTimeout(()=>{
  }, 1000);
});

//Mudar a cor do texto do fundo Instantaneamente
BookColor.addEventListener('input', ()=>{
  BookColor.style.color = BookColor.value;
})

// Mudar Cor Da Pagina Instantaneamente
BackgroundPage.addEventListener('input', ()=>{
  updatePageBackground();
});

//Condições e funções para passar pagina
// NextButton.addEventListener('click', ()=>{
  // if(editor.innerHTML.length > 20){
    // goNextPage();
  // }
  // previewPageButton();
// })

NextButton.addEventListener('click', ()=>{
  // vaParaProxima();
  nextPageFunction();
  nextPageRead();
});

PageListLocate.addEventListener('click', ()=>{
  // const searchNext = fooly.collection(bookAuthor.innerHTML).doc(bookFileName.innerHTML).collection(bookPagesPatch.innerHTML).doc(bookPages.innerHTML);
  // searchNext.get().then((leiaIsso)=>{
    // const essa = leiaIsso.data();
    // editor.innerHTML = essa.historia;
  // });
});

PrevButton.addEventListener('click', ()=>{
  // previewPageButton();
  prevPageFunction();
  nextPageRead();
});

//Cor do marca pagina
BookMarkColor.addEventListener('input', ()=>{
  const listaDePagina = document.querySelectorAll('#PageListLocate p');
  listaDePagina[PageIndex].style.setProperty('--SelectedPageColor', `linear-gradient(90deg, ${BookMarkColor.value} 20%, #0000 90%)`);
  document.documentElement.style.setProperty('--editorFocusColor', `solid 0.2vw ${BookMarkColor.value}`);
  document.documentElement.style.setProperty('--editorLightColor', BookMarkColor.value);
  editor.style.outline = `0.1vw solid ${BookMarkColor.value}`;
  editor.style.boxShadow = `inset 0 0 0.6vw ${BookMarkColor.value}, 0 0 0.6vw ${BookMarkColor.value}`;
  listaDePagina[PageIndex].style.setProperty('--PageColor', BookMarkColor.value);//--PageColor
});
BookMarkColor.addEventListener('focus', ()=>{
  editor.style.outline = `0.1vw solid ${BookMarkColor.value}`;
  editor.style.boxShadow = `inset 0 0 0.6vw ${BookMarkColor.value}, 0 0 0.6vw ${BookMarkColor.value}`;
});
BookMarkColor.addEventListener('focusout', ()=>{
  editor.style.outline = ``;
  editor.style.boxShadow = ``;
});

favPages.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--PaginaDeMarcacoes', 'flex');
  document.documentElement.style.setProperty('--CloseTabsIndex', '34');
  document.documentElement.style.setProperty('--CloseTabsActivated', 'block');
});

closeTabs.addEventListener('click', ()=>{
  menuClose();
});
/////Projetar Debugg//////
debuggView.append(bookAuthor, '>', bookFileName, '>', bookPagesPatch, '>', bookPages, booksHaveCount, bookTitle, bookCover ,bookDescrição, bookDedicatoria, bookObservação, bookNumero, bookCor, bookArquivo, pagesIndexMax, bookPageColor, pageIndexing);
loadBooks();


//Bloco de formatação
ItalicBtn.addEventListener('click', ()=>{
  document.execCommand('italic', false, null);
//  var fontElements = document.getElementsByTagName("i");
//  for (var o = 0, len = fontElements.length; o < len; ++o) {
//    if (fontElements[o].fontStyle !== "italic") {
//        fontElements[o].removeAttribute("size");
//        fontElements[o].style.fontStyle = "italic";
//    }
//  }
});

fontList.addEventListener('click', (e)=>{
});

function fontIs(e){
  const selected = event.target;
  document.execCommand('fontName', false, selected.innerHTML);
  var fontElements = document.getElementsByTagName("font");
  for (var o = 0, len = fontElements.length; o < len; ++o) {
    if (fontElements[o].face == selected.innerHTML) {
      fontElements[o].removeAttribute("face");
      fontElements[o].style.fontFamily = selected.innerHTML;
    }
  }
}

//Tamanho da fonte
function fontSizeIs(){
  const selected = event.target;
  const sizeIs   = parseInt(selected.innerHTML) / 6;
  if(isNaN(selected.innerHTML)){
  }else{
    FontSize.innerHTML = selected.innerHTML;
    document.execCommand('fontSize',false, 1);
    var fontElements = document.getElementsByTagName("font");
    for (var b = 0, len = fontElements.length; b < len; ++b) {
      if(fontElements[b].size == 1) {
        fontElements[b].removeAttribute("size");
        fontElements[b].style.fontSize = sizeIs.toPrecision(3) + 'vw';
      }
    }
  }
}

function customSizeIs(){
  const fontSizeCustom = prompt("Tamanho da Fonte");
  event.target.innerHTML = parseInt(fontSizeCustom.replace(/\D/g, ""));
  fontSizeIs();
}

function resetFontSize(){
  document.execCommand('fontSize',false, 1);
  var fontElements = document.getElementsByTagName("font");
  FontSize.innerHTML = 'j';
  for (var b = 0, len = fontElements.length; b < len; ++b) {
    if(fontElements[b].size == 1) {
      fontElements[b].removeAttribute("size");
      fontElements[b].style.fontSize = '';
    }
  }
}

ResetForm.addEventListener('click', ()=>{
  document.execCommand('removeFormat', false);
  document.execCommand('formatBlock', false, 'p');
})

FontSize.addEventListener('focusout', ()=>{
  
});
turnOnFonts();
//Lista de fontes
function turnOnFonts(){
  const fontList = document.querySelectorAll('.fontFamily');
  fontList.forEach((fonte)=>{
    fonte.setAttribute('style', `font-family:${fonte.innerHTML};`);
    fonte.setAttribute('title', fonte.innerHTML);
  })
}

fontesHave();

function fontesHave(){
  const fonteIs = [
    'Arial',
    'Impact',
    'Courier New',
    'Georgia',
    'Palatino', 
    'Symbol',
    'Comic Sans MS',
    'Times New Roman',
    'Trebuchet MS',
    'Verdana',
    'Webdings',
    'Dark Magic',
    'Modern M',
    'Scriptorium',
    'hkh glyphs short',
    'Steam Punk Flyer',
    'The Old Forest',
    'Helvetica'
  ];
  
  fonteIs.forEach((fontes)=>{
    const opções = document.createElement('option');
    opções.innerHTML = fontes;
    opções.value     = fontes;
    opções.setAttribute('style', `font-family:${fontes};`);
    PageFont.append(opções);
  });
}
PageFont.addEventListener('change', ()=>{
  document.documentElement.style.setProperty('--FileFont', PageFont.value);
});


editor.addEventListener('click', ()=>{
});
