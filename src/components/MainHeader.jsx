//dependencies
import React from "react";
//assets
import moment from "moment";
import "moment/locale/es";
//components
import Title from "./Title";
import Description from "./Description";
//language config: moment library
moment.updateLocale("es");

function MainHeader({ dateIn, dateOut, size, price, country }) {
  //Main Title of the app
  const appName = "Descansar.com";
  //converts value from size filter into text
  const hotelSize = (size) => {
    switch (size) {
      case "1":
        return "pequeños ";
      case "2":
        return "medianos ";
      case "3":
        return "grandes ";
      default:
        return "";
    }
  };
  //converts value from price filter into text
  const hotelPrice = (price) => {
    switch (price) {
      case "1":
        return "de precio muy económico ";
      case "2":
        return "de precio estándar ";
      case "3":
        return "de precio elevado ";
      case "4":
        return "de precio muy elevado ";
      default:
        return "";
    }
  };
  //converts value from country filter into text
  const hotelCountry = (country) => {
    switch (country) {
      case "1":
        return "en Argentina ";
      case "2":
        return "en Brasil ";
      case "3":
        return "en Chile ";
      case "4":
        return "en Uruguay ";
      default:
        return "";
    }
  };
  //converts date received from calendars in text
  const dateFrom = (dateIn) => {
    if (Object.keys(dateIn).length !== 0) {
      const dateA = moment(dateIn);
      const dateAFormat = dateA.format("dddd D [de] MMMM [del] YYYY");
      return `desde el ${dateAFormat}`;
    }
    return "";
  };
  const dateTo = (dateOut) => {
    if (
      Object.keys(dateOut).length !== 0 &&
      moment(dateOut) >= moment(dateIn)
    ) {
      const dateB = moment(dateOut);
      const dateBFormat = dateB.format("dddd D [de] MMMM [del] YYYY");
      return `hasta el ${dateBFormat}`;
    }
    return "";
  };
  return (
    // MainHeader: contains Title and Description
    <header className="hero-body">
      <Title appName={appName} />
      <Description
        hotelSize={hotelSize(size)}
        hotelPrice={hotelPrice(price)}
        hotelCountry={hotelCountry(country)}
        dateFrom={dateFrom(dateIn)}
        dateTo={dateTo(dateOut)}
      />
    </header>
  );
}

export default MainHeader;
