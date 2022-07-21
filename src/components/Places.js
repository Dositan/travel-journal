import "../styles/Places.css";

function Places(props) {
  return (
    <div className="places">
      <img
        className="places--preview"
        src={props.imageUrl}
        alt={props.title}
        height={168}
      />
      <div className="places--info">
        <div className="places--location">
          <img src="/images/location.png" alt="location" />
          <span>{props.location.toUpperCase()}</span>
          <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <span className="date">
          {props.startDate} - {props.endDate}
        </span>
        <p className="places--description">{props.description}</p>
      </div>
    </div>
  );
}

export default Places;
