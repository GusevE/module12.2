import NoFilms from '../../comp/NoFilms'
import Film from './Film'
import './main.css'
import { useSelector, useDispatch } from "react-redux";


export default () => {

    const state = useSelector(state => state);

    console.log(state.Data);

    return (
             <div className="block">

 {            state.Data.length ?      
             state.Data.map((elem, inx) => (
                 <Film key={ inx } poster={elem.poster_path } title={elem.title } genres={elem.genres }  date={elem.release_date }/>
            ))
        
                :
            <NoFilms />
    }    

</div>
      
    )
}     