// import _ from 'lodash'
import {square} from './math.js'
import printMe from './print.js'
import './style.css'

function component() {
  // let element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'Sean'], ' ');

  let element = document.createElement('pre')
  element.innerHTML = [
    'Hello Sean',
    `5 square is equal ${square(5)}`
  ].join('\n\n')

  const btn = document.createElement('button')
  btn.innerHTML = 'click me and see the console'
  btn.onclick = printMe
  element.appendChild(btn)

  return element;
}
let element = component()
document.body.appendChild(element);

if(module.hot){
  module.hot.accept('./print.js', function(){
    console.log('Accepting and updated printMe module')
    printMe()
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
