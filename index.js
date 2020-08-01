const cardButton = document.querySelector('.card__checkfood')
const card = document.querySelector('.card--orange')
const modal = document.querySelector('.modal')
const close = document.querySelectorAll('.close-modal')
const modalBody = document.querySelector('.modal__body')
const lightBox = document.querySelector('.lightbox')
const body = document.body

const openModal = () => {
  // modal.style.display = 'block'
  modal.classList.add('open')

  body.classList.add('no-scroll')
  position = card.getBoundingClientRect();
	size = {
		width: window.getComputedStyle(card).width,
		height: window.getComputedStyle(card).height
  }
  console.log(position, size)
}
const closeModal = () => {
  if(modal.classList.contains('open')){
  modal.classList.remove('open')
  body.classList.remove('no-scroll')

  }
  // if (modal.style.display === 'block') {
  //   modal.style.display = 'none'
  //   body.classList.remove('no-scroll')
  // }
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

var rect = card.getBoundingClientRect()
// console.log(rect.top, rect.right, rect.bottom, rect.left);
console.log(rect.left, rect.top)
