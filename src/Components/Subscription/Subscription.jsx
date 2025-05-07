// import subCss from "./subscription.module.css";
// import React, { useState, useEffect } from "react";

// const Subscription = () => {
//   // // Используем хук useState для создания состояния isOpen, которое по умолчанию определяем как false. Это состояние будет определять, открыто ли меню.
//   // // 1. useState для модального окна
//   // const [isOpen, setIsOpen] = useState(false);
//   // const [isClosing, setIsClosing] = useState(false);

//   // // создаем ф, которая будет открывать окно формы
//   // const openMenu = () => {
//   //   //  Чтобы открыть окно, надо вызвать ф setIsOpen с параметром (true) Здесь вместо непосредственного вызова setIsOpen(true), мы используем requestAnimationFrame. Это позволяет браузеру выполнить обновления перед изменением состояния, что может помочь сделать анимации более плавными.
//   //   //  * setIsOpen(true);
//   //   requestAnimationFrame(() => {
//   //     setIsOpen(true);
//   //     setIsClosing(false);
//   //   });
//   // };

//   // // Чтобы закрыть окно, надо создать ф, которая будет закрывать окно формы
//   // const closeMenu = () => {
//   //   //   Функция closeMenu закрывает меню.Чтобы закрыть окно, надо вызвать ф setIsOpen с параметром (false)
//   //   setIsOpen(false);
//   //   setIsClosing(true);
//   // };

//   // const handleAnimationEnd = () => {
//   //   if (isClosing) {
//   //     setIsOpen(false);
//   //     setIsClosing(false);
//   //   }
//   // };
//   // // *************************************
//   // // 2. useState для управления checkbox
//   const [remember, setRemember] = useState(false);
//   // создаем ф, которая будет управлять checkbox
//   const changeCheckbox = () => {
//     setRemember((prev) => !prev);
//   };

//   // // *************************************

//   // useEffect(() => {
//   //   if (isOpen) {
//   //     // 1. Сначала блокируем скролл
//   //     document.body.style.overflow = "hidden";

//   //     // 2. Затем вычисляем и применяем компенсацию скроллбара
//   //     requestAnimationFrame(() => {
//   //       const scrollbarWidth =
//   //         window.innerWidth - document.documentElement.clientWidth;
//   //       document.body.style.paddingRight = `${scrollbarWidth}px`;

//   //       // 3. Только потом запускаем анимацию открытия
//   //       setIsOpen(true);
//   //     });
//   //   } else {
//   //     // При закрытии просто убираем стили
//   //     document.body.style.overflow = "";
//   //     document.body.style.paddingRight = "";
//   //   }
//   // }, [isOpen]);
//   // // *************************************

//   // // *************************************

//   // return (
//   //   // обертка для блока с формой (она не явл открывающимся или закрывающимся окном, этот просто обертка для return)
//   //   <div className={subCss.wrapper}>
//   //     {/* ссылка-КНОПКА, которая открывает подписку на рассылку и на нее вешаем onClick, который вызовет ф openMenu */}
//   //     <button
//   //       // className={subCss.subBtn}
//   //       className={`${subCss.subBtn} ${isOpen ? subCss.disappear : ""}`}
//   //       id="sign__up"
//   //       onClick={openMenu}
//   //     >
//   //       Подписаться на рассылку
//   //     </button>

