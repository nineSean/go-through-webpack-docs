import _ from 'lodash'
import './style.css'
import Doge from './doge.jpeg'
import Data from './data.xml'

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Sean'], ' ');
  element.classList.add('hello')

  const myImage = new Image()
  myImage.src = Doge
  element.appendChild(myImage)

  console.log(Data)

  return element;
}

document.body.appendChild(component());
