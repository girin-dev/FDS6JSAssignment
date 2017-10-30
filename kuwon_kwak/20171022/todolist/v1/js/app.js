
(function () {
// 전역변수
// 초기 데이터 값을 넣기 위한 배열
  let todos;
  // ul의 자식요소를 잡기 위한 부모 ul
  const ul = document.getElementById('todo-list');


  // 초기 데이터 설정
  const getTodos = () => {
    todos = [
      { id: 3, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 1, content: 'JavaScript', completed: false }
    ];
    render(todos);
  };

  // 시작과 동시에 출력
  window.addEventListener('load', () => {
    getTodos();
  });

  // 입력 기능
  document.addEventListener('keyup', (e) => {
    const key = e.keyCode;
    const inputbox = document.getElementById('input-todo');
    if (key === 13 && inputbox.value) {
      todos.unshift({ id: todos.length + 1, content: inputbox.value, completed: false });

      // input 비우기
      inputbox.value = '';
      render(todos);
    }
  });

  // 체크박스 입력 기능
  // click 말고 change 이벤트로 잡아주기
  // 삭제기능과 마찬가지로 체크박스 이벤트와 check 변경 기능을 분리시키자.
  // 삭제 기능은 map()과 assign()을 활용해보자
  ul.addEventListener('change', (e) => {
    // console.log(e.target.value === 'on');
    // console.log(e.target.checked === true);
    if ((!e.target || (e.target.nodeName !== 'INPUT')) && (!e.target.attributes[2])) return;
    if (e.target.attributes[2]) {
      // checked인 경우
      todos[e.target.id].completed = false;
    } else {
      // checked가 아닌 경우
      todos[e.target.id].completed = true;
    }
    render(todos);
  });

  // 삭제 기능
  // 이 경우 배열의 객체 요소 하나가 아니라 요소값들만 삭제된다. 수정 필요
  // 삭제 버튼을 클릭한 이벤트와 삭제 기능을 분리시킬 필요가 있음.
  // 삭제 기능에는 filter() 함수를 활용(엄밀히 말하면 삭제시키는게 아니라 filter로 거르는 느낌)
  ul.addEventListener('click', (e) => {
    if ((!e.target || (e.target.nodeName !== 'SPAN')) && (!e.target || ul.nodeName !== 'LABEL')) return;
    delete todos[e.target.dataset.id];
    render(todos);
  });

  // 화면 출력 기능
  // var render = function (array) {
  //   var list = document.getElementsByTagName('ul')[0]
  //   var html = ''
  //   array.forEach(function(todo, id, array){
  //     var check_tf = '';
  //     todo.completed ? check_tf = 'checked' : '';
  //     html += '<li class="list-group-item"> \ <div class="hover-anchor"> \ <a class="hover-action text-muted"> \ <span class="glyphicon glyphicon-remove-circle pull-right" data-id="'
  //     + id + '"></span> \ </a> \ <label class="i-checks" for="'
  //     + id + '"> \ <input type="checkbox" id="'
  //     + id + '"'
  //     + check_tf + '><i></i> \ <span> '
  //     + todo.content + '</span> \ </label> \ </div> \ </li>';
  //   })
  //   list.innerHTML = html
  // }
  const render = function (array) {
    const list = document.getElementsByTagName('ul')[0]
    let html = ''
    array.forEach((todo, id) => {
      let checkTf = '';
      todo.completed ? checkTf = 'checked' : '';
      html += `<li class="list-group-item">
        <div class="hover-anchor">
          <a class="hover-action text-muted">
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${id}"></span>
          </a>
          <label class="i-checks" for="${id}">
            <input type="checkbox" id="${id}" ${checkTf} ><i></i>
            <span> ${todo.content} </span>
          </label>
        </div>
      </li>`;
    });
    list.innerHTML = html;
  };
  // id 할당 함수
  // todos를 돌면서 각 id값을 뽑아내고 그 중 가장 큰 수에 +1 하는 원리
  // Math.max, map 등 활용
  let lastTodoId = function() {};

  // 질문
  // 삭제 기능에서는 e.target.dataset.id로 db에 접근하는데
  // 왜 체크박크에서는 e.target.id로 db에 접근하는가? 그 둘의 차이가 뭐지?

  // 답변
  // 삭제 기능의 html 문서는 data-id 였고
  // 체크박스의 html 문서는 그냥 id이기 때문. 만약 여기서 data-x로 했다면 여기도 e.target.dataset.x였을 것.
  // [data attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
}());
