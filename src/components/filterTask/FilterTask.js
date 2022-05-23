import React from "react";
import "./FilterTask.css";

const FilterTask = ({ setToggleFilter }) => {
  return (
    <footer>
      <div className="menu-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="all"
            defaultChecked
            onClick={(e) => setToggleFilter(e.target.value)}
          />
          <label className="form-check-label">All</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="completed"
            onClick={(e) => setToggleFilter(e.target.value)}
          />
          <label className="form-check-label">Completed</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="uncompleted"
            onClick={(e) => setToggleFilter(e.target.value)}
          />
          <label className="form-check-label">Uncompleted</label>
        </div>
      </div>
    </footer>
  );
};

export default FilterTask;
