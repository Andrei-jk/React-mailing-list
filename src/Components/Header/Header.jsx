import headerCss from "./header.module.css";
import Navigation from "../Navigation/Navigation";
import Subscription from "../Subscription/Subscription";
import Title from "../Title/Title";
// т к в   <Title
      //   content="Когда в бизнесе пробуксовка..."
      //   additional_class={titleCss.title__business}
      //   />
// добавляется дополнительный класс, то ВНИМАТЕЛЬНО надо указывать путь к CSS (следующая строка)
import titleCss from "../Title/title.module.css";
import Slider1 from "./Slider1/Slider1";
const Header = () => {
  return (
    <header className={headerCss.header}>
      <div className={headerCss.container}>
        <div className={headerCss.header__row}>
          <Navigation />
          <Subscription />
        </div>
        <Title
          content="Профессиональная рассылка
           для владельцев спортивных
            студий от Mobifitness"
        />
        {/* <h2 className="banner">
          Профессиональная рассылка для владельцев спортивных студий от
          Mobifitness
        </h2> */}
      </div>
      <Slider1 />
      <Title
        content="Когда в бизнесе пробуксовка..."
        // !здесь даем дополнительный класс и указывается, что этот дополнительный класс нахотится в titleCss и называется он .title__business
        additional_class={titleCss.title__business}
        // * дополнительных классов может быть много, но ГЛАВНОЕ указать откуда (из какого модуля) его брать (его конечно надо импортировать) и как он там называется
      />
    </header>
  );
};

export default Header;
