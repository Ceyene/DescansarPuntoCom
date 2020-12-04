//dependencies
import React from "react";

//it renders subtitle with filters selected options
function Description({
  dateFrom,
  dateTo,
  hotelSize,
  hotelPrice,
  hotelCountry
}) {
  return (
    <h3 className="subtitle 3">
      Búsqueda de hoteles <span className="has-text">{hotelSize}</span>{" "}
      <span className="has-text">{hotelPrice}</span>{" "}
      <span className="has-text">{hotelCountry}</span>{" "}
      <span className="has-text">{dateFrom}</span>{" "}
      <span className="has-text">{dateTo}</span>{" "}
    </h3>
  );
}

export default Description;
