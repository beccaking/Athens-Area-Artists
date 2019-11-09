$(() => {

if($('.dropdown').hasAttribute('class', 'showing')){
    $('.dropdown').on('click', () => {
      $('.dropdown-content').css('display', 'none')
      $('.dropdown').removeAttribute('class', 'showing')
    })
  } else {
    $('.dropdown').on('click', () => {
      $('.dropdown-content').css('display', 'block')
      $('.dropdown').setAttribute('class', 'showing')
    })
  }
})
