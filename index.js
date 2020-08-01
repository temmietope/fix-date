let card = document.querySelector('.card__animated')
let modal = document.querySelector('.modal')

modal.style.position = 'fixed'
let paragraph = document.querySelector('.card__description__paragraph')
let cardButton = document.querySelector('card__button_text')

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


  modal.style.position = 'fixed'
  modal.style.top = position.top + 'px'
  modal.style.left = position.left + 'px'
  modal.style.height = size.height
  modal.style.width = size.width

  setTimeout(function () {
    let classes = target.classList.value.split(' ')
    for (const cs of classes) {
      modal.classList.add(cs)
    }

    modal.classList.add('growing')
    modal.style.height = '100%'
    modal.style.width = '100%'
    modal.style.top = '0'
    modal.style.left = '0'
    modal.style.right = '0'
    // modal.style.margin = '0'
    modal.style.background = 'rgba(255, 255, 255, 0.8)'
  }, 1)

  setTimeout(function () {
    modal.classList.remove('growing')
    modal.classList.add('full-screen')
  }, 500)
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
  }, 500)
}

card.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)
