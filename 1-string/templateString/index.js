import { format } from 'prettier';

function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

export default function getScoreOutput(person) {
  // TODO 8: 在这里写实现代码
  const name = person.lastName + person.firstName;
  const score = getScore(person.id);
  const scoreOutput = `你好，${name}！你的考试成绩为${score}分`;
  return scoreOutput;
}
