import React from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';

const App = () => {
  const produce = [
    { name: "Apple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Carrot", type: "Vegetable" }
  ];

  return (
    <div>
      <HelloWorld name="Nurin Ahmed" />
      <Counter />
      <FilteredList items={produce} />
    </div>
  );
};

export default App;
