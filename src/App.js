import React, { useState } from 'react';
import DropDown from "./components/DropDown";

function App() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
    { label: 'Yellow', value: 'yellow' },
  ];

  return <DropDown
    options={options}
    value={selectedOption}
    onChange={handleSelectOption} />;

}

export default App;
