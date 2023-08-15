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
  selection: "single" | "multi";
}

const Table: React.FC<TableProps> = ({ data, columns, selection }) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [sortedData, setSortedData] = useState<DataRow[]>(data);

  const handleRowSelect = (rowId: number) => {
    // Handle row selection for radio button
    setSelectedRows([rowId]);
  };

  const handleRadioSelect = (rowId: number) => {
    // Handle radio button selection
    setSelectedRows([rowId]);
  };

  const handleCheckboxSelect = (rowId: number) => {
    // Handle checkbox selection (multi-select)
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const handleSort = (column: string, sortDirection: string) => {
    const sorted = [...sortedData].sort((a, b) => {
      const aValue = a.columns[columns.indexOf(column)];
      const bValue = b.columns[columns.indexOf(column)];
      return aValue.localeCompare(bValue); // Basic string comparison
    });
    console.log("column", column, sortDirection);
    if (sortDirection === "desc") {
      setSortedData(sorted.reverse());
    } else {
      setSortedData(sorted);
    }
  };

  return (
    <div className="table-container">
      <table className="table">
        <TableHeader
          columns={columns}
          selection={selection}
          onSort={handleSort}
        />
        <tbody>
          {sortedData.map((row) => (
            <TableRow
              key={row.id}
              row={row}
              selection={selection}
              isSelected={selectedRows.includes(row.id)}
              onSelect={() => handleRowSelect(row.id)}
              isLastRow={false}
              onRadioSelect={handleRadioSelect}
              onCheckboxSelect={handleCheckboxSelect}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
