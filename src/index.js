import React from 'react';
import PropTypes from 'prop-types';

/**
 * Dropdown Component
 * A reusable dropdown (select) component that renders a list of options.
 * Allows the user to select an option and triggers an onChange callback.
 *
 * @param {Array} options - List of option objects to display in the dropdown. Each option object should contain 'value' and 'label' properties.
 * @param {string} selectedOption - The currently selected option value. Controls the dropdown's selected state.
 * @param {function} onChange - Callback function to handle changes to the selected option. Receives the selected option's value as a parameter.
 * @param {string} placeholder - Placeholder text displayed as the first disabled option when no option is selected.
 */
const Dropdown = ({ options, selectedOption, onChange, placeholder }) => (
  <select 
    // Sets the selected option in the dropdown. Controlled component using the selectedOption prop.
    value={selectedOption} 
    // Calls the onChange function with the new selected value when an option is chosen
    onChange={(e) => onChange(e.target.value)}
  >
    {/* Placeholder option, shown when no option is selected */}
    <option value="" disabled>
      {placeholder || "Select an option"} {/* Default text if no placeholder is provided */}
    </option>
    
    {/* Map through options array to create each dropdown item */}
    {options.map((option, index) => (
      <option
        key={option.value || index}  // Unique key for each option item, using value if available, otherwise index
        value={option.value || ''}    // Sets the option value; if missing, uses an empty string as a fallback
      >
        {option.label}  {/* Display label for the option; no fallback as label is required in prop types */}
      </option>
    ))}
  </select>
);

// PropTypes enforce expected prop types for better development experience and error handling
Dropdown.propTypes = {
  // Array of option objects, each with a required 'value' and 'label'
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired, // Option value, used as the dropdown item value
      label: PropTypes.string.isRequired, // Option label, shown to the user in the dropdown list
    })
  ).isRequired,
  selectedOption: PropTypes.string,         // The selected option's value
  onChange: PropTypes.func.isRequired,      // Required callback function for handling option selection changes
  placeholder: PropTypes.string,            // Optional placeholder text displayed when no option is selected
};

// Exporting the Dropdown component to use in other parts of the app
export default Dropdown;