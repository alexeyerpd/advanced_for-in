export function orderByProps(object, sortedKeys) {
  const result = [];

  const allSortedKeys = [].concat(
    sortedKeys,
    Object.keys(object)
      .filter((k) => !sortedKeys.includes(k))
      .sort()
  );
  allSortedKeys.forEach((k) => {
    result.push({
      key: k,
      value: object[k],
    });
  });

  return result;
}
