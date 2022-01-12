const usersOnline = document.querySelectorAll(".main__right__user-online__item")
const userHoverInfo = document.querySelectorAll('.main__right__user-online__hover')

usersOnline.forEach(item => {
  item.addEventListener('mouseover', (e)=>{
    userHoverInfo.forEach(hover => {
      if(item.getAttribute('data-id') === hover.getAttribute('data-id')){
        hover.classList.add('active')
      }
    })
  })
})

usersOnline.forEach(item => {
  item.addEventListener('mouseout', (e)=>{
    userHoverInfo.forEach(hover => {
      if(item.getAttribute('data-id') === hover.getAttribute('data-id')){
        hover.classList.remove('active')
      }
    })
  })
})