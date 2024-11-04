
# React Dropdown Component

[![npm link](https://img.shields.io/npm/v/@hotp0t/dropdown-package.svg)](https://www.npmjs.com/package/@hotp0t/dropdown-package)

A customizable and reusable dropdown (select) component for React, published on npm. This component allows you to easily create dropdown menus with custom options, placeholder text, and event handling for selected options.

## Installation

Install the package via npm:

```bash
npm i @hotp0t/dropdown-package
```

## Usage

To get started, import the `Dropdown` component and pass in your options, selected option, and onChange handler.

```javascript
import Dropdown from '@hotp0t/dropdown-package';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <Dropdown
      options={options}
      selectedOption={selectedOption}
      onChange={(value) => setSelectedOption(value)}
      placeholder="Select a fruit"
    />
  );
}
```

### Props

- `options` (required): An array of objects representing the dropdown options. Each object must have:
  - `value` (string): The unique value for the option.
  - `label` (string): The text displayed in the dropdown.
- `selectedOption` (optional): A string representing the currently selected option value.
- `onChange` (required): A callback function that receives the selected value when the user selects an option.
- `placeholder` (optional): A string that will appear as the default, disabled option when no option is selected.

### Example

```javascript
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

<Dropdown
  options={options}
  selectedOption="option1"
  onChange={(newValue) => console.log("Selected:", newValue)}
  placeholder="Choose an option"
/>;
```
