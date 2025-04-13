import navCss from './navigation.module.css';
import logo from './../../img/logo.png';
const Navigation = () => {
   return (<div className={navCss.nav__btn}>
      <img src={logo} alt="logo" className={navCss.logoPic} />
   </div>);
};
 
export default Navigation;