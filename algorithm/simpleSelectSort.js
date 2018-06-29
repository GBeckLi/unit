/**
*
*  @params arr { Array } 目标数组
*  @params indexL { Number } 左侧下标
*  @params indexR { Number } 右侧下标
*  描述：将数组中指定的两个下标的值互换
*
*/

function swap(arr, indexL, indexR) {
  const m = arr[indexL];
  arr[indexL] = arr[indexR];
  arr[indexR] = m;
}


/**
*
* @params arr { Array } 需要排序的数组
* @return _arr { Array } 排序之后的数组
* 描述：将数组中的元素按照从小到大的顺序排序
*
*/
function simple(arr) {
  const _arr = [...arr];
  const len = _arr.length;
  let i, j, min;

  for (i=0; i< len - 1; i++) {
    min = i;
    for (j = i + 1; j < len; j++) {
      if (_arr[min] > _arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(_arr, i, min);
    }
  }
  return _arr;
}

const originArr = [9, 1, 2, 5, 7, 4, 8, 6, 3, 5];

const sortArr = simple(originArr);
console.log(sortArr);