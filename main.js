import './style.css'
import lottie from 'lottie-web'

const animationContainer = document.querySelector('.lottie-container')

lottie.loadAnimation({
  container: animationContainer, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/animations/dhi-alt.json' // the path to the animation json
});