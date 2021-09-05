import Header from "./component/header";
import  "./component/header/header.css";
import Main  from "./component/main/main";
import Footer  from "./component/footer";
import Nav  from "./component/nav";
import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";

    

// let sort: any  = 'release_date'


export default () =>{
    // const [Data, setData] = useState([]);

    // const [Filter, setFilter] = useState({
    //     value: '',
    //     type: 'title'
    // })

    // console.log(Filter);

    // function inputSearch(key: any, value: any)
    // {
    //     setFilter({ ...Filter, [key]: value });
    // }
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
            // setData(json.data);

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
        <div className="wrapper">
                 <Header search={ searchFilm }/>
                 <Nav sort={ sortBy } />
                 <Main />
                 <Footer />
        </div>
       </> 
    )
}
