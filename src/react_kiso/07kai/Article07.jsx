import TextInput from './TextInput';
import Counter from './Counter';
import TogleButton from './TogleButton';

// 更新関数のパターン
const Article07 = () => {
  return (
    <>
      {/* 引数を使ったテキスト入力フォーム */}
      <TextInput />
      {/* prevStateを使ったカウンター */}
      <Counter />
      {/* 3項演算子でOn/Offを切り替えるボタン */}
      <TogleButton />
    </>
  )
}

export default Article07;