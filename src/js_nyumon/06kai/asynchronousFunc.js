// タスクB: 非同期処理を行う関数を宣言
const getGitUsername = () => {
  const url = 'https://api.github.com/users/deatiger';

  // GitHub APIをFetchメソッドで呼び出す
  fetch(url).then(res => res.json())
    .then(json => {
      console.log('これは非同期処理成功時のメッセージです');
      return json.login;
    }).catch(error => {
      console.log('これは非同期処理失敗時のメッセージです', error);
      return null;
    });
}

// タスクA
const message = 'GitのユーザIDは';
const username = getGitUsername(); // ←関数内でpromiseの処理を入れていないため、
console.log(message + username);   //  usernameが返ってくる前にメッセージが表示される

// 実行コマンド: node --experimental-modules src/js_nyumon/06kai/asynchronousFunc.js
