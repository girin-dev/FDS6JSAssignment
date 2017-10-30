let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
var findIdx = function () {
  todos = todos.map(todo => todo.id)
  return todos;
}
console.log('1번\n', findIdx());

// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
function maxTodos() {
  return Math.max.apply(null, todos)
}
console.log('2번\n', maxTodos());