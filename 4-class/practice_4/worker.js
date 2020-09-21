import Person from './person';

export default class Worker extends Person {
  constructor(name, age) {
    super(name, age);
  }

  introduce() {
    const basicInfo = this.basicIntro();
    const outFormat = ' I am a Worker. I have a job.';
    return basicInfo + outFormat;
  }
}
