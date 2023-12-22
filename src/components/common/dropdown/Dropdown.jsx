import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const Dropdown = ({ options, onSelect,style, context }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if(context) onSelect(option,context)
    else onSelect(option)
    
  };

  return (
    <div className="relative inline-block text-left">
      <>
        {/* Reason to choose button is button is flexible for custom styling whereas styling Select is very hard and sometimes does not give desired look and style */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-between items-center w-full rounded-md border px-4 py-2 gap-3 bg-slate-200 text-sm font-medium text-gray-700"
        >
          <AdjustmentsHorizontalIcon className='w-6 h-6'/>
          <span>Display</span>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 ml-2 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 ml-2 text-gray-500" />
          )}
        </button>
      </>
      {isOpen && (
        <div className={`${options.length > 2 ? `overflow-hidden h-36 overflow-y-auto`: `h-max`} origin-top-right absolute right-0  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50`}>
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                style={{ fontFamily: option }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
