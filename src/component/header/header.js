import { useState, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import './header.css'

import Button from "../../comp/button";
import Search from "../../comp/search";

function Header ({search}){
 

  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  console.log(state);


  function clickBtn(value, cb)
  {
    setActive(value);

    dispatch({type: 'CHANGE_TYPE', payload: value ? 'genres' : 'title'})

    // input('type', value ? 'genres' : 'title');
  }

  



  return (
     <div  className="container">
      <div   className="header" >
        <div className="header__logo"> netflixroulette</div>
        <div className="header__title"> Find your movie</div>
        
        
        {/* <Search onChange={(e)=> input( 'value', e.target.value )}  /> */}
        
        <Search onChange={ (e) => dispatch({type: 'CHANGE_VALUE', payload: e.target.value})} />
        
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
