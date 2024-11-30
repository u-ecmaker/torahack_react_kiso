// DOM要素の取得
const button = document.getElementById('addBtn');
const lists = document.getElementById('lists');

// 関数 (メソッド)
// DOM操作
function addList(user) {
  const list = document.createElement('li');
  list.textContent = user.name;
  lists.appendChild(list);
}

// データのやり取り、非同期関数
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return users;
}

// データのやり取り、非同期関数
async function listUsers() {
  const users = await getUsers();
  users.forEach(addList);
  // for ver.
  // for (let index = 0; index < users.length; index++) {
  //   const user = users[index];
  //   addList(user);
  // }
}

// イベント
window.addEventListener('load', listUsers);
button.addEventListener('click', listUsers);
