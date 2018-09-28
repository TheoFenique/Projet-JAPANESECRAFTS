let leftButton = document.querySelector('.waterLink')
let rightButton = document.querySelector('.landLink')
let leftTxt = document.querySelector('.txtWater')
let rightTxt = document.querySelector('.txtLand')
let background = document.querySelector('.inspiBg')

leftButton.addEventListener(
  'click',
  function(e){
    e.preventDefault()
    if (leftTxt.classList.contains('activeLeft')==true){
      background.style.left ='-50%'
      leftButton.style.left = '50%'
      rightButton.style.left = '50%'
      leftTxt.classList.remove('activeLeft')
    }
    else{
      background.style.left = '0%'
      leftButton.style.left = '100%'
      rightButton.style.left = '100%'
      leftTxt.classList.add('activeLeft')
    }

  },
  false
)

rightButton.addEventListener(
  'click',
  function(e){
    e.preventDefault()
    if (rightTxt.classList.contains('activeRight')==true){
      background.style.left ='-50%'
      leftButton.style.left = '50%'
      rightButton.style.left = '50%'
      rightTxt.classList.remove('activeRight')
    }
    else{
      background.style.left = '-100%'
      leftButton.style.left = '0%'
      rightButton.style.left = '0%'
      rightTxt.classList.add('activeRight')
    }

  },
  false
)
