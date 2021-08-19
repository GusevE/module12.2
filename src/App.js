import Header from "./component/header/app.component";
import styles  from "./component/header/app.component.css";
import Main  from "./component/main/main";
import Footer  from "./component/footer/footer";
import { useState, useEffect } from 'react';


let AllData = [];

export default () =>{


    const [Data, setData] = useState([]);

    useEffect(() => {
        console.log('fetch')
        
            fetch(`https://react-cdp-api.herokuapp.com/movies/`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                AllData = [ ...json.data ];
                setData(json.data);
            })
        
        
    }, []);

    function searchFilm(value){
        
        let result = !value ? AllData : AllData.filter((elem)=> elem.title.toLowerCase() == value.toLowerCase())
        setData(result)
    }

    return (

        <>
        <div className={styles.wrapper}> 
                 <Header search={searchFilm} />
                 <Main  data ={Data}/>
                <Footer />
    
        </div>,
       </> 
    )
}