const cardButton = document.querySelector('.card__checkfood')
const modal = document.querySelector('.modal')
const close = document.querySelectorAll(".close-modal")
const modalBody = document.querySelector('.modal__body')
const lightBox = document.querySelector(".lightbox")
const body = document.body

const openModal = () => {
  modal.style.display = 'block'
  body.classList.add('no-scroll')
}
const closeModal = () => {
  if (modal.style.display === 'block') {
    modal.style.display = 'none'
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

close.forEach(item => {
  item.addEventListener('click', closeModal)
})