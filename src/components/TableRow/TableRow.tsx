import React from "react";
import "./TableRow.css";
import RadioButton from "../RadioButton";
import CheckBox from "../CheckBox";

interface DataRow {
  id: number;
  columns: string[];
}

interface TableRowProps {
  row: DataRow;
  isSelected: boolean;
  isLastRow: boolean;
  selection: "single" | "multi";
  onSelect: () => void;
  onRadioSelect: (rowId: number) => void;
  onCheckboxSelect: (rowId: number) => void;
}

const TableRow: React.FC<TableRowProps> = ({
  row,
  isLastRow,
  isSelected,
  selection,
  onSelect,
  onRadioSelect,
  onCheckboxSelect,
}) => {
  return (
    <tr
      className={`table-row ${isSelected ? "selected-row" : ""}`}
      onClick={onSelect}
    >
      {selection && (
        <td>
          {selection == "single" ? (
            <RadioButton
              checked={isSelected}
              onChange={() => onRadioSelect(row.id)}
            />
          ) : (
            <CheckBox
              checked={isSelected}
              onChange={() => onCheckboxSelect(row.id)}
            />
          )}
        </td>
      )}
      {row.columns.map((value, index) => (
        <td className={`${isLastRow ? "" : "table-row-border"}`} key={index}>
          {value}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
