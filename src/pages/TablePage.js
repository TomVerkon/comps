import React from 'react';
import Table from '../components/Table';

const TablePage = () => {

  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 6 },
    { name: 'Lemon', color: 'bg-yellow-500', score: 2 },
    { name: 'Lime', color: 'bg-green-500', score: 3 },
  ];
  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default TablePage;
