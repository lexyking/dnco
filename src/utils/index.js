export const isEqual = (arr1, arr2) => {
  return arr1.length !== arr2.length
    ? false
    : arr1.every((el, i) => el === arr2[i]);
};

export const getAvalaibleSpace = (arr) => {
  if (arr) {
    const result = [...arr].reduce((acc, curr) => {
      return acc + curr.availableSpace;
    }, 0);
    console.log("available space", result);
    return result;
  }
};

export const addCommaAndUnit = (num) => {
  return new Intl.NumberFormat("en-GB", {}).format(num);
};

export const getResult = (str, arr) => {
  const result = arr.filter((arrElement) =>
    arrElement.name.toLowerCase().includes(str.toLowerCase()) ||
    arrElement.type.toLowerCase().includes(str.toLowerCase()) ||
    arrElement.status.toLowerCase().includes(str.toLowerCase())
      ? arrElement
      : null
  );
  return result;
};
