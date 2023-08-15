
# react-table-component

## Install

Add registry in .npmrc

    @kishanjvaghela:registry=https://npm.pkg.github.com 

Package installation

    npm install @kishanjvaghela/react-table-component

or

    yarn add @kishanjvaghela/react-table-component

## Import

    import { Table } from "@kishanjvaghela/react-table-component";

## Uses


    const columns = ["Name", "Age", "Country"];
      const data = [
        { id: 1, columns: ["John", "30", "USA"] },
        { id: 2, columns: ["Alice", "25", "Canada"] },
        // ... other data ...
      ];
    
      <Table columns={columns} data={data} />

## Attributes
|props|description|
|--|--|
| columns | array of strings for header|
| data | array of object (id, columns) for row |
| enableSorting | if `true`, header will have sorting icon |
| selection | `'single'` -> radio button selection,  `'multi'` -> checkbox selection |
