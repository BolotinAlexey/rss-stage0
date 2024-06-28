export default function supTop(arr, audio) {
  let isHas;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][j]) continue;
      isHas = false;

      //shift column to top
      for (let k = i; k < arr.length - 1; k++) {
        arr[k][j] = arr[k + 1][j];

        if (arr[k][j]) {
          arr[k][j].y = k;
          audio?.play();
        }
        isHas = isHas || !!arr[k][j];
      }
      arr[arr.length - 1][j] = null;
      if (!isHas) break;

      // return to the previous point
      i--;
    }
  }
}
