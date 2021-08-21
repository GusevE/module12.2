import Film from './Film'
import styles  from './main.css'


export default (props) => {

    return (
                  <div className={styles.block}>

{                  
             props.data.map((elem, inx) => (
                 <Film key={ inx } poster={elem.poster_path } title={elem.title } genres={elem.genres }  date={elem.release_date }/>
            ))}   

</div>
      
    )
}     