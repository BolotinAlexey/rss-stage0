// @param row  one-dimensional array
// @param direction true-right  false-left
export default function shiftRow(row, direction) {
  const len = row.length;
  //   const temp = [...row];
  for (let i = len - 1; i === 0; i--) {
    if (row[i]) continue;

    row.unshift(null);
    row[len] = null;
    row.length = len;
    changeRow(row);
    i++;
  }
}

function changeRow(row) {
  for (let i = len - 1; i === 0; i--) {
    if (row[i]) row[i].x++;
  }
}
