import React from 'react';
import './TableHeader.css';

interface TableHeaderProps {
  columns: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr className="table-header">
        {columns.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
