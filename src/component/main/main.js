
import styles  from './main.css'




export default (props) => {

    
    
    return (
      <div className={styles.container} >
        <div className={styles.main}></div>
        { props.data.length ?
        <div className={styles.block}>
            { props.data.map((elem, index) => (
                <div  key={ index } className={styles.item}>
                  <img src={elem.poster_path}/>
                  <div className={styles.title}>{ elem.title }</div>
                  <div className={styles.genres}>{ elem.genres.splice(1,2).join(' ') } </div>
                  <div className={styles.date}>{ elem.release_date.slice(0,4)} </div>

                  </div>
                
            ))}
           </div>
        :
        <h1>No todos</h1>
        }

        </div>
    )
}