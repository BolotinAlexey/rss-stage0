export default function supRight(arr, audio) {
  let isHas;
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[i][j]) continue;
      isHas = false;

      //shift row to the right
      for (let k = j; k > 0; k--) {
        arr[i][k] = arr[i][k - 1];
        if (arr[i][k]) {
          arr[i][k].x = k;
          audio?.play();
        }
        isHas = isHas || !!arr[i][k];
      }
      arr[i][0] = null;
      if (!isHas) break;

      // return to the previous point
      j++;
    }
  }
}
