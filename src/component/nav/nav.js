import styles  from './nav.css'


export default (props) => {

    return (
                  <div className={styles.main}>
                      <div className={styles.item} > {props.count} Movies found</div> 
                      <div className={styles.item}> Sort By</div> 
                      <div className={styles.item} onClick={ () => props.sort('release_date')}> realese data</div> 
                      <div className={styles.item} onClick={ () => props.sort('vote_average')}> rating</div> 
                  </div>
      )
  }