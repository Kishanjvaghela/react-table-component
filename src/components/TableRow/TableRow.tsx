import React from 'react';

interface DataRow {
  id: number;
  columns: string[];
}

interface TableRowProps {
  row: DataRow;
  isSelected: boolean;
  onSelect: () => void;
}

const TableRow: React.FC<TableRowProps> = ({ row, isSelected, onSelect }) => {
  return (
    <tr className={isSelected ? 'selected' : ''} onClick={onSelect}>
      {row.columns.map((value, index) => (
        <td key={index}>{value}</td>
      ))}
    </tr>
  );
};

export default TableRow;
