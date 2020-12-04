//dependencies
import React from "react";
//components
import Filter from "./Filter";
import FilterDate from "./FilterDate";

//it renders the group of filters
function FilterList({
  dates,
  inputHandler,
  filters,
  selectHandler,
  resetHandler
}) {
  return (
    <section className="navbar is-fullhd is-flex">
      {dates.map((date) => (
        <FilterDate
          inputHandler={inputHandler(date.id)}
          key={date.id}
          name={date.name}
          value={date.value}
        />
      ))}

      {filters.map((filter) => (
        <Filter
          key={filter.id}
          selectHandler={selectHandler(filter.id)}
          data={filter.options}
          name={filter.name}
          value={filter.value}
        />
      ))}
      <button className="has-text-white btn" onClick={resetHandler}>
        Resetear filtros
      </button>
    </section>
  );
}

export default FilterList;
