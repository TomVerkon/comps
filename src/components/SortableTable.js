import React from 'react';
import Table from './Table';
import { FaSortDown, FaSortUp, FaSort } from 'react-icons/fa';
import useSort from '../hooks/use-sort';

const SortableTable = (props) => {

  const { config, data } = props;

  const { setSortColumn, sortBy, sortOrder, sortedData } = useSort(data, config);



  const upDatedConfig = config.map((colDef) => {
    if (!colDef.sortValue) {
      return colDef;
    }
    return {
      ...colDef,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(colDef.label)}
        >
          <div className="flex items-center">
            {getIcons(colDef.label, sortBy, sortOrder)}
            {colDef.label}
          </div>
        </th>
      )
    };
  });

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
