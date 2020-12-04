//dependencies
import React from "react";
//components
import Hotel from "./Hotel";

//it renders all available hotels
function HotelList({ hotels }) {
  return hotels.length > 0 ? (
    <section className="container">
      {hotels.map((item) => (
        <Hotel
          key={item.slug}
          city={item.city}
          country={item.country}
          description={item.description}
          name={item.name}
          photo={item.photo}
          price={item.price}
          rooms={item.rooms}
        />
      ))}
    </section>
  ) : (
    //notification: it renders when there are no hotels available
    <div className="is-fluid">
      <div className="notification is-info is-light has-text-centered my-5">
        No hay hoteles disponibles con estas características. ¡Seguí buscando!
      </div>
    </div>
  );
}

export default HotelList;
