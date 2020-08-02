let card = document.querySelector('.card__animated')
let modal = document.querySelector('.modal')

// modal.style.position = 'fixed'
let paragraph = document.querySelector('.card__description__paragraph')
let cardButton = document.querySelector('card__button_text')

let position = {}
let size = {}

let testModal = document.createElement('div')
testModal.setAttribute('id', 'testModal')
document.body.appendChild(testModal)


// testModal.style.position = 'absolute'

//modal action stuffs
let openModal = function (event) {
  let testModalWrapper = document.createElement('div')
testModalWrapper.setAttribute('class', 'testmodal__wrapper')

testModal.appendChild(testModalWrapper)
  let target = event.currentTarget
  console.log(target)
  position = target.getBoundingClientRect()
  size = {
    width: window.getComputedStyle(target).width,
    height: window.getComputedStyle(target).height,
  }

  testModal.style.position = 'fixed'
  testModal.style.top = position.top + 'px'
  testModal.style.left = position.left + 'px'
  testModal.style.height = size.height
  testModal.style.width = size.width
  testModal.style.backgroundColor = 'rgba(255, 255, 255, 0.8);'

  // modal.style.position="absolute"
  // modal.style.height='100%'
  // modal.style.top='0'
  // modal.style.left = '0'

  setTimeout(function () {
    testModalWrapper.innerHTML = `<div class="modal__header">
    <h3>Today's Meals</h3>
    <button class="modal__close close-modal">
      <img src="./assets/images/cancel.png" alt="close" />
    </button>
  </div>`
    let classes = target.classList.value.split(' ')
    for (const cs of classes) {
      testModal.classList.add(cs)
      console.log(cs)
    }

    testModal.classList.add('growing')
    testModal.style.height = '100vh'
    testModal.style.width = '100vw'
    testModal.style.top = '0'
    testModal.style.left = '0'
    testModal.style.right = '0'
    // testModal.style.margin = '0'
    testModal.style.background = 'rgba(255, 255, 255, 0.8)'
  }, 1)

  setTimeout(function () {
    testModal.classList.remove('growing')
    testModal.classList.add('full-screen')
  }, 500)
}

let closeModal = function (event) {
  let target = event.currentTarget
  console.log('hi')
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
testModal.addEventListener('click', closeModal)
