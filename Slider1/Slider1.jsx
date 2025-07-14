import { Swiper, SwiperSlide } from "swiper/react";
import slider1Css from "./slider1.module.css";

// CSS для слайдера (собственные)
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/zoom";
// CSS для слайдера (собственные)

// дополнительные модули
import { Autoplay} from "swiper/modules";
// дополнительные модули

const text =
  "Только практический опыт студийных проектов и важные новости рынка ";
const Slider1 = () => {

  // !Переменная itemsArray объявлена внутри компоненты, но вне JSX. Это позволяет использовать ее в map.
//   const itemsArray = [...Array(5)];
  const itemsArray = [...Array(1000)];

  /* [...Array(10)] — это способ создания массива с 10 элементами. Давайте разберем это подробнее:

    Array(10): Создает массив, содержащий 10 пустых элементов. Этот массив выглядит как [empty × 10].

    [...] (spread оператор): Применяется для "разворачивания" массива.
    
    В результате получится массив с 10 undefined значениями: 
    [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined].



Вот как это может выглядеть в коде:
javascript

const itemsArray = [...Array(10)]; // Создает массив из 10 undefined
console.log(itemsArray); // [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
 */

  // основной контейнер слайдера
  return (
    <div className={slider1Css.container__slider}>
      {/* лента слайдера в которой находятся слайды */}
      <div className={slider1Css.band__slider1}>
        <Swiper
          className={slider1Css.slider1}
          // создаем массив из импортированных дополнительных модулей (из React)
          modules={[Autoplay]}
          // создаем массив из импортированных дополнительных модулей (из React)

          // настройки слайдера
          spaceBetween={0}
          //  расстояние между слайдами
          slidesPerView={3}
          // slidesPerView="auto"
          // количество слайдов показа за раз (не slidesToShow, а slidesPerView)
          //  slidesPerGroup={1}
          // ! ОЧЕНЬ ВАЖНО = в React для отображения количества прокручиваемых слайдов, используетсся не slidesToScroll, а slidesPerGroup
          autoplay={{
            delay: 0,
            // waitForTransition: false, // Для плавности
            // disableOnInteraction: false,
            // Должно быть false для непрерывной работы

            // Это свойство в настройках autoplay отвечает за поведение слайдера при взаимодействии пользователя (например, при прокрутке или клике на слайды).
            //     disableOnInteraction: false: Автопрокрутка продолжится даже после взаимодействия пользователя с слайдером. Если вы установите его в true, автопрокрутка остановится, когда пользователь взаимодействует со слайдером.
            // pauseOnMouseEnter: false,
            // stopOnLastSlide: false,
            // waitForTransition: false,
            // reverseDirection: false,
          }}
          speed={10000}
          // скорость прокрутки слайдов
          loop={true}
          loopedSlides={10} // Увеличено количество клонированных слайдов
          // freeMode={{
          //   enabled: true,
          //   momentum: false, // Отключаем инерцию для равномерности

          // }}
          /* ***********************************************/
          // resistance={false}
          // resistanceRatio={0}
          // watchSlidesProgress={true}
          /* ***********************************************/
          // loopPreventsSliding={false} // Разрешаем переключение во время анимации
          /* ***********************************************/
          // адаптив слайдера
          breakpoints={{
            1439: {
              slidesPerView: 3,
              // 1439 и более = будет 4 слайда
              // !ОЧЕНЬ ВАЖНО = при адаптиве, когда уменьшаем количество слайдов, ОБЯЗАТЕЛЬНО надо в CSS ставить breakpoints для ширины слайда при УКАЗАННОМ количестве слайдов. Иначе между слайдами будет разрыв или они будут заезжать друг на друга
            },

            1023: {
              slidesPerView: 2,
            },
            769: {
              slidesPerView: 2,
            },
            426: {
              slidesPerView: 1,
            },
            376: {
              slidesPerView: 1,
            },
            321: {
              slidesPerView: 1,
            },
          }}
        >
          {/* <div className={slider1Css.wrapper__contentSlide}> */}
          {itemsArray.map((_, index) => (
            <SwiperSlide key={index} className={slider1Css.separate__slide}>
              {text} {index + 1}
            </SwiperSlide>
          ))}
          {/* </div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider1;

// Чтобы подключить Swiper-слайдер в React-проект, следуйте этим шагам:
// 1. Установка Swiper

// Сначала установите Swiper через npm или yarn:
// bash

// npm install swiper

// или
// bash

// yarn add swiper

// 2. Импорт необходимых стилей

// Импортируйте стили Swiper в ваш компонент или в файл стилей:
// javascript

// import 'swiper/swiper-bundle.min.css';

// 3. Создание компонента слайдера

// Создайте компонент для вашего слайдера. Например:
// javascript

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';

// import 'swiper/swiper-bundle.min.css';

// const Slider = () => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination]}
//       navigation
//       pagination={{ clickable: true }}
//       spaceBetween={50}
//       slidesPerView={1}
//     >
//       <SwiperSlide>Слайд 1</SwiperSlide>
//       <SwiperSlide>Слайд 2</SwiperSlide>
//       <SwiperSlide>Слайд 3</SwiperSlide>
//     </Swiper>
//   );
// };

// export default Slider;

// 4. Использование компонента

// Теперь вы можете использовать ваш компонент Slider в любом месте вашего приложения:
// javascript

// import React from 'react';
// import Slider from './Slider'; // путь к вашему компоненту

// const App = () => {
//   return (
//     <div>
//       <h1>Мой Swiper Слайдер</h1>
//       <Slider />
//     </div>
//   );
// };

// export default App;

// 5. Дополнительные настройки

// Вы можете настроить Swiper по своему усмотрению, используя различные параметры, такие как:

//     spaceBetween: расстояние между слайдами.
//     slidesPerView: количество видимых слайдов.
//     loop: бесконечная прокрутка.

// Пример с дополнительными настройками
// javascript

// <Swiper
//   modules={[Navigation, Pagination]}
//   navigation
//   pagination={{ clickable: true }}
//   loop={true}
//   spaceBetween={30}
//   slidesPerView={3}
// >
//   <SwiperSlide>Слайд 1</SwiperSlide>
//   <SwiperSlide>Слайд 2</SwiperSlide>
//   <SwiperSlide>Слайд 3</SwiperSlide>
//   <SwiperSlide>Слайд 4</SwiperSlide>
// </Swiper>
