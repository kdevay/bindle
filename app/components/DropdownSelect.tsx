import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Option {
  value: string;
  label: string;
}

interface DropdownSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  className?: string;
  ariaOptionType?: string; // label for the types of options for screen readers
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  value,
  onChange,
  options,
  className,
  ariaOptionType,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find(option => option.value === value);

  const handleOptionSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    // Return focus to trigger after selection
    setTimeout(() => triggerRef.current?.focus(), 0);
  };

  const handleKeyDown = (event: React.KeyboardEvent, optionValue: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOptionSelect(optionValue);
    }
  };

  return (
    <div className={cn('relative min-w-[200px]', className)}>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        className='flex items-center justify-between w-full hover:bg-gray-50 p-2 px-4 transition-colors rounded-lg '
        aria-label={`open or close ${ariaOptionType} option listbox`}
        aria-expanded={isOpen}
        aria-haspopup='listbox'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='truncate font-medium text-gray-900'>
          {selectedOption?.label || 'Select sort option'}
        </span>
        {isOpen ? (
          <ChevronUp className='h-4 w-4 text-gray-600 flex-shrink-0' />
        ) : (
          <ChevronDown className='h-4 w-4 text-gray-600 flex-shrink-0' />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className='absolute top-full mt-1 left-0 right-0 bg-white rounded-lg shadow-lg border border-gray-200 z-50'>
          <div
            role='listbox'
            aria-label={`${ariaOptionType} options`}
            className='p-2 space-y-1 max-h-60 overflow-auto'
          >
            {options.map(option => (
              <button
                key={option.value}
                role='option'
                aria-selected={value === option.value}
                className={cn(
                  'flex items-center justify-between w-full p-2 text-sm text-left rounded-md',
                  'hover:cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none',
                  'transition-colors',
                  value === option.value && 'bg-blue-50 text-blue-900',
                )}
                onClick={() => handleOptionSelect(option.value)}
                onKeyDown={e => handleKeyDown(e, option.value)}
                tabIndex={0}
              >
                <span>{option.label}</span>
                {value === option.value && (
                  <Check className='h-4 w-4 text-blue-600' />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Invisible overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className='fixed inset-0 z-40'
          onClick={() => setIsOpen(false)}
          aria-hidden='true'
        />
      )}
    </div>
  );
};

export default DropdownSelect;
