// Table.d.ts
declare module 'react-table-component/TableRow' {
    import { ReactNode } from 'react';
  
    interface TableRowProps {
      id: number;
      columns: string[];
    }
  
    const TableRow: React.FC<TableRowProps>;
  
    export default TableRow;
  }