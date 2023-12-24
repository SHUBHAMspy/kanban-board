import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const Dropdown = ({ options, onSelect,style, context }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (e) => {
    const {value,id} = e.target
    console.log(value);
    setSelectedOption(value);
    setIsOpen(false);
    onSelect(value,id)  
  };

  return (
    <div className="relative inline-block text-left ">
      <>
        {/* Reason to choose button is button is flexible for custom styling whereas styling Select is very hard and sometimes does not give desired look and style */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-between items-center w-full rounded-md border-[1px] border-[#e6e7eb] dark:border-[#4a4a4a] shadow-[0_0_8px_0_rgb(0,0,0,0.1)] dark:shadow-[0_0_8px_0_rgb(255,255,255,0.13)] px-4 py-2 gap-3 bg-slate-200 dark:bg-[#161B22] dark:text-white text-sm font-medium text-gray-700 shadow-[0px 0px 8px 0px #0000001a] dark:dark:shadow-[#ffffff22]"
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
        <div className={`${options.length > 2 ? `overflow-hidden h-40 overflow-y-auto`: `h-max`} origin-top-left  absolute left-0 top-14  w-72 rounded-md border-[1px] border-[#e6e7eb] dark:border-[#4a4a4a] shadow-[0_0_8px_0_rgb(0,0,0,0.1)] dark:shadow-[0_0_8px_0_rgb(255,255,255,0.13)] bg-white ring-1 ring-black ring-opacity-5 z-50 dark:bg-[#161B22] dark:text-white`}>
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map(({option,dropdownOptions,componentType}) => (
              <div
                key={option}
                // onClick={() => handleSelect(option)}
                className="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 dark:border-[#4a4a4a] dark:bg-[#161B22] dark:text-white"
                role="menuitem"
              >
                <span className='text-base text-[#8D8D8D]'>{option}</span>
                {
                  componentType === 'Dropdown'
                  ? (
                    <select id={option}  onChange={handleSelect} className='border-2 py-1 pr-8 pl-2 rounded-md cursor-pointer text-base dark:bg-[#161B22] dark:text-white'>
                      {
                        dropdownOptions.map(({label,value}) => (
                          <option value={value}>{label}</option>
                        ))
                      }
                      
                    </select>
                  ): null
                }
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
