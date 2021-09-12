import { useEffect } from "react";
import "./HeaderRouter.css"
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { Link } from 'react-router-dom';

export default ()=>{

    const { id } = useParams();

    // console.log(id);

    const dispatch = useDispatch();

    const Film = useSelector(state => state.Film);

    console.log('Film', Film);

    useEffect(() => {

        if(Film.id != id)
        {

        let url = `http://react-cdp-api.herokuapp.com/movies/${id}`;

        console.log(url);

        fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data);

                let url = `http://react-cdp-api.herokuapp.com/movies?&search=${ data.genres.toString() }`;

                console.log(url);
    
    
                fetch(url)
                .then(response => response.json())
                .then(json => {
        
                    console.log(json.data);
                   
                    dispatch({type: 'SEARCH_FILM', payload: json.data.filter((elem) => elem.id != id) });
                
                })

                dispatch({type: 'FILM', payload: data});
               
          
                
        
        })

    }

    });


    return(
        <div  className="container_one">
            <div className="container_text">netflixroulette</div>
            <Link to="/"><button className="btnheader" >search</button></Link>
            
            <div className="block_one">
                <div className="block_img">
                    <img  className="blo_img" src={Film.poster_path}/>
                </div>
                <div className="block_two"> 
                    <div className="block_two_title">
                        <div className="block_title">{Film.title} </div>
                        <div className="vote_average">{Film.vote_average} </div>
                    </div>
                    <div className="block_four">
                        <div className="release_date">{Film.release_date} </div>
                        <div className="runtime">{Film.runtime}Min </div>
                    </div>
                    <div className="block_three"> {Film.overview} </div>
                     </div>

                        
                </div>
                
          </div>
         
         
         
    )
}