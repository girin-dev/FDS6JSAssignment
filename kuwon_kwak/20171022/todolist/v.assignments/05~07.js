let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
function checked(id) {
  todos = todos.map(todo => (todo.id === parseInt(id) ? Object.assign(todo, { completed: !todo.completed }) : todo));
  return todos
}
console.log('5번\n', checked(3))

// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라
function complete_true() {
  // 프로퍼티의 동적 할당 방식
  // todos = todos.map(todo => {
  //   todo.completed = true;
  //   return todo;
  // })
  // Object.assign() 함수 활용 방식
  todos = todos.map(todo => Object.assign(todo, { completed: true }) )
  return todos;
}
console.log('6번\n', complete_true());


// 7. todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라
function trueNum() {
  todos = todos.filter(todo => (todo.completed === true))
  return todos.length;
}
console.log('7번\n', trueNum())