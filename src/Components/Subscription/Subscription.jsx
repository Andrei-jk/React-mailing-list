import subCss from "./subscription.module.css";
import React, { useState } from "react";

const Subscription = () => {
  // Используем хук useState для создания состояния isOpen, которое по умолчанию определяем как false. Это состояние будет определять, открыто ли меню.
  const [isOpen, setIsOpen] = useState(false);
  // создаем ф, которая будет открывать окно формы
  const openMenu = () => {
    //  Чтобы открыть окно, надо вызвать ф setIsOpen с параметром (true) Здесь вместо непосредственного вызова setIsOpen(true), мы используем requestAnimationFrame. Это позволяет браузеру выполнить обновления перед изменением состояния, что может помочь сделать анимации более плавными.
    //  * setIsOpen(true);
    requestAnimationFrame(() => {
      setIsOpen(true);
    });
  };
  // *************************************
  //еще один useState для checkbox
  const [remember, setRemember] = useState(false);
  // создаем ф, которая будет управлять checkbox
  const changeCheckbox = () => {
    setRemember((prev) => !prev);
  };
  // Функциональное обновление состояния (prev => !prev) — это важный паттерн в React, который обеспечивает корректность и надёжность при обновлении состояния на основе предыдущего значения. Давайте разберём его подробно.
// 1. Как работает обычное обновление состояния

// Без функционального обновления можно сделать так:
// js
// Copy

// onChange={() => setRemember(!remember)}


// Если состояние (remember) обновляется асинхронно или в нескольких местах, React может использовать устаревшее (stale) значение, что приведёт к неправильному переключению.
// 2. Как работает функциональное обновление
// js
// Copy

// onChange={() => setRemember(prev => !prev)}

// Здесь:

//     prev — гарантированно актуальное предыдущее состояние на момент обновления.

//     !prev — инвертирует это значение (true → false, false → true).
  // *************************************

  // Чтобы закрыть окно, надо создать ф, которая будет закрывать окно формы

  const closeMenu = () => {
    //   Функция closeMenu закрывает меню.Чтобы закрыть окно, надо вызвать ф setIsOpen с параметром (false)
    setIsOpen(false);
  };

  return (
    // обертка для блока с формой (она не явл открывающимся или закрывающимся окном, этот просто обертка для return)
    <div className={subCss.wrapper}>
      {/* ссылка-КНОПКА, которая открывает подписку на рассылку и на нее вешаем onClick, который вызовет ф openMenu */}
      <button
        // className={subCss.subBtn}
        className={`${subCss.subBtn} ${isOpen ? subCss.disappear : ""}`}
        id="sign__up"
        onClick={openMenu}
      >
        Подписаться на рассылку
      </button>
      <div className={`${subCss.modalContainer} ${isOpen ? subCss.open : ""}`}>
        {/*  // весь открывающийся блок с формой */}
        {/* блок subscription в котором находится сама форма */}
        {/* приклеиваем к блоку subscription дополнительный класс open*/}
        <div className={subCss.subscription}>
          {/* <div className={`${subCss.subscription} ${isOpen ? subCss.open : ""}`}> */}
          {/* кнопка закрытия окна подписки и на нее вешаем onClick, который вызовет ф closeMenu */}
          <button className={subCss.btn__close} onClick={closeMenu}>
            &times;
          </button>
          {/* <span class="close" id="cl">
          &times;
        </span> */}
          <div className={subCss.form} id="form">
            {/* форма */}
            <form action="#" className={subCss.content}>
              {/* <div className={subCss.container}> */}
              <h1>Sign-Up</h1>
              {/* ОБЯЗЯТЕЛЬНО ПАРАГРАФ ДОПОЛНИТЕЛЬНО ОБЕРТЫВАТЬ (см Ламков) */}
              <div className={subCss.wrapperP}>
                <p>Pleace, fill in this form!</p>
              </div>
              <hr></hr>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={subCss.name}
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                autoComplete="name"
              ></input>
              <label htmlFor="e-mail">E-mail</label>
              <input
                type="email"
                className={subCss.mail}
                id="mail"
                name="e-mail"
                placeholder="Enter e-mail"
                required
                autoComplete="email"
              ></input>
              {/* autocomplete — это атрибут HTML, который используется в элементах форм, чтобы указать браузеру, как обрабатывать автозаполнение полей ввода. Он помогает пользователям быстрее заполнять формы, предлагая им ранее введенные значения.
Зачем нужен autocomplete?

    Удобство для пользователей: Автозаполнение позволяет пользователям быстро выбирать ранее введенные данные, что экономит время и уменьшает количество ошибок при вводе.

    Улучшение пользовательского опыта: Легкость заполнения форм делает взаимодействие с веб-сайтом более приятным и менее утомительным.

    Сохранение данных: Браузеры могут сохранять информацию, такую как адреса электронной почты, пароли и другие данные, чтобы пользователи могли легко повторно вводить их в будущем.

Как использовать autocomplete?

Атрибут autocomplete может принимать несколько значений:

    on: Включает автозаполнение (по умолчанию).
    off: Отключает автозаполнение.
    Значения, такие как name, email, username, password и другие, которые указывают браузеру, какое именно значение ожидается.

Пример использования
html

<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" autoComplete="email" />

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" autoComplete="new-password" />
</form>
 */}
              <label htmlFor="pass">Password</label>
              <input
                className={subCss.field}
                type="password"
                id="pass"
                name="pass"
                placeholder="Create a password"
                autoComplete="new-password"
                required
              ></input>
              <label htmlFor="pass-repeat">Repeat password</label>
              <input
                className={subCss.field}
                type="password"
                id="pass-repeat"
                name="pass-repeat"
                placeholder="Repeat a password"
                required
              ></input>
              {/* Атрибут required в HTML используется для указания, что поле ввода должно быть обязательно заполнено перед отправкой формы. Это позволяет браузеру проверять, заполнены ли все обязательные поля, и предотвращать отправку формы, если они пустые.
Зачем нужен required?

    Валидация данных: Гарантирует, что пользователь предоставит необходимую информацию, прежде чем форма будет отправлена. Это помогает избежать ошибок и недостающих данных.

    Улучшение пользовательского опыта: Пользователь сразу видит, какие поля обязательны, что упрощает процесс заполнения формы.

    Снижение нагрузки на сервер: Помогает предотвратить отправку неполных форм, что может снизить количество ошибок и лишних запросов к серверу.

Как использовать required?

Атрибут required можно добавлять к любым элементам формы, таким как <input>, <select>, и <textarea>.
Пример использования
html

<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <button type="submit">Submit</button>
</form>

Как это работает?

    Если пользователь пытается отправить форму, не заполнив обязательные поля, браузер отобразит сообщение об ошибке и не позволит отправить форму, пока все обязательные поля не будут заполнены.
    Пользователь увидит визуальные подсказки, такие как рамки или сообщения, указывающие на ошибку.
 */}

              <label htmlFor="remember">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked={remember}
                  onChange={changeCheckbox}
                ></input>
                remember me
              </label>
              <div className={subCss.agree}>
                <p>
                  I agree{" "}
                  <a
                    href="https://gurucontext.ru/privacy-generator?ysclid=ma2bnr7tva521508702"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Policy
                  </a>
                  {/* 
//                   Чтобы ссылка открывалась в новом окне, нужно добавить атрибут target="_blank". В вашем коде это нужно сделать для элементов <a>. Вот как это выглядит:
// Для навигационного меню (из вашего кода):
// jsx
// Copy

// <ul className={navCss.list__menu}>
//   <li>
//     <a href="#!" target="_blank" rel="noopener noreferrer">о нас</a>
//   </li>
//   <li>
//     <a href="#!" target="_blank" rel="noopener noreferrer">будь в курсе</a>
//   </li>
  // {/* ... и так для всех ссылок ... */}
                  {/* </ul> */}
                  {/* Важные нюансы:

    rel="noopener noreferrer" - обязательная добавка к target="_blank" для безопасности:

        Защищает от уязвимостей типа window.opener

        Предотвращает передачу referrer-информации

    Где именно ставить:

        В любом теге <a>, который должен открываться в новой вкладке

        В вашем коде это все ссылки в navCss.list__menu

    Для кнопок (если нужно):

        Если у вас кнопка (<button>) должна открывать ссылку, лучше сделать так:
    jsx
    Copy */}
                  {/* <button onClick={() => window.open('https://example.com', '_blank')}>
      Открыть в новом окне
    </button>

    Если ссылка ведёт на ваш же сайт:

        Лучше не использовать target="_blank" (это плохо для UX и SEO)

        Оставьте обычное поведение (открытие в текущей вкладке) */}
                  {/* */}
                </p>
              </div>
              <div className={subCss.btns}>
                <button
                  type="button"
                  className={subCss.cansel__btn}
                  id="cansel"
                >
                  Cansel
                </button>
                <button type="button" className={subCss.sign__btn}>
                  Sign Up
                </button>
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
