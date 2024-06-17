import Logo from "../Logo/Logo";
import style from "./navbar.module.css";
const Navbar = () => {
  const menulist = ["Home", "Movie", "Popular", "TopRated", "Login"];
  return (
    <nav>
      <Logo />
      <h1 className={style.maintitle}>SONNYFLIX</h1>
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
