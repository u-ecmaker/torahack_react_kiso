import { useState } from 'react';
import PublishButton from './PublishButton';
import UseStateSample from './UseStateWithComment';

const Article06 = () => {
  const [isPublished, setIsPublished] = useState(false); // initialState  
  console.log("isPublished: ", isPublished);


  // 更新関数の関数化
  const SwitchPublishState = () => {
    setIsPublished(!isPublished);
  }

  return (
    <div>
      {/* 最初の説明 コメント付き */}
      <UseStateSample />

      {/* コンポーネント化しない場合   */}
      <button onClick={() => setIsPublished(!isPublished)}>Publish</button>

      {/* 通常はコンポーネント化する */}
      <PublishButton
        isPublished={isPublished}
        onClickUpdateFunc={SwitchPublishState} //更新関数はそのまま渡さず、関数化してから渡す
      />

      {/* propsへ関数を渡すOKな例 */}
      {/* 更新関数をそのまま渡す      ()をつけなければ、ただただ関数自体をそのまま ↓ 渡しているだけでOK*/}
      <PublishButton isPublished={isPublished} onClickUpdateFunc={SwitchPublishState} />
      {/* 更新関数をコールバック関数 */}
      <PublishButton isPublished={isPublished} onClickUpdateFunc={() => setIsPublished(!isPublished)} />

      {/* propsへ関数を渡すNGな例   　　　 ()をつけるとpropsとして渡すときに関数を実行しますよ ↓ という書き方になる */}
      {/* <PublishButton isPublished={isPublished} onClickUpdateFunc={SwitchPublishState()} /> */}
      {/* propsとして実行するのはreactコンポーネントをレンダリングするとき、なので */}
      {/* レンダリングするたびに関数が実行されて、関数が実行されると再レンダリングが起きて... */}
      {/* 無限ループになる */}
    </div> 
  )
} 

export default Article06;