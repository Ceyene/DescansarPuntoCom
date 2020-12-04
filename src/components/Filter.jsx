//dependencies
import React from "react";

//it renders each select filter
function Filter({ data, name, value, selectHandler }) {
  return (
    <div className="control navbar__select is-flex">
      <select
        value={value}
        onChange={selectHandler}
        className={`select ${name}`}
        name={name}
      >
        {data.map((item, index) => (
          <option value={index} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
