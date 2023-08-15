// Table.d.ts
declare module 'react-table-component/Table' {
    import { ReactNode } from 'react';
  
    interface DataRow {
      id: number;
      columns: string[];
    }
  
    interface TableProps {
      data: DataRow[];
      columns: string[];
    }
  
    const Table: React.FC<TableProps>;
  
    export default Table;
  }