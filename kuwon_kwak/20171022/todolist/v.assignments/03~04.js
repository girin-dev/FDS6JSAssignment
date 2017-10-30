let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false } 를 추가하는 함수를 작성하라
function addTodo() {
  todos.unshift({ id: 4, content: 'test', completed: false })
  return todos;
}
console.log('3번\n', addTodo());

// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라
let deleteTodos = function (id) {
  todos = todos.filter(todo => todo.id !== id)
  return todos
}
console.log('4번\n', deleteTodos(4));