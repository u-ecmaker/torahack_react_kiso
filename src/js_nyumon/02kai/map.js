const array = [1, 2, 4, 8];
const resultArray = array.map(x => x * 2);
console.log(resultArray);
// expected output: Array [2, 4, 8, 16]

const object = { //連想配列
  "hoge": {text: "fuga"},
  "foo": {text: "bar"},
  "fiz": {text: "buzz"}
};

const objectToArray = Object.keys(object).map(key => {
  console.log('key:', key); // key: hoge, foo, fiz
  const value = object[key];// value: {text: "fuga"}, {text: "bar"}, {text: "buzz"}
  value['id'] = key;
  console.log(value);      // value: {text: "fuga", id: "hoge"}, {text: "bar", id: "foo"}, {text: "buzz", id: "fiz"}
  return value
});

console.log(objectToArray);
// expected output: Array ["hoge", "fuga", "piyo"]
// objectの連想配列をobjectの配列に変換している
// 注意：map関数は配列のみを返せる

// 実行コマンド: node --experimental-modules src/js_nyumon/02kai/map.js