const arr = [50, 10, 90, 30, 70, 40, 80, 60, 20];

function bubble(arr) {
  let innerArr = [].concat([],arr) || [];
  let count = 0;
  if (!arr) {
    console.log('wrong params');
    return arr;
  }
  for (let i = 0; i < innerArr.length; i++) {
    for( let j = i + 1; j < innerArr.length; j++ ) {
      if (innerArr[j] < innerArr[i]) {
        const mid = innerArr[i];
        innerArr[i] = innerArr[j];
        innerArr[j] = mid;
        count++;
      }
    }
  }
  console.log('count: ' + count );
  return innerArr;
}

console.time('10bubble')
bubble();
let a=10;
while(a>0) {
  bubble(arr)
  a--;
}
console.timeEnd('10bubble')
console.time('bubble')
console.log(bubble(arr));
console.timeEnd('bubble')