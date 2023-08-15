import React, { useState } from "react";
import "./TableHeader.css";

interface TableHeaderProps {
  columns: string[];
  onSort: (column: string, sortDirection: string) => void;
  selection: "single" | "multi";
  enableSorting: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  selection,
  enableSorting,
  onSort,
}) => {
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (column: string) => {
    if (!enableSorting) {
      return;
    }
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortedColumn(column);
    setSortDirection(newSortDirection);
    onSort(column, newSortDirection);
  };

  const shouldAddExtraHeader = () => {
    return selection && (selection == "multi" || selection == "single");
  };

  const renderSortingIcon = (column: string) => {
    return (
      <div className="icon">
        {sortedColumn === column ? (
          <button
            className={`sort-button sort-button-bg ${sortDirection}`}
            onClick={() => handleSort(column)}
          >
            <span className="sort-icon">&#8595;</span>
          </button>
        ) : (
          <button className={`sort-button`} onClick={() => handleSort(column)}>
            <span className="sort-icon">&#8691;</span>
          </button>
        )}
      </div>
    );
  };

  return (
    <thead>
      <tr className="table-header">
        {shouldAddExtraHeader() && <th />}
        {columns.map((column, index) => (
          <th
            key={index}
            onClick={() => handleSort(column)} // Handle sorting click
            className={sortedColumn === column ? "sorted" : ""}
          >
            <div className="text-and-icon-container">
              <span className="text">{column}</span>
              {enableSorting && renderSortingIcon(column)}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
