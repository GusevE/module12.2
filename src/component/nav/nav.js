import './nav.css'


export default (props) => {

    return (
                  <div className="main">
                      <div className="item" > {props.count} Movies found</div> 
                      <div className="item"> Sort By</div> 
                      <div className="item item__action" onClick={ () => props.sort('release_date')}> realese data</div> 
                      <div className="item item__action" onClick={ () => props.sort('vote_average')}> rating</div> 
                  </div>
      )
  }