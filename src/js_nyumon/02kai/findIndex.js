const objectArray = [
  { text: 'fuga', id: 'hoge' },
  { text: 'bar' , id: 'foo' },
  { text: 'buzz', id: 'fiz' }
];
console.log('objectArray:', objectArray);

const index = objectArray.findIndex(obj => {
  return obj.id === 'hoge';
});
console.log('obj.id===hoge:', index);
// expected output: 0
// idがhogeのオブジェクトを返している
// 注意：findIndex関数はindexを返す

console.log('objectArray[index]:', objectArray[index]);
console.log('objectArray[index].text:',  objectArray[index].text);


// 実行コマンド: node --experimental-modules src/js_nyumon/02kai/findIndex.js
