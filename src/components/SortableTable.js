import React, { useState } from 'react';
import Table from './Table';
import { FaSortDown, FaSortUp, FaSort } from 'react-icons/fa';

const SortableTable = (props) => {

  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label) => {

    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const upDatedConfig = config.map((colDef) => {
    if (!colDef.sortValue) {
      return colDef;
    }
    return {
      ...colDef,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(colDef.label)}
        >
          <div className="flex items-center">
            {getIcons(colDef.label, sortBy, sortOrder)}
            {colDef.label}
          </div>
        </th>
      )
    };
  });

  // Only sort data if sortOrder and sortBy are not null
  // Make a copy of the 'data' prop
  // find correct sortValue function and use it to sort data

  let sortedData = data;
  if (sortOrder && sortBy) {
    // get sortValue function
    const { sortValue } = config.find(colDef => colDef.label === sortBy);
    //console.log(typeof sortValue(sortedData[0]));
    sortedData = [...data];
    const reverseOrder = sortOrder === 'asc' ? 1 : -1;
    // set default sortFn to string comparator 
    let sortFn = (a, b) => a.localeCompare(b) * reverseOrder;
    if (typeof sortValue(sortedData[0]) === 'number') {
      // set sortFn to numeric comparator
      sortFn = (a, b) => (a - b) * reverseOrder;
    }

    // const strSortFn = (a, b) => a.localeCompare(b) * reverseOrder;
    // const numSortFn = (a, b) => (a - b) * reverseOrder;
    // const sortValueType = sortValue(sortedData[0].sortValue);
    // console.log('sortValueType', sortValueType);
    sortedData = [...data].sort((a, b) => {
      return sortFn(sortValue(a), sortValue(b));
      // const valueA = sortValue(a);
      // const valueB = sortValue(b);
      // if (typeof valueA === 'string') {
      //   return strSortFn(valueA, valueB);
      // } else {
      //   return numSortFn(valueA, valueB);
      // }
    });
  }

  return <Table {...props} data={sortedData} config={upDatedConfig} />;
};

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <FaSort />;
  }
  if (sortOrder === null) {
    return <FaSort />;
  } else if (sortOrder === 'asc') {
    return <FaSortUp />;
  } else if (sortOrder === 'desc') {
    return <FaSortDown />;
  }

}

export default SortableTable;
