import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, {
  slidesPerView: 6,
  spaceBetween: 5,
  mousewheel: true,
  passiveListeners: true
})
