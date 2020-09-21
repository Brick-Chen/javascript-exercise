export default function find00OldPerson(collection) {
  return collection.find(element => element.age <= 20).name;
}
