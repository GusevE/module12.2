import { useState, useMemo, useCallback} from "react";
import './header.css'
import Button from '../../comp/button/button'
import Search from '../../comp/search/search'
function Header ({input, search}){
  const titleClick = useMemo (() => input ('type', 'genres'), []);
  const genereClick = useMemo (() => input ('type', 'genres'), []);
 


  const [active, setActive] = useState(false);

  function clickBtn(value, cb)
  {
    setActive(value);

    input('type', value ? 'genres' : 'title');
  }
  

  return (
     <div  className="container">
      <div   className="header" >
        <div className="header__logo"> netflixroulette</div>
        <div className="header__title"> Find your movie</div>
        
        
        <Search onChange={(e)=> input( 'value', e.target.value )}  />
        {/* <label>
        <input type="search" className="header__input" placeholder="Quentin Terantino" onChange={(e)=> input( 'value', e.target.value )}  />
        </label> */}
        
        
        < div className="search">
            <div className="search__title">search by </div>
              
            <Button className={ !active ? `active` : null } onClick={ () => clickBtn(false) }> Title</Button>
            <Button className={ active ? `active` : null }  onClick={ () => clickBtn(true) }> Genre</Button>
            <Button className="active" id="btn__search" onClick={search }> search</Button>
            </div>
            </div>
          </div>
      
         )
                  }
export default Header
