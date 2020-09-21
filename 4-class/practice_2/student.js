import Person from './person';

export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const outKclass = this.klass;
    const intro = `I am a Student. I am at Class ${outKclass}.`;
    return intro;
  }
}
