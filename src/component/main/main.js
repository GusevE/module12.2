import Film from './Film'
import styles  from './main.css'


export default (props) => {

    return (
                  <div className={styles.block}>

{            props.data.length ?      
             props.data.map((elem, inx) => (
                 <Film key={ inx } poster={elem.poster_path } title={elem.title } genres={elem.genres }  date={elem.release_date }/>
            ))
        
                :
            <h1>No films</h1>
    }   

</div>
      
    )
}     