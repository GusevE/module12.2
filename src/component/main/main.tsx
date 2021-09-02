import NoFilms from '../../comp/NoFilms'
import Film from './Film'
import './main.css'


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