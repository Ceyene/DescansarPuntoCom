//dependencies
import React, { useState, useEffect } from "react";
//assets
import hotelsData, { today } from "../assets/data";
import { filterState, dateState } from "../assets/const";
import moment from "moment";
//styles
import "../styles/App.scss";
//components
import MainHeader from "./MainHeader";
import FilterList from "./FilterList";
import HotelList from "./HotelList";

function App() {
  //state with hotels list
  const [hotels, setHotels] = useState([]);
  //state with select filters value
  const [filters, setFilters] = useState(filterState);
  //state with input date filters value
  const [dates, setDates] = useState(dateState);

  /* --------------------------------- */
  //first time it renders, the app shows all, without filters
  useEffect(() => {
    setHotels(hotelsData);
  }, []);
  //when "filters" state updates,
  //this function compares and change hotels array
  useEffect(() => {
    let hotelsCopy = hotelsData.filter((hotel) => {
      return (
        //it filters hotels by country
        (countriesNum(hotel.country) === filters[0].value ||
          filters[0].value === "0") &&
        //it filters hotels by price
        (`${hotel.price}` === filters[1].value || filters[1].value === "0") &&
        //it filters hotels by size, classifying them from 0 to 3
        (sizeHotels(hotel.rooms) === filters[2].value ||
          filters[2].value === "0")
      );
    });
    setHotels(hotelsCopy);
  }, [filters]);
  //when "dates" state updates
  //this function compares and show hotels availability
  useEffect(() => {
    //first, validates if 1st filter isn´t empty
    if (Object.keys(dates[0].value).length !== 0) {
      //validates if selected checkin is before today
      if (
        moment(dates[0].value).format("YYYY-MM-DD") <
        moment(today).format("YYYY-MM-DD")
      ) {
        alert("Por favor, elija una fecha actual o posterior al día de hoy");
        //then, it validates if 2nd filter isn't empty
      } else if (Object.keys(dates[1].value).length !== 0) {
        //and it validates if checkout isn´t previous to checkin
        if (
          moment(dates[0].value).format("YYYY-MM-DD") >
          moment(dates[1].value).format("YYYY-MM-DD")
        ) {
          alert(
            "Por favor, elija una fecha de salida posterior a la de entrada"
          );
          setHotels(hotelsData);
        } else {
          //it applies date filters
          const availableHotels = hotelsData.filter((hotel) => {
            let selectedFrom = moment(dates[0].value).format("YYYY-MM-DD");
            let selectedTo = moment(dates[1].value).format("YYYY-MM-DD");
            let availableFrom = moment(hotel.availabilityFrom).format(
              "YYYY-MM-DD"
            );
            let availableTo = moment(hotel.availabilityTo).format("YYYY-MM-DD");

            return selectedFrom >= availableFrom && selectedTo <= availableTo;
          });
          setHotels(availableHotels);
        }
      }
    }
  }, [dates]);
  /* --------------------------------- */
  //handles state from select filters
  const handleSelect = (i) => {
    return (e) => {
      const copyFilters = [...filters];
      copyFilters[i].value = e.target.value;
      setFilters(copyFilters);
    };
  };
  //handles state from input date filters
  const handleInput = (i) => {
    return (e) => {
      const copyDates = [...dates];
      copyDates[i].value = e.target.value;
      setDates(copyDates);
    };
  };
  //it resets state from filters
  //country, price and size reset
  const handleReset = () => {
    const filtersCopy = filters.map((filter) => {
      filter.value = "0";
      return filter;
    });
    setFilters(filtersCopy);
    //date reset
    const datesCopy = dates.map((date) => {
      date.value = {};
      return date;
    });
    setDates(datesCopy);
    //renderize all, without filters
    setHotels(hotelsData);
  };
  //it classifies hotels by number of rooms
  const sizeHotels = (size) => {
    if (size <= 10) return "1";
    if (size >= 11 && size <= 20) return "2";
    if (size >= 21) return "3";
    return "0";
  };
  //it classifies countries by number
  const countriesNum = (country) => {
    if (country === "Argentina") return "1";
    if (country === "Brasil") return "2";
    if (country === "Chile") return "3";
    if (country === "Uruguay") return "4";
    return "0";
  };
  /* --------------------------------- */
  const dateIn = dates[0].value;
  const dateOut = dates[1].value;
  const country = filters[0].value;
  const price = filters[1].value;
  const size = filters[2].value;

  return (
    <div className="App">
      <MainHeader
        dateIn={dateIn}
        dateOut={dateOut}
        size={size}
        price={price}
        country={country}
      />
      <FilterList
        dates={dates}
        inputHandler={handleInput}
        filters={filters}
        selectHandler={handleSelect}
        setHotels={setHotels}
        resetHandler={handleReset}
      />
      <HotelList hotels={hotels} />
    </div>
  );
}

export default App;
