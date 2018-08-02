import Knex from 'knex';
import * as xlsx from 'xlsx';

async function getData(wb: xlsx.WorkBook, table: string) {
  const ws = wb.Sheets[table];
  const headers = [];
  for (let c = 0; ; c++) {
    const notation = xlsx.utils.encode_cell({ c, r: 0 });
    const cell = ws[notation];
    if (cell == null) {
      break;
    }
    headers.push(cell.v);
  }
  const data = [];
  for (let r = 1; ; r++) {
    const item: any = {};
    for (let c = 0; ; c++) {
      const notation = xlsx.utils.encode_cell({ c, r });
      const cell = ws[notation];
      if (cell == null) {
        break;
      }
      item[headers[c]] = cell.v;
    }
    if (Object.keys(item).length === 0) {
      break;
    }
    data.push(item);
  }
  return data;
}

export = function(path: string, tables: Array<string>) {
  const wb = xlsx.readFile(path, { cellDates: true });
  return async function(knex: Knex) {
    for (let table of tables) {
      const data = await getData(wb, table);
      await knex(table).insert(data);
    }
  };
};
