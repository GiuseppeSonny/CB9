import Logo from "../Logo/Logo";
import style from "./navbar.module.css";
const Navbar = () => {
  const menulist = ["Home", "About", "Contacts"];
  return (
    <nav>
      <Logo />
      <ul className={style.mainContainer}>
        {menulist.map((item, index) => (
          <li key={index} className="menuList">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
