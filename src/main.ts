import { Swiper, SwiperOptions, Parallax, Mousewheel, FreeMode } from 'swiper'
import './css/main.sass'
import 'swiper/css'

const swiperParams: SwiperOptions = {
  modules: [ Parallax, Mousewheel, FreeMode ],
  direction: 'horizontal',
  speed: 2400,
  mousewheel: {
    enabled: true,
    sensitivity: 2.4
  },
  spaceBetween: 0,
  parallax: true,
  freeMode: true
}

new Swiper('.slider', swiperParams)

