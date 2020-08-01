// const cardButton = document.querySelector('.card__checkfood')
// const modal = document.querySelector('.modal')
// const close = document.querySelectorAll(".close-modal")
// const modalBody = document.querySelector('.modal__body')
// const lightBox = document.querySelector(".lightbox")
// const body = document.body

// const openModal = () => {
//   modal.style.display = 'block'
//   body.classList.add('no-scroll')
// }
// const closeModal = () => {
//   if (modal.style.display === 'block') {
//     modal.style.display = 'none'
//     body.classList.remove('no-scroll')
//   }
// }
// cardButton.addEventListener('click', openModal)

// modalBody.addEventListener('click', (e) => {
//   e.stopPropagation()
// })
// lightBox.addEventListener('click', (e) => {
//   e.stopPropagation()
// })

// close.forEach(item => {
//   item.addEventListener('click', closeModal)
// })










//Setup
let fsm = document.createElement('div')
fsm.setAttribute('id', 'fsm_actual')
document.body.appendChild(fsm)
let card = document.querySelector('.card__animated')
let fsmActual = document.querySelector('#fsm_actual')
fsmActual.style.position = 'absolute'
let paragraph = document.querySelector(".card__description__paragraph")
let cardButton = document.querySelector("card__button_text")

let position = {}
let size = {}

//modal action stuffs
let openModal = function (event) {
  let target = event.currentTarget
  position = target.getBoundingClientRect()
  size = {
    width: window.getComputedStyle(target).width,
    height: window.getComputedStyle(target).height,
  }

  fsmActual.style.position = 'absolute'
  fsmActual.style.top = position.top + 'px'
  fsmActual.style.left = position.left + 'px'
  fsmActual.style.height = size.height
  fsmActual.style.width = size.width
  fsmActual.style.margin = target.style.margin

  


  setTimeout(function () {
    fsmActual.innerHTML = target.innerHTML
    let classes = target.classList.value.split(' ')
    for (let i = 0; i < classes.length; i++) {
      fsmActual.classList.add(classes[i])
    }
    fsmActual.classList.add('growing')
    fsmActual.style.height = '100vh'
    fsmActual.style.width = '100vw'
    fsmActual.style.top = '0'
    fsmActual.style.left = '0'
    fsmActual.style.margin = '0'
  fsmActual.style.background= "rgba(255, 255, 255, 0.8)"
  }, 1)

  setTimeout(function () {
    fsmActual.classList.remove('growing')
    fsmActual.classList.add('full-screen')
  }, 1000)
}

let closeModal = function (event) {
  let target = event.currentTarget

  target.style.height = size.height
  target.style.width = size.width
  target.style.top = position.top + 'px'
  target.style.left = position.left + 'px'
  target.style.margin = '0'
  target.classList.remove('full-screen')
  target.classList.add('shrinking')

  setTimeout(function () {
    while (target.firstChild) target.removeChild(target.firstChild)
    let classList = target.classList
    while (classList.length > 0) {
      classList.remove(classList.item(0))
    }
    target.style = ''
  }, 1000)
}

card.addEventListener('click', openModal)
fsmActual.addEventListener('click', closeModal)
