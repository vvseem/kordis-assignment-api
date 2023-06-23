const { readFile, utils, set_fs } = require("xlsx");
const fs = require("fs");
set_fs(fs);

const N_SPACES = 3;
const SHEET_PATH = "sheets/example_spreadsheet.xlsx";
const RANGE = utils.decode_range("A5:G91");

const getLabelAndLevel = (value, index) => ({
  label: value.trim(),
  level: value.search(/\S/) / N_SPACES,
  index,
});

const getRowCells = (row, rowHeaders, columnHeaders) =>
  columnHeaders.reduce(
    (data, column, index) => ({
      ...data,
      [column]:
        row[index]?.f.replace(/([A-Z]+)(\d+)/g, (cell) => {
          const { r: row_no, c: column_no } = utils.decode_cell(cell);
          return `'${rowHeaders[row_no - RANGE.s.r - 1].index}'&'${
            columnHeaders[column_no - 1]
          }'`;
        }) ?? "",
    }),
    {}
  );

const getSpreadSheet = () => {
  const book = readFile(SHEET_PATH, { dense: true });

  return {
    test: "test",
  };
};
//
//   const book = readFile(SHEET_PATH, { dense: true });
//   const sheet = book.Sheets[book.SheetNames[0]];
//   const sheetData = sheet["!data"].slice(RANGE.s.r, RANGE.e.r + 1);
//
//   const columnHeaders = sheetData
//     .shift()
//     .slice(1 + RANGE.s.c, 1 + RANGE.e.c)
//     .map((header) => header.v);
//
//   const rowHeaders = sheetData.map((row, index) =>
//     getLabelAndLevel(row[0].v, index)
//   );
//
//   const rows = sheetData.reduce((rows, row, index) => {
//     row = row.slice(RANGE.s.c);
//     const { label } = getLabelAndLevel(row.shift().v);
//
//     rows[index] = {
//       ...getRowCells(row, rowHeaders, columnHeaders),
//       displayName: label,
//       item: label,
//       index: index.toString(),
//     };
//
//     return rows;
//   }, {});
//
//   const root = rowHeaders.reduce(
//     (acc, { label, level }, index) => {
//       if (level === 0) {
//         acc.root[index] = {};
//         acc.stack = [acc.root[index]];
//       } else {
//         acc.stack = acc.stack.slice(0, level);
//         acc.stack[level - 1][index] = {};
//         acc.stack[level] = acc.stack[level - 1][index];
//       }
//       acc.lastLevel = level;
//       return acc;
//     },
//     {
//       root: {},
//       lastLevel: 0,
//       stack: [],
//     }
//   ).root;
//
//   columnHeaders.unshift("item");
//
//   return {
//     headers: columnHeaders,
//     rows: rows,
//     root: root,
//   };
// };
//
module.exports = getSpreadSheet;
