const objectArray = [
  { text: 'fuga', id: 'hoge' },
  { text: 'bar' , id: 'foo' },
  { text: 'buzz', id: 'fiz' }
];
console.log('objectArray:', objectArray);

const result = objectArray.filter(obj => {
  return obj.id === 'hoge';
});
console.log('obj.id===hoge:', result);
// expected output: Array [{ text: 'fuga', id: 'hoge' }]
// idがhogeのオブジェクトを返している
// 注意：filter関数は配列のみを返せる

console.log('result[0]:', result[0]);
console.log('result[0].text:',  result[0].text);


// 実行コマンド: node --experimental-modules src/js_nyumon/02kai/filter.js
