export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return this.basicIntro();
  }

  basicIntro() {
    const outName = this.name;
    const outAge = this.age;
    const intro = `My name is ${outName}. I am ${outAge} years old.`;
    return intro;
  }
}
