import React from "react";
import styles from './search.module.css'
const SearchBar = ({...rest}) => {
  return (
    <div className={styles.coin_search}>
      <input type="text" name="" id=""  className={styles.coin_input} {...rest}/>
    </div>
  );
};

export default SearchBar;
