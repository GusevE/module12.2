import { any } from "prop-types";
import React from "react";
import './search.css'

interface IProp{
   onChange:any
}
function Search ({onChange} :IProp){
   
  return (
        <label>
           <input onChange={onChange} type="search" className="header__input" placeholder="Quentin Terantino"  />
            </label>
         )
                  }
export default Search