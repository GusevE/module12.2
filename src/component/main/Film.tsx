import './main.css'

export default (props:any) => {

    return (
                  <div className="item">
                        <img src={props.poster}/>
                     <div className="item_block">
                         <div className="item_title">
                        <div className="title__item">{ props.title }</div>
                        <div className="genres">{ props.genres.splice(1,2).join(' ') } </div>
                        </div>
                       <div className= "itemBlock"> 
                        <div className="date">{ props.date.slice(0,4)} </div>
                        </div>
                      </div>  
                    </div>
           
      )
  }