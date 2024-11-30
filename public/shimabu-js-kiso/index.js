const button = document.getElementById('addBtn');
const lists = document.getElementById('lists');

button.addEventListener('click', async function() {
  // データのやり取り
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  // DOM操作
  users.forEach(function(user) {
    const list = document.createElement('li');
    list.textContent = user.name;
    lists.appendChild(list);
  });
  // for ver.
  // for (let index = 0; index < users.length; index++) {
  //   const user = users[index];
  //   const list = document.createElement('li');
  //   list.textContent = user.name;
  //   lists.appendChild(list);
  // }
});

window.addEventListener('load', async function() {
  // データのやり取り
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  // DOM操作
  users.forEach(function(user) {
    const list = document.createElement('li');
    list.textContent = user.name;
    lists.appendChild(list);
  });
});
