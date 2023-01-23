import './css/main.sass'
import 'swiper/css'
import Swiper from 'swiper'

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="swiper-wrapper slider__wrapper">
  <div class="swiper-slide slider__item">
    <div class="slider__layer" data-swiper-parallax="" style="background-image: url(src/img/screen-1/layer-back.jpg)"></div>
    <div class="slider__layer" data-swiper-parallax="" style="background-image: url(src/img/screen-1/layer-middle.png)"></div>
    <div class="slider__layer" data-swiper-parallax="14%" style="background-image: url(src/img/screen-1/layer-front.png)"></div>
  </div>

  <div class="swiper-slide slider__item">
    <div class="slider__layer" style="background-image: url(src/img/screen-2/layer-back.jpg)"></div>
    <div class="slider__layer" style="background-image: url(src/img/screen-2/layer-gera.png)"></div>
    <div class="slider__layer" style="background-image: url(src/img/screen-2/layer-yen.png)"></div>
    <div class="slider__layer" style="background-image: url(src/img/screen-2/layer-front.png)"></div>
  </div>

  <div class="swiper-slide slider__item">
    <div class="slider__layer" style="background-image: url(src/img/screen-3/layer-back.jpg)"></div>
    <div class="slider__layer" style="background-image: url(src/img/screen-3/layer-middle.png)"></div>
    <div class="slider__layer" style="background-image: url(src/img/screen-3/layer-ciri.png)"></div>
    <div class="slider__layer" style="background-image: url(src/img/screen-3/layer-front.png)"></div>
  </div>
</div>
`
const swiper = new Swiper('.slider', {
  speed: 2400,
  mousewheel: true,
  spaceBetween: 18,
  parallax: true
})

console.log('hfh')


