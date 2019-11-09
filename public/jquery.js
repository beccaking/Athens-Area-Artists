$(() => {

let boxShowing = false

$('.dropdown').on('click', () => {
    if(boxShowing === true){
      $('.dropdown-content').css('display', 'none')
      boxShowing = false
    } else {
      $('.dropdown-content').css('display', 'block')
      boxShowing = true
    }
  })
})
