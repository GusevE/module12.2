import Header from "./component/header";
import  "./component/header/header.css";
import Main  from "./component/main/main";
import Footer  from "./component/footer";
import Nav  from "./component/nav";
import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import HeaderRouter from "./component/HeaderRouter";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Components } from "antd/lib/date-picker/generatePicker";





export default () =>{
   
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    console.log(state);


    function searchFilm(){

        
        let url = `http://react-cdp-api.herokuapp.com/movies?sortBy=${ state.sort }&sortOrder=desc&search=${ state.value }&searchBy=${ state.type }`

        console.log(url);

        fetch(url)
        .then(response => response.json())
        .then(json => {

            console.log(json.data);
           
            dispatch({type: 'SEARCH_FILM', payload: json.data});
        })
    }
    function sortBy(value)
    {
        dispatch({type: 'SORT', payload:value});

        searchFilm();
    }
    
    
    return (
         <>
         <BrowserRouter>
        <div className="wrapper">
                <Switch>

                    <Route path="/" exact>
                        <>
                        <Header search={ searchFilm }/>
                        <Nav sort={ sortBy } />
                        <Main />
                        </>
                    </Route>

                    <Route path="/film/:id" exact>
                        <>
                            <HeaderRouter />
                            <Nav />
                            <Main />
                           
                        </>
                    </Route>
                
                </Switch>


                 
                 <Footer />
                 
        </div>
           
        </BrowserRouter>
       </> 
    )
}


// <BrowserRouter>

//     <Switch>

//         <Route>
//             <Component1 />
//         </Route>

//         <Route>
//             <Component2 />
//         </Route>

//     </Switch>

// </BrowserRouter>