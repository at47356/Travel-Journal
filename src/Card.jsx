export default function Card (props){
    return(
      
       <div className="card-div">
         <img src={`${props.img}`} className="main-img" />
         <div className="info-div">
            <div className="location-div">
                <img src="./locationicon.svg" alt="" className="location-icon" />
                <p className="location">{`${props.location}`}</p>
                <a href={`${props.locationlink}`} className="location-link">View on Google Maps</a>
            </div>
            <p className="card-title">{`${props.title}`}</p>
            <p className="card-date">{`${props.date}`}</p>
            <p className="card-description">{`${props.description}`}</p>
         </div>
       </div>
      
    )
} 