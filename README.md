# knex-seed-xlsx
Knex seed from xlsx file

## Basic usage
```js
const seedXlsx = require('knex-seed-xlsx');

exports.seed = seedXlsx('master-data.xlsx', [
  'table1',
  'table2',
  'table3',
]);
```

Sheet names in xlsx file and the table names should be same
