import React, { useState } from 'react';
import List from './List';

const FilteredList = ({ items }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search items"
        value={filter}
        onChange={handleFilterChange}
      />
      <List items={filteredItems} />
    </div>
  );
};

export default FilteredList;
