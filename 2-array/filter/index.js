function chooseMultiplesOfThree(collection) {
  return collection.filter(num => num % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  return collection.filter((element, index, arr) => index === 0 || arr[index] !== arr[index - 1]);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
