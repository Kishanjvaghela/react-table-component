import React, { useState } from "react";
import "./TableHeader.css";

interface TableHeaderProps {
  columns: string[];
  onSort: (column: string, sortDirection: string) => void; // Callback to handle sorting
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns, onSort }) => {
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (column: string) => {
    if (sortedColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(column);
      setSortDirection("asc");
    }
    onSort(column, sortDirection);
  };

  return (
    <thead>
      <tr className="table-header">
        {columns.map((column, index) => (
          <th
            key={index}
            onClick={() => handleSort(column)} // Handle sorting click
            className={sortedColumn === column ? "sorted" : ""}
          >
            <div className="text-and-icon-container">
              <span className="text">{column}</span>
              <div className="icon">
                {sortedColumn === column ? (
                  <button
                    className={`sort-button sort-button-bg ${sortDirection}`}
                    onClick={() => handleSort(column)}
                  >
                    <span className="sort-icon">&#8595;</span>
                  </button>
                ) : (
                  <button
                    className={`sort-button`}
                    onClick={() => handleSort(column)}
                  >
                    <span className="sort-icon">&#8691;</span>
                  </button>
                )}
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
