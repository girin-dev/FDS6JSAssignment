const render = function (array) {
  const list = document.getElementsByTagName('ul')[0]
  let html = ''
  array.forEach((todo, id, array) => {
    let check_tf = '';
    todo.completed ? check_tf = 'checked' : '';
    html += `<li class="list-group-item">
      <div class="hover-anchor">
        <a class="hover-action text-muted">
          <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${id}"></span>
        </a>
        <label class="i-checks" for="${id}">
          <input type="checkbox" id="${id}" ${check_tf} ><i></i>
          <span> ${todo.content} </span>
        </label>
      </div>
    </li>`;
  })
  list.innerHTML = html
}