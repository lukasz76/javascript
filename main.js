function mapFn(array, callback) {
  let newArray = [];
  for (const el of array) {
      const result = callback(el);
      newArray.push(result);
  }
  return newArray;
}

console.log(mapFn([1, 2, 3, 4], x => x * 2));





function filterFn(array, callback) {
  const newArray = [];
  for (const el of array) {
      if (callback(el)) {
          newArray.push(el)
      }
  }
  return newArray;
}

console.log(filterFn([1, 2, 3, 4, 5], el => el < 5));






function reduceFn(array, callback, initial) {
  let acc = initial;
  for (const el of array) {
      acc = callback(acc, el);
  }
  return acc;
}

console.log(reduceFn([1, 2, 3, 4, 5], (acc, number) => {
  return acc + number;
}, 0));

