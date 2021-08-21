import {useState} from "react";
import styles  from './header.css'
function Header (props){
  const [Value, setValue] = useState();

  console.log(Value);

  return (
     <div style={{ 
      backgroundImage: `url(http://manikyres.ru/wp-content/uploads/2019/01/post_5c4e2dd3cba36.jpeg)` 
    }} className={styles.container}>
      <div   className={styles.header} >
        <div className={styles.header__logo}> netflixroulette</div>
        <div className={styles.header__title}> Find your movie</div>
        
        <label>
        <input type="search" className={styles.header__input}placeholder="Quentin Terantino" onChange={(e)=>setValue(e.target.value) } />
        </label>
        
        < div className={styles.search}>
            <div className={styles.search__title}>search by </div>
            <button type="button" className={styles.btn}> Title</button>
            <button type="button" className={styles.btn}> Genre</button>
            <button type="button" className={styles.btn__search} onClick={ () => props.search(Value) }> search</button>
            </div>
            </div>
      </div>
      
         )
                  }
export default Header