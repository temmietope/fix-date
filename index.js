const cardButton = document.querySelector('.card__checkfood')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
  modal.style.display = 'block'
}
const closeModal = () => {
  modal.style.display = 'none'
}
cardButton.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)
