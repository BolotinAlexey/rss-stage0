export default function supBottom(arr, audio) {
  let isHas;
  for (let j = 0; j < arr.length; j++) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i][j]) continue;
      isHas = false;

      //shift column to the bottom
      for (let k = i; k > 0; k--) {
        arr[k][j] = arr[k - 1][j];
        if (arr[k][j]) {
          arr[k][j].y = k;
          audio?.play();
        }
        isHas = isHas || !!arr[k][j];
      }
      arr[0][j] = null;
      if (!isHas) break;

      // return to the previous point
      i++;
    }
  }
}
