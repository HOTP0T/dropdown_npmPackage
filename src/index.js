import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, selectedOption, onChange, placeholder }) => (
  <select value={selectedOption} onChange={(e) => onChange(e.target.value)}>
    <option value="" disabled>{placeholder || "Select an option"}</option>
    {options.map((option, index) => (
      <option
        key={option.value || index} 
        value={option.value || ''}  
      >
        {option.label}  {/* Display only the label without a fallback */}
      </option>
    ))}
  </select>
);

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Dropdown;