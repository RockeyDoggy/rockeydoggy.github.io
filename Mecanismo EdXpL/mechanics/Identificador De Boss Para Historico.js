
///          ////        Carregar Inventario Dos Bosses          ////                   ///
function bossStoryRead(){
    console.log(event.target.value)
    if(event.target.value === '0'){
      FoolsStory.reverse().forEach((rev) => {
        const result= rev;
        const leftDialog = document.createElement('SPAN');
        leftDialog.innerHTML = result.player;
        leftDialog.setAttribute('class', 'leftInf');
        
        const centerDialog = document.createElement('SPAN');
        centerDialog.innerHTML = result.action;
        centerDialog.setAttribute('class', 'centerInf');
        
        const rightDialog = document.createElement('SPAN');
        rightDialog.innerHTML = result.victim;
        rightDialog.setAttribute('class', 'rightInfo');
        
        const hLine = document.createElement('P');
        hLine.append(leftDialog, centerDialog, rightDialog);
        storyField.append(hLine);
      })
    }
    else if(event.target.value === '1'){
      JuninhoStory.reverse().forEach((rev) => {
        const result= rev;
        const leftDialog = document.createElement('SPAN');
        leftDialog.innerHTML = result.player;
        leftDialog.setAttribute('class', 'leftInf');
        
        const centerDialog = document.createElement('SPAN');
        centerDialog.innerHTML = result.action;
        centerDialog.setAttribute('class', 'centerInf');
        
        const rightDialog = document.createElement('SPAN');
        rightDialog.innerHTML = result.victim;
        rightDialog.setAttribute('class', 'rightInfo');
        
        const hLine = document.createElement('P');
        hLine.append(leftDialog, centerDialog, rightDialog);
        storyField.append(hLine);
      })
    }
    else if(event.target.value === '2'){
      KingStory.reverse().forEach((rev) => {
        const result= rev;
        const leftDialog = document.createElement('SPAN');
        leftDialog.innerHTML = result.player;
        leftDialog.setAttribute('class', 'leftInf');
        
        const centerDialog = document.createElement('SPAN');
        centerDialog.innerHTML = result.action;
        centerDialog.setAttribute('class', 'centerInf');
        
        const rightDialog = document.createElement('SPAN');
        rightDialog.innerHTML = result.victim;
        rightDialog.setAttribute('class', 'rightInfo');
        
        const hLine = document.createElement('P');
        hLine.append(leftDialog, centerDialog, rightDialog);
        storyField.append(hLine);
      })
    }
    else if(event.target.value === '3'){
      PandasStory.reverse().forEach((rev) => {
        const result= rev;
        const leftDialog = document.createElement('SPAN');
        leftDialog.innerHTML = result.player;
        leftDialog.setAttribute('class', 'leftInf');
        
        const centerDialog = document.createElement('SPAN');
        centerDialog.innerHTML = result.action;
        centerDialog.setAttribute('class', 'centerInf');
        
        const rightDialog = document.createElement('SPAN');
        rightDialog.innerHTML = result.victim;
        rightDialog.setAttribute('class', 'rightInfo');
        
        const hLine = document.createElement('P');
        hLine.append(leftDialog, centerDialog, rightDialog);
        storyField.append(hLine);
      })
    }
    else if(event.target.value === '4'){
      GuiStory.reverse().forEach((rev) => {
        const result= rev;
        const leftDialog = document.createElement('SPAN');
        leftDialog.innerHTML = result.player;
        leftDialog.setAttribute('class', 'leftInf');
        
        const centerDialog = document.createElement('SPAN');
        centerDialog.innerHTML = result.action;
        centerDialog.setAttribute('class', 'centerInf');
        
        const rightDialog = document.createElement('SPAN');
        rightDialog.innerHTML = result.victim;
        rightDialog.setAttribute('class', 'rightInfo');
        
        const hLine = document.createElement('P');
        hLine.append(leftDialog, centerDialog, rightDialog);
        storyField.append(hLine);
      })
    }
    else if(event.target.value === '5'){
      EdneyStory.reverse().forEach((rev) => {
        const result= rev;
        const leftDialog = document.createElement('SPAN');
        leftDialog.innerHTML = result.player;
        leftDialog.setAttribute('class', 'leftInf');
        
        const centerDialog = document.createElement('SPAN');
        centerDialog.innerHTML = result.action;
        centerDialog.setAttribute('class', 'centerInf');
        
        const rightDialog = document.createElement('SPAN');
        rightDialog.innerHTML = result.victim;
        rightDialog.setAttribute('class', 'rightInfo');
        
        const hLine = document.createElement('P');
        hLine.append(leftDialog, centerDialog, rightDialog);
        storyField.append(hLine);
      })
    }
  }