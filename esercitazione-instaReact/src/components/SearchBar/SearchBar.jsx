import styles from "./searchBar.module.scss";
import { useState, useContext } from "react";
import { globalApp } from "../../App";

const SearchInput = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const { filter, setImagesfilter } = useContext(globalApp);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(setImagesfilter);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search Post"
      />
      <button className={styles.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
