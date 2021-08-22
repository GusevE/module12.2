import './main.css'

export default (props) => {

    return (
                  <div className="item">
                        <img src={props.poster}/>
                        <div className="title">{ props.title }</div>
                        <div className="genres">{ props.genres.splice(1,2).join(' ') } </div>
                        <div className="date">{ props.date.slice(0,4)} </div>
                    </div>
           
      )
  }