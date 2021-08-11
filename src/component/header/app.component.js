import React from "react";
import styles  from './app.component.css'
function Header (){
  return (
     <div className={styles.header}>
        <div className={styles.header__logo}> netflixroulette</div>
        <div className={styles.header__title}> Find your movie</div>
        <label>
        <input type="text" className={styles.header__input}placeholder="Quentin Terantino" />
        </label>
        < div className={styles.search}>
            <div className={styles.search__title}>search by </div>
            <button type="button" className={styles.btn}> Title</button>
            <button type="button" className={styles.btn}> Genre</button>
            <button type="button" className={styles.btn__search}> search</button>
            </div>
      </div>
         )
                  }
export default Header