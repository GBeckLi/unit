/**
*
* @params arr { Array } 需要排序的数组
* @return _arr { Array } 排序完成的数组
* 思路： 将数组分成两部分，有序部分和无序部分。默认第一个元素为有序；
*       从无序部分抽取一个元素，和有序部分各元素比较，将比该元素大的值往后移
*       然后将该元素插入到第一个比他小的元素后面。
*/

function insertSort(arr) {
  const _arr = [...arr];
  let i, j, temp, mCnt = 0;
  const len = _arr.length;

  for (i = 1; i < len; i++) {
    if (_arr[i - 1] > _arr[i]) {
      temp = _arr[i];
      for (j = i - 1; _arr[j] >= temp; j--) {
        if (j < 0) {
          break;
        }
        _arr[j+1] = _arr[j];
        mCnt++;
      }
      _arr[j + 1] = temp;
      console.log(_arr);
      console.log(`替换了${mCnt}次,temp=${temp}`);
      mCnt = 0;
    }
  }

  return _arr;
}

const originArr = [9, 1, 2, 5, 7, 4, 8, 6, 3, 5];

const orderArr = insertSort(originArr);
console.log(orderArr);

export default insertSort;