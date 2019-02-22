import _ from 'lodash'
import printMe from './print.js'

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Sean'], ' ');

  const btn = document.createElement('button')
  btn.innerHTML = 'click me and see the console'
  btn.onclick = printMe
  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());
