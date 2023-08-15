import React from "react";
import "./TableRow.css";

interface DataRow {
  id: number;
  columns: string[];
}

interface TableRowProps {
  row: DataRow;
  isLastRow: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const TableRow: React.FC<TableRowProps> = ({ row, isLastRow, isSelected, onSelect }) => {
  return (
    <tr
      className={`table-row ${isSelected ? "selected-row" : ""}`}
      onClick={onSelect}
    >
      {row.columns.map((value, index) => (
        <td className={`${isLastRow ? "" : "table-row-border"}`} key={index}>{value}</td>
      ))}
    </tr>
  );
};

export default TableRow;
