// function getComponent(){
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(({default: _}) => {
//     let element = document.body.createElement('p')
//     element.innerHTML = _.join(['Hello', 'Sean!'], ' ')
//     return element
//   }).catch(e => 'An error occurred while loading the component')
// }
async function getComponent(){
  const element = document.createElement('p')
  const {default: _} = await import(/* webpackChunkName: loash */ 'lodash')

  element.innerHTML = _join(['Hello', 'Sean'], ' ')
  return element
}

getComponent().then(component => {
  document.body.appendChild(component)
})


