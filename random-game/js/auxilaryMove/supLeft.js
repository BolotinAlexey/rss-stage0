export default function supLeft(arr, audio) {
  let isHas;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j]) continue;

      isHas = false;
      //shift row to the left
      for (let k = j; k < arr.length - 1; k++) {
        arr[i][k] = arr[i][k + 1];

        if (arr[i][k]) {
          arr[i][k].x = k;
          audio?.play();
        }
        isHas = isHas || !!arr[i][k];
      }
      arr[i][arr.length - 1] = null;
      if (!isHas) break;

      // return to the previous point
      j--;
    }
  }
}
