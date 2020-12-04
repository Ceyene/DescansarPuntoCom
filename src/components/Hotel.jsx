//dependencies
import React from "react";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faMapMarker,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";

function Hotel(props) {
  //data received by props
  const { city, country, description, name, photo, price, rooms } = props;
  //it renders price of each hotel, according to its number
  const priceSymbols = (price) => (
    <div className="Hotel__Price mx-1">
      <span className={price > 0 ? "black" : "grey"}>
        <FontAwesomeIcon icon={faDollarSign} />
      </span>
      <span className={price > 1 ? "black" : "grey"}>
        <FontAwesomeIcon icon={faDollarSign} />
      </span>
      <span className={price > 2 ? "black" : "grey"}>
        <FontAwesomeIcon icon={faDollarSign} />
      </span>
      <span className={price > 3 ? "black" : "grey"}>
        <FontAwesomeIcon icon={faDollarSign} />
      </span>
    </div>
  );
  //card: it renders each individual hotel in the list
  return (
    <article className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={photo} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <h3 className="title is-4">{name}</h3>
        <div className="content">
          <p>{description}</p>
          <div className="content">
            <span className="icon black">
              <FontAwesomeIcon icon={faMapMarker} />
            </span>
            <small className="SmallText">
              {city}, {country}
            </small>
          </div>
          <div className="is-flex is-justify-content-space-between">
            <div className="Hotel__Rooms">
              <FontAwesomeIcon icon={faBed} className="black mx-1" />
              <small className="SmallText">{rooms} Habitaciones</small>
            </div>
            {priceSymbols(price)}
          </div>
        </div>
      </div>
      <button className="button is-primary is-fullwidth">Reservar</button>
    </article>
  );
}

export default Hotel;
