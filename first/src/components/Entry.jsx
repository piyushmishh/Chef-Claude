import Markerimg from '../assets/marker.png';


export default function Entry(props){
  
    return(
        <article className="journal-entry">
  <div className="fuji-container">
    <img src={props.img.src} className="fuji" alt={props.img.alt} />
  </div>

  <div className="entry-info">
    <div className="entry-location">
      <img src={Markerimg} alt="Marker" />
      <span>{props.country}</span>
      <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
    </div>

    <h2 className="entry-title">{props.title}</h2>
    <p className="entry-date">{props.dates}</p>
    <p className="entry-desc">
      {props.text}
    </p>
  </div>
</article>

    )
}