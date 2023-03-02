import React from 'react';

function AccordionItem(props) {
  const { index, isOpen, title, content, onClick } = props;

  return (

    <div className="px-3">
      <div
        className="flex justify-between items-center p-4 cursor-pointer select-none text-white bg-[#151312] border-t-[1px] border-b-[1px] border-gray-100"
        onClick={() => onClick(index)}
      >
        <div className="text-2xl">{title}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transform transition-transform duration-200 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="p-8 bg-black text-white font-thin">{content}</div>
      )}
    </div>
  );
}

export default AccordionItem;
