const cardButton = document.querySelector('.card__checkfood')
const card = document.querySelector('.card--orange')
const modal = document.querySelector('.modal')
const close = document.querySelectorAll('.close-modal')
const modalBody = document.querySelector('.modal__body')
const lightBox = document.querySelector('.lightbox')
const body = document.body

const openModal = () => {
  let rect = card.getBoundingClientRect()

  modal.style.transformOrigin = `${rect.left}px ${rect.top}px`
  modal.classList.add('open')
  body.classList.add('no-scroll')
}
const closeModal = () => {
  if (modal.classList.contains('open')) {
    modal.classList.remove('open')
    body.classList.remove('no-scroll')
  }
}
cardButton.addEventListener('click', openModal)

modalBody.addEventListener('click', (e) => {
  e.stopPropagation()
})
lightBox.addEventListener('click', (e) => {
  e.stopPropagation()
})

close.forEach((item) => {
  item.addEventListener('click', closeModal)
})
