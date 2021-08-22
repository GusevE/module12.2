import Film from './Film'
import './main.css'


export default (props) => {

    return (
             <div className="block">

{            props.data.length ?      
             props.data.map((elem, inx) => (
                 <Film key={ inx } poster={elem.poster_path } title={elem.title } genres={elem.genres }  date={elem.release_date }/>
            ))
        
                :
            <div className="film">No films</div>
    }   

</div>
      
    )
}     