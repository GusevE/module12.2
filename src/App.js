import Header from "./component/header/header";
import styles  from "./component/header/header";
import Main  from "./component/main/main";
import Footer  from "./component/footer/footer";
import Nav  from "./component/nav/nav";
import { useState } from 'react';


let sort = 'release_date'

export default () =>{
    const [Data, setData] = useState([]);

    const [Filter, setFilter] = useState({
        value: '',
        type: 'title'
    })

    console.log(Filter);

    function inputSearch(key, value)
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
    function sortBy(value)
    {
        sort = value;

        searchFilm();
    }
    return (

        <>
        <div className={styles.wrapper}> 
                 <Header search={searchFilm} input={ inputSearch } />
                 <Nav sort={ sortBy } count={ Data.length}/>
                 <Main  data ={Data}/>
                <Footer />
    
        </div>
       </> 
    )
}
