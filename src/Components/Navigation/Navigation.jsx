import React, { useState } from "react";
import { useEffect } from "react";
import navCss from "./navigation.module.css";
// добавляем роутинг
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// добавляем ссылки
import { NavLink } from "react-router-dom";
// ==========================================
// Общая структура

//     Состояние управляет открытием и закрытием меню.
//     Функции для управления состоянием (открытие и закрытие).
//     JSX для визуализации меню с динамическим добавлением классов для управления стилями.
// ==========================================

const Navigation = () => {
  // Состояние isOpen: Используем хук useState для создания состояния isOpen, которое по умолчанию равно false. Это состояние будет определять, открыто ли меню.
  const [isOpen, setIsOpen] = useState(false); // 'closed', 'opening', 'open', 'closing'

  const openMenu = () => {
    //   Функция openMenu: Эта функция открывает меню. Вместо непосредственного вызова setIsOpen(true), мы используем requestAnimationFrame. Это позволяет браузеру выполнить обновления перед изменением состояния, что может помочь сделать анимации более плавными.
    //  * setIsOpen(true);
    requestAnimationFrame(() => {
      setIsOpen(true);
    });
  };

  const closeMenu = () => {
    //   Функция closeMenu: Эта функция закрывает меню, просто устанавливая isOpen в false.
    setIsOpen(false);
  };

  // *************************************

  useEffect(() => {
    if (isOpen) {
      // 1. Сначала блокируем скролл
      document.body.style.overflow = "hidden";

      // 2. Затем вычисляем и применяем компенсацию скроллбара
      requestAnimationFrame(() => {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        // 3. Только потом запускаем анимацию открытия
        // setIsOpen(true);
      });
    } else {
      // При закрытии просто убираем стили
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [isOpen]);
  // *************************************

  return (
    // <BrowserRouter>
      // {/* //  =============== MODAL MENU */}
      /* //   div className={menu ${isOpen ? "open" : ""}}>: Этот div представляет основное меню. Если isOpen равно true, добавляется класс open, который можно использовать для стилизации (например, для анимации) иначе : ничего (" ") */
      <div className={`menu ${isOpen ? "open" : ""}`}>
        {/* ссылка-КНОПКА, которая открывает MODAL MENU */}
        <button className={navCss.nav__btn} onClick={openMenu}></button>
        {/* модальное меню */}
        <div className={`${navCss.menu} ${isOpen ? navCss.open : ""}`}>
          {/* ********************************* */}
          {/* <div className={`${navCss.menu} ${isOpen ? navCss.open : ""}`}>
КАК ДОБАВЛЯЕТСЯ ДОПОЛНИТЕЛЬНЫЙ КЛАСС!!!

1. Использование шаблонных строк

    Шаблонные строки: В этом коде используется синтаксис шаблонных строк (template literals) JavaScript, который позволяет интерполировать переменные и выражения внутри строки. Они заключаются в обратные кавычки (`).

2. Конкатенация классов

    ${navCss.menu}: Это обращение к классу menu, который импортирован из CSS-модуля navigation.module.css. CSS-модули позволяют использовать локальные классы, предотвращая конфликт имен.

    ${isOpen ? navCss.open : ""}: Здесь используется тернарный оператор для условной логики. Он проверяет, является ли переменная isOpen истинной (true):
        Если isOpen истинно (true), то добавляется класс navCss.open.
        Если isOpen ложно (false), добавляется пустая строка (то есть ничего не добавляется).

3. Полное выражение

Таким образом, данное выражение формирует строку для атрибута className, которая будет содержать один или два класса в зависимости от состояния isOpen:

    Если isOpen равно true, className будет равно navCss.menu navCss.open.
    Если isOpen равно false, className будет равно только navCss.menu.

4. Пример использования в контексте

Предположим, что navCss.menu — это класс, который задает стили для меню, а navCss.open — это класс, который может добавлять дополнительные стили (например, анимацию или изменение видимости) при открытом состоянии меню. Это позволяет динамически изменять внешний вид элемента в зависимости от состояния.
Итог

Эта строка кода создает динамический класс для элемента div, который меняется в зависимости от состояния isOpen. Он использует шаблонные строки и тернарный оператор для удобства и читабельности. */}
          {/* ********************************* */}

          {/* кнопка закрытия окна */}
          <button className={navCss.close__btn} onClick={closeMenu}>
            &times;
            {/* close */}
          </button>
          {/* <Routes> */}
            {/* пункты меню */}
            <ul className={navCss.list__menu}>
              <li>
                {/* ссылка в React */}
              <NavLink
                to="/о нас"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  о нас
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/будь в курсе"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  будь в курсе
                </NavLink>
              </li>
              <li>
              <NavLink
                to="/анонсы"
                target="_blank"
                rel="noopener noreferrer"
              >
                  анонсы
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/партнеры"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  партнеры
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/контакты"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  контакты
                </NavLink>
              </li>
            </ul>
          {/* </Routes> */}
        </div>
        {/* =============== MODAL MENU */}
      </div>
    // </BrowserRouter>
  );
};

export default Navigation;

// useState — это один из основных хуков в React, который позволяет добавлять состояние в функциональные компоненты. Давайте разберем его подробнее.
// Что такое useState?

//     Хук состояния: useState позволяет вам создавать и управлять состоянием в функциональных компонентах. Ранее для этого использовались классовые компоненты, но с появлением хуков стало возможным делать это и в функциональных компонентах.

// Синтаксис
// javascript

// const [state, setState] = useState(initialState);

//     state: Это текущее значение состояния.
//     setState: Это функция, которая используется для обновления значения состояния.
//     initialState: Это начальное значение состояния, которое может быть любого типа (число, строка, массив, объект и т.д.).

// Пример использования

// Рассмотрим простой пример:
// javascript

// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0); // Инициализация состояния count с начальным значением 0

//   const increment = () => {
//     setCount(count + 1); // Обновляем состояние, увеличивая count на 1
//   };

//   return (
//     <div>
//       <p>Текущий счет: {count}</p>
//       <button onClick={increment}>Увеличить</button>
//     </div>
//   );
// };

// export default Counter;

// Как это работает

//     Инициализация состояния:
//         Мы вызываем useState(0), что означает, что count будет инициализирован значением 0.
//         setCount — это функция, которая будет использоваться для обновления count.

//     Обновление состояния:
//         Когда пользователь нажимает кнопку, вызывается функция increment, которая вызывает setCount(count + 1).
// например вот так
// ! <button className={navCss.nav__btn} onClick={openMenu}></button>
//         Это обновляет состояние count, и React перерисовывает компонент с новым значением.

//     Перерисовка:
//         Когда состояние обновляется с помощью setCount, React повторно рендерит компонент, и новое значение count отображается на экране.

// Важные моменты

//     Асинхронное обновление: Обратите внимание, что обновление состояния может быть асинхронным. Это означает, что если вы вызовете setCount несколько раз подряд, React может не сразу обновить значение состояния. Чтобы избежать проблем, вы можете передать функцию в setState:
//     javascript

// setCount(prevCount => prevCount + 1);

// Множественные состояния: Вы можете использовать несколько вызовов useState для управления различными частями состояния в одном компоненте:
// javascript

// const [name, setName] = useState('');
// const [age, setAge] = useState(0);

// Тип состояния: useState может принимать любое значение в качестве начального состояния, включая массивы и объекты. Например:
// javascript

// const [user, setUser] = useState({ name: '', age: 0 });
