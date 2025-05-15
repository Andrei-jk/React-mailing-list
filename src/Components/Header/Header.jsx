import headerCss from "./header.module.css";
// import Navigation from "../Navigation/Navigation";
import Subscription from "../Subscription/Subscription";
const Header = () => {
  return (
    <header className={headerCss.header}>
      <div className={headerCss.container}>
        <div className={headerCss.header__row}>
          {/* <Navigation /> */}
          <Subscription />
        </div>
      </div>
    </header>
  );
};

export default Header;
