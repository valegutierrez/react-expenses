import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const selectedOptionHandler = (event) => {
    props.setSelectedOption(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedOption} onChange={selectedOptionHandler}>
          {props.options.map(op => (
            <option value={op}>{op}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;