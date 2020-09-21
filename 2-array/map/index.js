export default function numberMapToWord(collection) {
  return collection.map(val => String.fromCharCode(96 + val));
}
