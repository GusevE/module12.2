import Header from "./component/header/";
import  "./component/header/header.css";
import Main  from "./component/main/main";
import Footer  from "./component/footer/";
import Nav  from "./component/nav/";
import React, {useState} from 'react';
    

let sort: any  = 'release_date'

export default () =>{
    const [Data, setData] = useState([]);

    const [Filter, setFilter] = useState({
        value: '',
        type: 'title'
    })

    console.log(Filter);

    function inputSearch(key: any, value: any)
    {
        setFilter({ ...Filter, [key]: value });
    }

    function searchFilm(){
        

        let url = `http://react-cdp-api.herokuapp.com/movies?sortBy=${ sort }&sortOrder=desc&search=${ Filter.value }&searchBy=${ Filter.type }`

        console.log(url);

        fetch(url)
        .then(response => response.json())
        .then(json => {

            console.log(json.data);
            setData(json.data);
        })
    }
    function sortBy(value:string)
    {
        sort = value;

        searchFilm();
    }
    return (
         <>
        <div className="wrapper">
                 <Header search={searchFilm} input={ inputSearch } />
                 <Nav sort={ sortBy } count={ Data.length}/>
                 <Main  data ={Data}/>
                 <Footer />
        </div>
       </> 
    )
}
