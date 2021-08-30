import Film from './Film'
import './main.css'
import NoFilms from "../../comp/noFilms/noFilms"

export default (props:any) => {

    return (
             <div className="block">

{            props.data.length ?      
             props.data.map((elem:any, inx:any) => (
                 <Film key={ inx } poster={elem.poster_path } title={elem.title } genres={elem.genres }  date={elem.release_date }/>
            ))
        
                :
            <NoFilms />
    }   

</div>
      
    )
}     