//   //     {(isOpen || isClosing) && (
//   //       <div
//   //         className={`${subCss.modalContainer} ${
//   //           isOpen && !isClosing ? subCss.open : ""
//   //         } ${isClosing ? subCss.closing : ""}`}
//   //         onAnimationEnd={handleAnimationEnd}
//   //       >
//   //         {/*  // весь открывающийся блок с формой */}
//   //         {/* блок subscription в котором находится сама форма */}
//   //         {/* приклеиваем к блоку subscription дополнительный класс open*/}
//   //         <div className={subCss.subscription}>
//   //           {/* кнопка закрытия окна подписки и на нее вешаем onClick, который вызовет ф closeMenu */}
//   //           <button className={subCss.btn__close} onClick={closeMenu}>
//   //             &times;
//   //           </button>
//   //           {/* <span class="close" id="cl">
//   //         &times;
//   //       </span> */}
//   //           <div className={subCss.form} id="form">
//   //             {/* форма */}
//   //             <form action="#" className={subCss.content}>
//   //               {/* <div className={subCss.container}> */}
//   //               <h1>Sign-Up</h1>
//   //               {/* ОБЯЗЯТЕЛЬНО ПАРАГРАФ ДОПОЛНИТЕЛЬНО ОБЕРТЫВАТЬ (см Ламков) */}
//   //               <div className={subCss.wrapperP}>
//   //                 <p>Pleace, fill in this form!</p>
//   //               </div>





//   const [modalState, setModalState] = useState("closed"); // 'closed', 'opening', 'open', 'closing'
//   const [remember, setRemember] = useState(false);

//   const openMenu = () => {
//     setModalState("opening");
//   };

//   const closeMenu = () => {
//     setModalState("closing");
//   };

//   const handleAnimationEnd = () => {
//     if (modalState === "closing") {
//       setModalState("closed");
//     } else if (modalState === "opening") {
//       setModalState("open");
//     }
//   };

//   useEffect(() => {
//     if (modalState === "opening" || modalState === "open") {
//       document.body.style.overflow = "hidden";
//       const scrollbarWidth =
//         window.innerWidth - document.documentElement.clientWidth;
//       document.body.style.paddingRight = `${scrollbarWidth}px`;
//     } else {
//       document.body.style.overflow = "";
//       document.body.style.paddingRight = "";
//     }
//   }, [modalState]);

//   return (
//     <div className={subCss.wrapper}>
//       <button
//         className={`${subCss.subBtn} ${
//           modalState === "open" || modalState === "closing"
//             ? subCss.disappear
//             : ""
//         }`}
//         onClick={openMenu}
//       >
//         Подписаться на рассылку
//       </button>

//       {modalState !== "closed" && (
//         <div
//           className={`${subCss.modalContainer} ${
//             modalState === "open" || modalState === "opening" ? subCss.open : ""
//           } ${modalState === "closing" ? subCss.closing : ""}`}
//           onAnimationEnd={handleAnimationEnd}
//         >
//           <div className={subCss.subscription}>
//             <button className={subCss.btn__close} onClick={closeMenu}>
//               &times;
//             </button>
//             <div className={subCss.form} id="form">
//               <form action="#" className={subCss.content}>
//                 <h1>Sign-Up</h1>
//                 <div className={subCss.wrapperP}>
//                   <p>Please, fill in this form!</p>
//                 </div>

//                 <hr></hr>
//                 <label htmlFor="name">Name</label>
//                 <input
//                   type="text"
//                   className={subCss.name}
//                   id="name"
//                   name="name"
//                   placeholder="Enter your name"
//                   required
//                   autoComplete="name"
//                 ></input>
//                 <label htmlFor="e-mail">E-mail</label>
//                 <input
//                   type="email"
//                   className={subCss.mail}
//                   id="mail"
//                   name="e-mail"
//                   placeholder="Enter e-mail"
//                   required
//                   autoComplete="email"
//                 ></input>
//                 {/* autocomplete — это атрибут HTML, который используется в элементах форм, чтобы указать браузеру, как обрабатывать автозаполнение полей ввода. Он помогает пользователям быстрее заполнять формы, предлагая им ранее введенные значения.
// Зачем нужен autocomplete?

//     Удобство для пользователей: Автозаполнение позволяет пользователям быстро выбирать ранее введенные данные, что экономит время и уменьшает количество ошибок при вводе.

//     Улучшение пользовательского опыта: Легкость заполнения форм делает взаимодействие с веб-сайтом более приятным и менее утомительным.

//     Сохранение данных: Браузеры могут сохранять информацию, такую как адреса электронной почты, пароли и другие данные, чтобы пользователи могли легко повторно вводить их в будущем.

// Как использовать autocomplete?

