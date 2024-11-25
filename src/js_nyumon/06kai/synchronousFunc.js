// タスクB: 同期処理を行う関数を宣言
const synchronousFunc = () => {
  console.log('これは同期処理関数内のログです。');
  return '完了!';
}

// タスクA
const message = '同期処理';
const result = synchronousFunc();
console.log(message + result);

// 実行コマンド: node --experimental-modules src/js_nyumon/06kai/synchronousFunc.js
