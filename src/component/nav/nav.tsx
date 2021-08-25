import './nav.css'


export default (props:any) => {

    return (
        <>
        
                  <div className="main">
                      {            props.count > 0 ?  
                      <>
                      <div className="item__nav" > {props.count} Movies found</div> 
                      <div className="item__nav item__nav_sort" > Sort By</div> 
                      <div className="item__nav item__action" onClick={ () => props.sort('release_date')}> realese data</div> 
                      <div className="item__nav item__action item__action_color" onClick={ () => props.sort('vote_average')}> rating</div> 
                      </>
                      : null}
                  </div>
          
      </>
      )
      
  }