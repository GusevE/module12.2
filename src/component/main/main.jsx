import NoFilms from '../../comp/NoFilms'
import Film from './Film'
import './main.css'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


export default () => {

    const state = useSelector(state => state);

    console.log(state.Data);

    return (
             <div className="block">

 {            state.Data.length ?      
              state.Data.map((elem, inx) => (
                <Link to={`/film/${elem.id}`}>
                 <Film key={ inx } poster={elem.poster_path } title={elem.title } genres={elem.genres }  date={elem.release_date }/>
                </Link>
            ))
        
                :
            <NoFilms />
    }    

</div>
      
    )
}     