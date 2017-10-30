/*eslint-disable */
(function () {
  var todos;

  var inputTodo = document.getElementById('input-todo');
  var todoList = document.getElementById('todo-list');

  var render = function () {
    var html = '';

    todos.forEach(function (todo) {
      var checked = todo.completed ? 'checked' : '';

      html += '<li class="list-group-item"> \
        <div class="hover-anchor"> \
          <a class="hover-action text-muted"> \
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + todo.id + '"></span> \
          </a> \
          <label class="i-checks" for="' + todo.id + '"> \
            <input type="checkbox" id="' + todo.id + '"' + checked + '><i></i> \
            <span>' + todo.content + '</span> \
          </label> \
        </div> \
      </li>';
    });

    todoList.innerHTML = html;
  };

  var lastTodoId = function () {
    return todos ? Math.max.apply(null, todos.map(function (todo) {
      return todo.id;
    })) + 1 : 1;
  };

  var getTodos = function () {
    todos = [
      { id: 3, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 1, content: 'Javascript', completed: false }
    ];
    render();
    console.log('[GET]\n', todos);
  };

  var addTodo = function () {
    var content = inputTodo.value;
    inputTodo.value = '';

    if (!todos) {
      todos = [{ id: 1, content, completed: false }];
    } else {
      todos = [{ id: lastTodoId(), content, completed: false }].concat(todos);
      // todos = [{ id: lastTodoId(), content, completed: false }, ...todos];
    }

    render();
    console.log('[ADD]\n', todos);
  };

  var removeTodo = function (id) {
    todos = todos.filter(function (todo) {
      return todo.id != id;
    });
    render();
    console.log('[REMOVE]\n', todos);
  };

  var toggleTodoComplete = function (id) {
    todos = todos.map(function (todo) {
      return todo.id == id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
    });
    render();
    console.log('[TOGGLE-COMP]\n', todos);
  };

  // load 이벤트는 모든 리소스(image, script, css 등)의 로드가 완료하면 발생한다.
  window.addEventListener('load', function () {
    getTodos();
  });

  inputTodo.addEventListener('keyup', function (e) {
    if (e.keyCode !== 13 || inputTodo.value === '') return;
    addTodo();
  });

  todoList.addEventListener('change', function (e) {
    toggleTodoComplete(e.target.id);
  });

  todoList.addEventListener('click', function (e) {
    var target = e.target;
    if (!target || target.nodeName !== 'SPAN' || target.parentNode.nodeName === 'LABEL') return;
    removeTodo(target.dataset.id);
  });
}());