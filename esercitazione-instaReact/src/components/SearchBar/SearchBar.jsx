import styles from "./searchBar.module.scss";
import { useState, useContext } from "react";
import { globalApp } from "../../Layouts/layouts";

const SearchInput = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const { filter, setImagesfilter } = useContext(globalApp);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={filter ? filter : searchValue}
        onChange={(e) => {
          e.preventDefault();
          const input = e.target.value;
          setSearchValue(input);
          console.log(setImagesfilter);
          //onSearch(setImagesfilter);
        }}
        placeholder="Search Post"
      />
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
};

export default SearchInput;
