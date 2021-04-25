import constants from "../../constants";
import React from "react";

const TermInput = ({ term, setTerm }) => {
  const onChange = (ev) => {
    setTerm(ev.target.value);
  };
  return (
    <div>
      <label htmlFor="term">Term:</label>
      <select value={term} onChange={onChange} id="term">
        {constants.TermYears.map((year) => {
          return (
            <option value={year} key={year + "term"}>
              {year > 1 ? `${year} years` : `${year} year`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default TermInput;
