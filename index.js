console.info('test');
function doSomething(){
  console.log('something happened');
}
function addListener() {
  const element = document.querySelector('.btn')
  console.log('element', element);
  element.addEventListener('click', doSomething);
  checkforElement()
  setTimeout(addElement, 6000);
}

function addElement(){
  const btn = document.createElement('button')
  const text = document.createTextNode('dynamic button')
  btn.className = "btn btn2"
  btn.appendChild(text);
  document.body.appendChild(btn);
}
// function fires but dom is not ready;
// addListener()

// only when dom is ready
document.addEventListener('DOMContentLoaded', addListener);

function checkforElement(){
  const elementFound = false;
  const element = document.querySelector('.btn2');
  console.log('checking for element')
  if(element){
    console.log('element found')
    elementFound = true
  }
  
  if(elementFound) return
 setTimeout(checkforElement, 2000)
}
