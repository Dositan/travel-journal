import location from "../images/location.png";

function Places(props) {
  return (
    <div className="places">
      <img className="places--preview" src={props.imageUrl} alt="preview" />
      <div className="places--info">
        <div className="places--location">
          <img src={location} alt="location" />
          <span>{props.location.toUpperCase()}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <span className="date">
          {props.startDate} - {props.endDate}
        </span>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Places;
