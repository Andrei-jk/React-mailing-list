import headerCss from "./header.module.css";
import Navigation from "../Navigation/Navigation";
import Subscription from "../Subscription/Subscription";
import Title from "../Title/Title";
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
    </header>
  );
};

export default Header;