// Атрибут autocomplete может принимать несколько значений:

//     on: Включает автозаполнение (по умолчанию).
//     off: Отключает автозаполнение.
//     Значения, такие как name, email, username, password и другие, которые указывают браузеру, какое именно значение ожидается.

// Пример использования
// html

// <form>
//   <label for="email">Email:</label>
//   <input type="email" id="email" name="email" autoComplete="email" />

//   <label for="password">Password:</label>
//   <input type="password" id="password" name="password" autoComplete="new-password" />
// </form>
//  */}
//                 <label htmlFor="pass">Password</label>
//                 <input
//                   className={subCss.field}
//                   type="password"
//                   id="pass"
//                   name="pass"
//                   placeholder="Create a password"
//                   autoComplete="new-password"
//                   required
//                 ></input>
//                 <label htmlFor="pass-repeat">Repeat password</label>
//                 <input
//                   className={subCss.field}
//                   type="password"
//                   id="pass-repeat"
//                   name="pass-repeat"
//                   placeholder="Repeat a password"
//                   required
//                 ></input>
//                 {/* Атрибут required в HTML используется для указания, что поле ввода должно быть обязательно заполнено перед отправкой формы. Это позволяет браузеру проверять, заполнены ли все обязательные поля, и предотвращать отправку формы, если они пустые.
// Зачем нужен required?

//     Валидация данных: Гарантирует, что пользователь предоставит необходимую информацию, прежде чем форма будет отправлена. Это помогает избежать ошибок и недостающих данных.

//     Улучшение пользовательского опыта: Пользователь сразу видит, какие поля обязательны, что упрощает процесс заполнения формы.

//     Снижение нагрузки на сервер: Помогает предотвратить отправку неполных форм, что может снизить количество ошибок и лишних запросов к серверу.

// Как использовать required?

// Атрибут required можно добавлять к любым элементам формы, таким как <input>, <select>, и <textarea>.
// Пример использования
// html

// <form>
//   <label for="name">Name:</label>
//   <input type="text" id="name" name="name" required />

//   <label for="email">Email:</label>
//   <input type="email" id="email" name="email" required />

//   <button type="submit">Submit</button>
// </form>

// Как это работает?

//     Если пользователь пытается отправить форму, не заполнив обязательные поля, браузер отобразит сообщение об ошибке и не позволит отправить форму, пока все обязательные поля не будут заполнены.
//     Пользователь увидит визуальные подсказки, такие как рамки или сообщения, указывающие на ошибку.
//  */}
//                 <div className={subCss.check}>
//                   <label htmlFor="remember">
//                     <input
//                       type="checkbox"
//                       name="remember"
//                       id="remember"
//                       checked={remember}
//                       onChange={changeCheckbox}
//                     ></input>
//                     <span>remember me</span>
//                   </label>
//                 </div>
//                 <div className={subCss.agree}>
//                   <p>By clicking Sign Up, you agree to the </p>
//                   <a
//                     className={subCss.link}
//                     href="https://gurucontext.ru/privacy-generator?ysclid=ma2bnr7tva521508702"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Privacy Policy
//                   </a>
//                   {/*
// //                   Чтобы ссылка открывалась в новом окне, нужно добавить атрибут target="_blank". В вашем коде это нужно сделать для элементов <a>. Вот как это выглядит:
// // Для навигационного меню (из вашего кода):
// // jsx
// // Copy

// // <ul className={navCss.list__menu}>
// //   <li>
// //     <a href="#!" target="_blank" rel="noopener noreferrer">о нас</a>
// //   </li>
// //   <li>
// //     <a href="#!" target="_blank" rel="noopener noreferrer">будь в курсе</a>
// //   </li>
//   // {/* ... и так для всех ссылок ... */}
//                   {/* </ul> */}
//                   {/* Важные нюансы:

//     rel="noopener noreferrer" - обязательная добавка к target="_blank" для безопасности:

//         Защищает от уязвимостей типа window.opener

//         Предотвращает передачу referrer-информации

