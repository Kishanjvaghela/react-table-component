import React, { useState } from "react";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import "./Table.css";

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
  const [sortedData, setSortedData] = useState<DataRow[]>(data);

  const handleRowSelect = (rowId: number) => {
    // Handle row selection
  };

  const handleSort = (column: string, sortDirection: string) => {
    const sorted = [...sortedData].sort((a, b) => {
      const aValue = a.columns[columns.indexOf(column)];
      const bValue = b.columns[columns.indexOf(column)];
      return aValue.localeCompare(bValue); // Basic string comparison
    });
    console.log('column', column, sortDirection);
    if (sortDirection === 'desc') {
      setSortedData(sorted.reverse());
    } else {
      setSortedData(sorted);
    }
  };

  return (
    <div className="table-container">
      <table className="table">
        <TableHeader columns={columns} onSort={handleSort} />
        <tbody>
          {sortedData.map((row) => (
            <TableRow
              key={row.id}
              row={row}
              isSelected={selectedRows.includes(row.id)}
              onSelect={() => handleRowSelect(row.id)}
              isLastRow={false}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
