import Person from './person';

export default class Worker extends Person {
  constructor(name, age) {
    super(name, age);
  }

  introduce() {
    const outFormat = 'I am a Worker. I have a job.';
    return outFormat;
  }
}
