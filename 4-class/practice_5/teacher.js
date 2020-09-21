import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass = '') {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const basicInfo = super.introduce();
    const classInfo = this.klass === '' ? 'No Class.' : `Class ${this.klass}.`;
    const teacherInfo = ' I am a Teacher. I teach ';
    return basicInfo + teacherInfo + classInfo;
  }
}
