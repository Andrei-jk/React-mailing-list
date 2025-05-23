import titleCss from "./title.module.css";

function Title({ content, additional_class }) {
  return (
    <h1
      className={`${titleCss.header__title}
         ${additional_class}`}
    >
      {content}
    </h1>
  );
}

export default Title;
// В вашем коде компонент Title принимает два свойства (props): content и additional_class. Давайте разберем, как применяется additional_class к элементу <h1> и где он может быть описан.
// Как это работает

//     Структура компонента:
//     javascript

// function Title({ content, additional_class }) {

// Здесь мы используем деструктуризацию, чтобы получить свойства content и additional_class из объекта props, переданного в компонент.

// Применение классов:
// javascript

//     <h1
//       className={`${titleCss.header__title} ${additional_class}`}
//     >
//       {content}
//     </h1>

//     В этом месте мы используем шаблонные строки (template literals) для формирования строки классов, которая будет применена к элементу <h1>.
//         titleCss.header__title — это класс, определенный в вашем CSS-модуле, который будет применен к заголовку.
//         ${additional_class} — это дополнительный класс, который передается в компонент при его использовании.

// Как передать additional_class

// Вы можете передать additional_class при использовании компонента Title. Например:
// javascript

// <Title content="Hello, World!" additional_class="my-custom-class" />

// В этом случае additional_class будет равно строке "my-custom-class".
// Где описывается additional_class

// additional_class не описывается в самом компоненте. Он передается при его вызове. Это может быть любой CSS класс, который вы определили в вашем глобальном CSS или в другом CSS модуле. Например:
// css

// /* myStyles.css */
// .my-custom-class {
//   color: red;
//   font-size: 24px;
// }

// Полный пример

// Вот как может выглядеть ваш компонент и его использование:
// javascript

// import titleCss from "./title.module.css";
// import './myStyles.css'; // Импортируйте ваш глобальный CSS

// function Title({ content, additional_class }) {
//   return (
//     <h1
//       className={`${titleCss.header__title} ${additional_class}`}
//     >
//       {content}
//     </h1>
//   );
// }

// export default Title;

// // Использование компонента
// <Title content="Hello, World!" additional_class="my-custom-class" />

// Итог

// Таким образом, additional_class предоставляет гибкость, позволяя вам добавлять дополнительные стили к компоненту Title, не изменяя сам компонент.