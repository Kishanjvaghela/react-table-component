import React, { useState } from 'react';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import './Table.css';

interface DataRow {
  id: number;
  columns: string[];
}

interface TableProps {
  data: DataRow[];
  columns: string[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleRowSelect = (rowId: number) => {
    // Handle row selection based on your single/multi-select logic
    // Update the selectedRows state
  };

  return (
    <div className="table-container">
      <table className="table">
        <TableHeader columns={columns} />
        <tbody>
          {data.map((row, index) => (
            <TableRow
              key={row.id}
              row={row}
              isLastRow={index === data.length - 1}
              isSelected={selectedRows.includes(row.id)}
              onSelect={() => handleRowSelect(row.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
