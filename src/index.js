const _ = require('lodash')

console.log(1)
function component(){
  const element = document.createElement('div')
  const button = document.createElement('button')
  const br = document.createElement('br')
  element.innerHTML = _.join(['Hello', 'Sean'], ' ')
  button.innerHTML = 'click'
  ;[button, br].forEach(item => {
    element.appendChild(item)
  })
  button.onclick = e => import(/* webpackChunkName: 'print' */ './print').then(module => {
    const print = module.default
    print()
  })
  return element
}

document.body.appendChild(component())


