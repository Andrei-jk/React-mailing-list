
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
        className={`${subCss.subBtn}
        // ${
          subCss.subBtn
        }: Это основной класс для кнопки, который следует из импортированного CSS-модуля subCss. Он используется для стилизации кнопки.
        ${
          modalState === "open" || modalState === "closing"
            ? subCss.disappear
            : ""
        }`}
        //

        //     Условная логика:
        //         modalState === "open" || modalState === "closing": Здесь проверяется текущее состояние modalState.
        //             Если modalState равно "open" (модальное окно открыто) или "closing" (модальное окно закрывается), добавляется класс subCss.disappear.
        //             Если ни одно из этих условий не выполняется, добавляется пустая строка (""), что означает, что класс не будет добавлен.

        // 4. Класс subCss.disappear

        //     Этот класс, вероятно, определен в CSS и используется для изменения стиля кнопки, когда модальное окно открыто или закрывается. Например, он может изменять прозрачность или размеры кнопки, делая ее невидимой или менее заметной.

        onClick={openMenu}
        // Атрибут onClick назначает обработчик событий, который вызывается при нажатии на кнопку.
        // Когда пользователь нажимает кнопку, вызывается функция openMenu, которая изменяет состояние modalState на 'opening'. Это инициирует процесс открытия модального окна.
      >
        Подписаться на рассылку
      </button>

      {modalState !== "closed" && (
        <div
          className={
            `${subCss.modalContainer}
           ${
             modalState === "open" || modalState === "opening"
               ? subCss.open
               : ""
             //  Если модальное окно открыто или открывается, добавляется класс subCss.open (в другом случае не добавляется ничего)
           }
           ${modalState === "closing" ? subCss.closing : ""}`
            //  Если модальное окно закрыто или закрывается, добавляется класс subCss.closing (в другом случае не добавляется ничего)
          }
          onAnimationEnd={handleAnimationEnd}
          // Этот обработчик срабатывает, когда анимация модального окна завершается, вызывая функцию handleAnimationEnd, которая обновляет состояние.
        >
          <div className={subCss.subscription}>
            <button className={subCss.btn__close} onClick={closeMenu}>
              &times;
            </button>
            {/* Кнопка закрытия, стилизованная с помощью класса subCss.btn__close. При нажатии вызывается функция closeMenu, которая устанавливает состояние модального окна на 'closing' */}
            <div className={subCss.form} id="form">
              <form className={subCss.content}>
                <h1>Sign-Up</h1>
                <div className={subCss.wrapperP}>
                  <p>Please, fill in this form!</p>
                </div>
                <hr />
                <label htmlFor="name">Name</label>
                {/* <label>: Связывает текст с полем ввода по id. */}
                <input
                  type="text"
                  className={subCss.name}
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  // required: Обязательно для заполнения.
                  autoComplete="name"
                  // autoComplete: Подсказка для браузера.
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
                  {/* Кнопка "Cancel": Закрывает модальное окно, вызывая closeMenu. Кнопка "Sign Up": Отправляет форму (тип submit).*/}
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
