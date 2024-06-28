import { useContext } from "react";
import styles from "./app.module.scss";
import NavBar from "./components/Navbar/Navbar.jsx";
import PostCarousel from "./components/PostCarousel/PostCarousel.jsx";
import SearchInput from "./components/SearchBar/SearchBar.jsx";
import { globalApp } from "./Layouts/layouts.jsx";

function App() {
  const { photos } = useContext(globalApp);

  return (
    <>
      <main className={styles.mainPage}>
        <NavBar />
        <SearchInput />
        <PostCarousel list={photos} />
      </main>
    </>
  );
}

export default App;
