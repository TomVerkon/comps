import React, { useState, useRef, useEffect } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

export default function DropDown({ options, value, onChange }) {

  console.log(value);

  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClicked = (option) => {
    setIsOpen(!isOpen);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (<div
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      onClick={() => handleOptionClicked(option)}
      key={option.value}
    >
      {option.label}
    </div>);
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};
