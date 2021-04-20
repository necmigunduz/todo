import _ from 'lodash';

const container = document.querySelector('.container');

function component() {
    const button = document.createElement('button');
    button.textContent = "Button";
    button.setAttribute('class','m-5')
    container.appendChild(button);
  
    return button;
  }
  
document.body.appendChild(component());