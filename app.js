const navigationBar = document.querySelector('.main-navigation')
const navigationList = document.querySelector('.navigation-list')
const navigationLogo = navigationBar.querySelector('.navigation-logo img')
const navigationOpen = document.getElementById('menu-open')
const navigationClose = document.getElementById('menu-close')

window.onscroll = () => {
  if (
    document.body.scrollTop >= 80 ||
    document.documentElement.scrollTop >= 80
  ) {
    navigationBar.classList.add('scrolled')
  } else {
    navigationBar.classList.remove('scrolled')
  }
}

navigationOpen.onclick = () => {
  navigationList.classList.add('open')
}

navigationClose.onclick = () => {
  navigationList.classList.remove('open')
}

new TypeIt('#typing', {
  speed: 100,
  deleteSpeed: 40,
  loop: true,
  loopDelay: 300,
})
  .type('weekly.')
  .pause(900)
  .delete(7)
  .pause(300)
  .type('quality.')
  .pause(900)
  .delete(8)
  .pause(300)
  .type('responsiveness.')
  .pause(1200)
  .delete(15)
  .pause(300)
  .type('security.')
  .pause(900)
  .delete(9)
  .pause(300)
  .go()
