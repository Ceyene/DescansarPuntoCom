//dependencies
import React from "react";

//it renders each date filter
function FilterDate({ name, value, inputHandler }) {
  return (
    <div className="control navbar__input">
      <input
        className={`select ${name}`}
        onChange={inputHandler}
        value={value}
        type="date"
        name={name}
      />
    </div>
  );
}

export default FilterDate;