//     Где именно ставить:

//         В любом теге <a>, который должен открываться в новой вкладке

//         В вашем коде это все ссылки в navCss.list__menu

//     Для кнопок (если нужно):

//         Если у вас кнопка (<button>) должна открывать ссылку, лучше сделать так:
//     jsx
//     Copy */}
//                   {/* <button onClick={() => window.open('https://example.com', '_blank')}>
//       Открыть в новом окне
//     </button>

//     Если ссылка ведёт на ваш же сайт:

//         Лучше не использовать target="_blank" (это плохо для UX и SEO)

//         Оставьте обычное поведение (открытие в текущей вкладке) */}
//                   {/* */}
//                 </div>
//                 <div className={subCss.btns}>
//                   <button
//                     type="button"
//                     className={subCss.cansel__btn}
//                     id="cansel"
//                   >
//                     Cancel
//                   </button>
//                   <button type="button" className={subCss.sign__btn}>
//                     Sign Up
//                   </button>
//                 </div>
//                 {/* </div> */}
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Subscription;




// *************************************************

import subCss from "./subscription.module.css";
import React, { useState, useEffect } from "react";

const Subscription = () => {
  const [modalState, setModalState] = useState("closed"); // 'closed', 'opening', 'open', 'closing'

  // modalState: Состояние модального окна. Может принимать значения: 'closed', 'opening', 'open', 'closing'.
  // В React, даже если значения, такие как 'opening', 'open' и 'closing', закомментированы в документации или комментариях, они все равно могут быть использованы в коде.
  // setModalState: Функция для обновления состояния.
  // Изначально modalState устанавливается в 'closed'.
  // ==============================================
  // ==============================================

  const openMenu = () => {
    setModalState("opening");
  };

  const closeMenu = () => {
    setModalState("closing");
  };

  // 4. Функции для открытия и закрытия меню
  // javascript

  // const openMenu = () => {
  //     setModalState("opening");
  // };

  // const closeMenu = () => {
  //     setModalState("closing");
  // };

  // openMenu: Устанавливает состояние на 'opening', чтобы начать анимацию открытия.
  // closeMenu: Устанавливает состояние на 'closing', чтобы начать анимацию закрытия.

  // ==============================================
  // ==============================================

  const handleAnimationEnd = () => {
    // Если modalState равно "closing": Это означает, что модальное окно закрывается. После завершения анимации оно должно перейти в состояние closed.
    if (modalState === "closing") {
      // тогда Вызывается setModalState("closed"), что обновляет состояние компонента, устанавливая его на 'closed'.
      setModalState("closed");
    } else if (modalState === "opening")
      // Если modalState равно "opening":Это означает, что модальное окно открывается. После завершения анимации оно должно перейти в состояние open.
      setModalState("open");
    // Вызывается setModalState("open"), что обновляет состояние компонента, устанавливая его  на 'open'.
  };

  // handleAnimationEnd: Вызывается, когда анимация завершена. Обновляет состояние модального окна в зависимости от текущего состояния.
  // 3. Как это работает в контексте

  // Анимация: Когда пользователь открывает или закрывает модальное окно, запускается анимация. Например, при открытии окно может плавно появляться, а при закрытии — исчезать.
  // Событие onAnimationEnd: Когда анимация завершается, вызывается handleAnimationEnd. Это событие позволяет программе узнать, что анимация завершилась, и выполнить соответствующие действия.
  // Изменение состояния: В зависимости от текущего состояния (closing или opening), функция обновляет состояние модального окна. Это необходимо для правильного управления отображением окна в интерфейсе. Функция handleAnimationEnd играет ключевую роль в управлении состоянием модального окна, позволяя программно отслеживать завершение анимаций и обновлять UI в соответствии с текущими действиями пользователя.

  // ==============================================
  // ==============================================

  //  Эффект для управления прокруткой (боковой скроллбар)
  useEffect(() => {
    if (modalState === "opening" || modalState === "open") {
      document.body.style.overflow = "hidden";
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [modalState]);

  // useEffect: Срабатывает при изменении зависимостей (в данном случае он зависит от modalState).
  // зависимостей может быть несколько ([dep1, dep2]):
    // Эффект перезапускается при изменении любой зависимости
    
  // Если окно открыто, отключает прокрутку страницы и добавляет отступ, чтобы избежать сдвига контента.
  // Если окно закрыто, восстанавливает исходные стили.


  // Давайте детально разберем код, использующий хук useEffect:
// 1. Назначение useEffect
// javascript

// useEffect(() => {

//     Хук useEffect используется для выполнения побочных эффектов в функциональных компонентах React. В данном случае он будет следить за изменениями состояния modalState.

// 2. Зависимости
// javascript

// }, [modalState]);

//     Второй аргумент — массив зависимостей. Это означает, что функция внутри useEffect будет вызываться каждый раз, когда modalState изменяется. Если modalState изменится, код внутри выполнится заново.

// 3. Проверка состояния модального окна
// javascript

// if (modalState === "opening" || modalState === "open") {

//     Здесь происходит проверка: если modalState равно 'opening' или 'open', это означает, что модальное окно либо открывается, либо уже открыто.

// 4. Отключение прокрутки
// javascript

// document.body.style.overflow = "hidden";

//     Устанавливает стиль overflow для элемента body на 'hidden'. Это отключает прокрутку страницы, когда модальное окно открыто. Это важно для обеспечения фокуса на модальном окне и предотвращения прокрутки фона.

// 5. Вычисление ширины полосы прокрутки
// javascript

// const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

//     window.innerWidth: Получает полную ширину окна браузера.
//     document.documentElement.clientWidth: Получает ширину области просмотра (включая отступы, но без полосы прокрутки).
//     Разница между этими двумя значениями (ширина полосы прокрутки) сохраняется в переменной scrollbarWidth. Это значение нужно для корректной настройки отступов.

// 6. Установка правого отступа
// javascript

// document.body.style.paddingRight = `${scrollbarWidth}px`;

//     Устанавливает правый отступ для элемента body. Это делается для того, чтобы избежать смещения контента страницы, когда полоса прокрутки отключена. Без этого отступа контент может "съезжать" влево, когда полоса прокрутки исчезает.

// 7. Восстановление стилей
// javascript

// } else {
//     document.body.style.overflow = "";
//     document.body.style.paddingRight = "";
// }

//     Если modalState не равно 'opening' или 'open', выполняется этот блок кода:
//         document.body.style.overflow = "";: Сбрасывает стиль overflow на значение по умолчанию, снова позволяя прокрутку страницы.
//         document.body.style.paddingRight = "";: Сбрасывает правый отступ, восстанавливая исходный вид страницы.

// Итог

//     Функция useEffect: Позволяет управлять поведением страницы в зависимости от состояния модального окна.
//     Пользовательский опыт: Отключение прокрутки и корректировка отступов обеспечивает более плавный и удобный пользовательский интерфейс, предотвращая неприятное поведение при открытии модального окна.
//     Зависимости: Код внутри useEffect будет выполняться каждый раз, когда изменяется modalState, что позволяет динамически управлять состоянием страницы.


  // ==============================================
  // ==============================================

  return (
    <div className={subCss.wrapper}>
      <button
        className={`${subCss.subBtn} ${
          modalState === "open" || modalState === "closing"
            ? subCss.disappear
            : ""
        }`}
        onClick={openMenu}
      >
        Подписаться на рассылку
      </button>

      {modalState !== "closed" && (
        <div
          className={`${subCss.modalContainer} ${
            modalState === "open" || modalState === "opening" ? subCss.open : ""
          } ${modalState === "closing" ? subCss.closing : ""}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className={subCss.subscription}>
            <button className={subCss.btn__close} onClick={closeMenu}>
              &times;
            </button>
            <div className={subCss.form} id="form">
              <form className={subCss.content}>
                <h1>Sign-Up</h1>
                <div className={subCss.wrapperP}>
                  <p>Please, fill in this form!</p>
                </div>
                <hr />
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className={subCss.name}
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                />
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className={subCss.mail}
                  id="email"
                  name="email"
                  placeholder="Enter e-mail"
                  required
                  autoComplete="email"
                />
                <label htmlFor="password">Password</label>
                <input
                  className={subCss.field}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                  required
                />
                <label htmlFor="repeatPassword">Repeat password</label>
                <input
                  className={subCss.field}
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="Repeat a password"
                  required
                />
                <div className={subCss.agree}>
                  <p>By clicking Sign Up, you agree to the </p>
                  <a
                    className={subCss.link}
                    href="https://gurucontext.ru/privacy-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </div>
                <div className={subCss.btns}>
                  <button
                    type="button"
                    className={subCss.cansel__btn}
                    onClick={closeMenu}
                  >
                    Cancel
                  </button>
                  <button type="submit" className={subCss.sign__btn}>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
// *************************************************
// useEffect — это один из самых важных хуков в React, который служит для выполнения побочных эффектов в функциональных компонентах. Вот главные причины для его использования:
// 1. Для работы с побочными эффектами

// Побочные эффекты — это любые операции, которые выходят за рамки обычного рендеринга React-компонента:

//     Запросы к API (fetch данных)

//     Работа с DOM (ручное изменение элементов)

//     Подписки на события (клики, resize, таймеры)

//     Работа с браузерными API (localStorage, геолокация)

// Пример с API:
// jsx

// useEffect(() => {
//   fetch('/api/data')
//     .then(res => res.json())
//     .then(data => setData(data));
// }, []);

// 2. Для синхронизации с внешними системами

// Когда нужно "подключить" React к чему-то внешнему:
// jsx

// // Подписка на websocket
// useEffect(() => {
//   const socket = new WebSocket('wss://example.com');
//   socket.onmessage = (event) => {
//     setMessages(prev => [...prev, event.data]);
//   };
  
//   return () => socket.close(); // Отписка при размонтировании
// }, []);

// 3. Для управления жизненным циклом компонента

// Аналог методов классовых компонентов:

//     componentDidMount (пустой массив зависимостей [])

//     componentDidUpdate (указаны зависимости [dep1, dep2])

//     componentWillUnmount (функция очистки в return)

// jsx

// useEffect(() => {
//   console.log('Компонент смонтирован или обновился');
  
//   return () => {
//     console.log('Компонент будет размонтирован');
//   };
// }, [count]); // Зависит от count

// 4. Для работы с DOM

// Когда нужно взаимодействовать с DOM напрямую:
// jsx

// const buttonRef = useRef(null);

// useEffect(() => {
//   const button = buttonRef.current;
//   const handleClick = () => console.log('Clicked!');
  
//   button.addEventListener('click', handleClick);
  
//   return () => {
//     button.removeEventListener('click', handleClick);
//   };
// }, []);

// 5. Для сложных вычислений при изменении данных

// Когда нужно реагировать на изменения состояния:
// jsx

// useEffect(() => {
//   if (user) {
//     localStorage.setItem('currentUser', JSON.stringify(user));
//   }
// }, [user]); // Сработает при каждом изменении user

// Как именно работает useEffect?

//     После рендера React выполняет эффекты

//     Перед каждым новым выполнением — вызывает функцию очистки из предыдущего эффекта (если есть)

//     При размонтировании — вызывает функцию очистки последнего эффекта

// Главные правила:

//     Не блокирует рендеринг — выполняется после отрисовки компонента

//     Зависимости должны быть полными — если эффект использует пропсы или состояние, они должны быть в массиве зависимостей

//     Функция очистки — обязательна для отмены подписок, таймеров и т.д.

// Пример с таймером:
// jsx

// useEffect(() => {
//   const timer = setInterval(() => {
//     setSeconds(prev => prev + 1);
//   }, 1000);

//   return () => clearInterval(timer); // Важно очистить!
// }, []);

// useEffect — это "швейцарский нож" для работы со всем, что выходит за рамки JSX в React-компонентах.


// *************************************************
