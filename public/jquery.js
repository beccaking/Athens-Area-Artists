$(() => {

  let boxShowing = false

  $('.artistsdropdown').on('click', () => {
    if(boxShowing === true){
      $('.artistscontent').css('display', 'none')
      boxShowing = false
    } else {
      $('.artistscontent').css('display', 'block')
      boxShowing = true
    }
  })

  $('.studiosdropdown').on('click', () => {
    if(boxShowing === true){
      $('.studioscontent').css('display', 'none')
      boxShowing = false
    } else {
      $('.studioscontent').css('display', 'block')
      boxShowing = true
    }
  })

  $('.designsdropdown').on('click', () => {
    if(boxShowing === true){
      $('.designscontent').css('display', 'none')
      boxShowing = false
    } else {
      $('.designscontent').css('display', 'block')
      boxShowing = true
    }
  })

})
