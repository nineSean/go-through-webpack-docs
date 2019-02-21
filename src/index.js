import _ from 'lodash'
import './style.css'
import doge from './doge.jpeg'

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Sean'], ' ');
  element.classList.add('hello')

  const myImage = new Image()
  myImage.src = doge
  element.appendChild(myImage)

  return element;
}

document.body.appendChild(component());
