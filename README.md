# knex-seed-xlsx

Knex seed from xlsx file

## Basic usage

```js
const seedXlsx = require('knex-seed-xlsx');

exports.seed = seedXlsx('master-data.xlsx', ['table1', 'table2', 'table3']);
```

### Notes

- Sheet names in xlsx file and the table names should be same
- First row of each sheet should be column names

```
+----+-----------+-------+
| id | name      | price |
+----+-----------+-------+
| 1  | Product A | 1000  |
+----+-----------+-------+
| 2  | Product B | 2000  |
+----+-----------+-------+
| 3  | Product C | 3000  |
+----+-----------+-------+
```
