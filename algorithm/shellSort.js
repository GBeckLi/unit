function shellSort(arr) {
  const _arr = [...arr];
  const len = _arr.length;

  let i, j, temp, gap;

  for (gap = len >> 1; gap >= 1; gap >>= 1) {
    for (i = gap; i < len; i++) {
      if (_arr[i] < _arr[i - gap]) {
        temp = _arr[i];
        for (j = i - gap; j >= 0 && temp < _arr[j]; j -= gap) {
          _arr[j + gap] = _arr[j];
        }

        _arr[j + gap] = temp;
      }
    }
  }

  return _arr;
}

const arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];
console.log(shellSort(arr));
