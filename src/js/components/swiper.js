import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Autoplay]);

const mySlider = document.querySelector('.mySlider');

if (mySlider) {
  new Swiper(mySlider, {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 0,
    loop: false,
    autoHeight: false
  });
}
