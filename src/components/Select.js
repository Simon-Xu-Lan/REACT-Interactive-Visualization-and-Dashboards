import React from 'react';

function Select(props) {
  return (
    <div class="well">
      <h5>Test Subject ID No.:</h5>
      <select onChange={props.handleSelectChange} value={props.value}>
        {props.options.map((d) => (
          <option>{d}</option>
        ))}
      </select>
    </div>
  );
}
export default Select;
