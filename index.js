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
let modal = document.querySelector('#fsm_actual')
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

  // modal.style.position = 'absolute'
  // modal.style.top = position.top + 'px'
  // modal.style.left = position.left + 'px'
  // modal.style.height = size.height
  // modal.style.width = size.width
  // modal.style.margin = target.style.margin

  modal.style.position = 'fixed'
  modal.style.top = position.top + 'px'
  modal.style.left = position.left + 'px'
  modal.style.height = size.height
  modal.style.width = size.width

  setTimeout(function () {
    {
      /* <div class="modal__header">
<h3>Today's Meals</h3>
<button class="modal__close close-modal">
  <img src="./assets/images/cancel.png" alt="close" />
</button>
</div> */
    }

    let modalHeader = document.createElement('div')
    fsm.setAttribute('id', 'fsm_actual')
    document.body.appendChild(fsm)

    modal.innerHTML = `<div class="modal__header">
    <h3>Today's Meals</h3>
    <button class="modal__close close-modal">
      <img src="./assets/images/cancel.png" alt="close" />
    </button>
    </div>
    <ul class="modal__list">
    <li>
      <img src="./assets/images/akara.png" alt="food-image" />
      <div class="modal__list__food">
        <h6>Akara and Pap</h6>
        <p>Cardohydrate</p>
      </div>
    </li>
    <li>
      <img src="./assets/images/jollof.png" alt="food-image" />
      <div class="modal__list__food">
        <h6>Jollof Rice</h6>
        <p>Protein</p>
      </div>
    </li>
    <li>
      <a href="#img1"
        ><img src="./assets/images/gastonton.png" alt="food-image"
      /></a>
      <div class="modal__list__food">
        <h6>Gastonton</h6>
        <p>Cardohydrate</p>
      </div>
    </li>
    <li>
      <img src="./assets/images/port.png" alt="food-image" />
      <div class="modal__list__food">
        <h6>Port Domenic</h6>
        <p>Cardohydrate</p>
      </div>
    </li>
    <li>
      <img src="./assets/images/carle.png" alt="food-image" />
      <div class="modal__list__food">
        <h6>Carleeville</h6>
        <p>Fat & Oils</p>
      </div>
    </li>
    <li>
      <img src="./assets/images/south.png" alt="food-image" />
      <div class="modal__list__food">
        <h6>South Chesleyton</h6>
        <p>Vegetable</p>
      </div>
    </li>
    <div class="modal__footer">
      <img
        src="./assets/images/home-indicator.png"
        alt="modal-bottom"
      />
    </div>
  </ul>
    `
    let classes = target.classList.value.split(' ')
    for (let i = 0; i < classes.length; i++) {
      modal.classList.add(classes[i])
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
