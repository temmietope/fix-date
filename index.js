const cardButton = document.querySelector('.card__checkfood')
const card = document.querySelector('.card--orange')
const modal = document.querySelector('.modal')
const close = document.querySelectorAll('.close-modal')
const modalBody = document.querySelector('.modal__body')
const lightBox = document.querySelector('.lightbox')
const body = document.body

const openModal = (e) => {
  // modal.style.display = 'block'

  let scrollTop = window.scrollTo({ top: 0, behavior: 'smooth' })
  let topOffset = card.offsetTop + outerHeight / 2 - scrollTop
  console.log(card.offsetTop, outerHeight)
  let leftOffset = card.offsetLeft + outerWidth / 2
  e.preventDefault()
  modal.style.transformOrigin = `${leftOffset}px ${topOffset}px`
  // modal.css('transform-origin', leftOffset + 'px ' + topOffset + 'px')
  // console.log('transform-origin', leftOffset + 'px ' + topOffset + 'px')
  modal.classList.add('open')
  body.classList.add('no-scroll')
console.log( `${leftOffset}px ${topOffset}px`)

}

// $('.button').on('click',function(event){
//   var scrollTop = $(window).scrollTop(),
//       topOffset = $(this).offset().top + ($(this).outerHeight()/2) - scrollTop,
//       leftOffset = $(this).offset().left + ($(this).outerWidth()/2),
//       $target = $($(this).attr('href'));
//   event.preventDefault;
//   $target.css('transform-origin',leftOffset + 'px ' + topOffset + 'px');
//   $target.addClass('is-open');
// });

const closeModal = () => {
  // if (modal.style.display === 'block') {
  //   modal.style.display = 'none'
  //   body.classList.remove('no-scroll')
  // }
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

window.scrollTo({ top: 0, behavior: 'smooth' })
