// import { BrowserRouter } from "react-router-dom";
// подключаем стили Css
import appCss from "./css/app.module.css";
// импортируем Heaader
import Header from "./Components/Header/Header";
// import Main from "./components/main/Main";
// import Footer from "./components/footer/Footer";
function App() {
  return (
    // ! ЧТОБЫ РОУТИНГ РАБОТАЛ ПО ВСЕМУ ПРИЛОЖЕНИЮю ЕГО НАДО ИМЕННО В App.js СРАЗУ ОБЕРНУТЬ В <BrowserRouter> !!!!!!!!!!!!!!!!!!!!!
   //  <BrowserRouter>
    <div className={appCss.App}>
        {/* общая оболочка проекта */}
        {/* <div className={AppCss.project__wrapper}> */}
          <Header />
          {/* <Main /> */}
          {/* <Footer /> */}
    
        </div>
      //   {/* <button class="btn-top" title="Back to top">
      //     UP
      //   </button> */}
      // </div>
   //  {/* </BrowserRouter> */}
  );
}

export default App;
