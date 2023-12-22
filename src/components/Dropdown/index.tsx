import React from "react";

export interface DropdownItem {
  value: string;
  label: string;
}

interface DropdownProps {
  placeholder: string;
  items: { value: string; label: string }[];
  onSelect: (selectedValue: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ placeholder, items, onSelect }) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue);
  };
  return (
    <div>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="py-[10px] px-[20px] w-full"
      >
        <option value="">{placeholder}</option>
        {items.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
