import {useState} from "react";
import './header.css'
function Header (props){

  return (
     <div style={{ 
      backgroundImage: `url(http://manikyres.ru/wp-content/uploads/2019/01/post_5c4e2dd3cba36.jpeg)` 
    }} className="container">
      <div   className="header" >
        <div className="header__logo"> netflixroulette</div>
        <div className="header__title"> Find your movie</div>
        
        <label>
        <input type="search" className="header__input" placeholder="Quentin Terantino" onChange={(e)=>props.input( 'value', e.target.value )}  />
        </label>
        
        < div className="search">
            <div className="search__title">search by </div>
            <button type="button" className="btn" onClick={ () => props.input( 'type', 'title' )}> Title</button>
            <button type="button" className="btn" onClick={ () => props.input( 'type', 'genres' )}> Genre</button>
            <button type="button" className="btn__search" onClick={ props.search }> search</button>
            </div>
            </div>
      </div>
      
         )
                  }
export default Header