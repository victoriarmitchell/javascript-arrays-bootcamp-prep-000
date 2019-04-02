var chocolateBars = ['snickers','hundred grand', 'kitkat','skittles'];

function addElementToBeginningOfArray(array,element) {
  newArray = [element,...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element) {
  newArray = [...array,element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element);
  return array;
}