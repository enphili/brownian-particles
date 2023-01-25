import { Swiper, SwiperOptions, Parallax, Mousewheel, FreeMode, Keyboard } from 'swiper'
import 'swiper/css'

const swiperParams: SwiperOptions = {
  modules: [ Parallax, Mousewheel, FreeMode, Keyboard ],
  direction: 'horizontal',
  speed: 2400,
  keyboard: {
    enabled: true
  },
  mousewheel: {
    sensitivity: 2.8
  },
  spaceBetween: 0,
  parallax: true,
  freeMode: true
}

new Swiper('.slider', swiperParams)