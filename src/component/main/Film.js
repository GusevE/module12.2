import styles  from './main.css'

export default (props) => {

    return (
                  <div className={styles.item}>
                        <img src={props.poster}/>
                        <div className={styles.title}>{ props.title }</div>
                        <div className={styles.genres}>{ props.genres.splice(1,2).join(' ') } </div>
                        <div className={styles.date}>{ props.date.slice(0,4)} </div>
                    </div>
           
      )
  }