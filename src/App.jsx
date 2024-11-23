import './App.css';
import BlueButton from       './react_kiso/02kai/blueButton';
import Tumbnail from         './react_kiso/02kai/Tumbnail';
import ButtonByClass from    './react_kiso/04kai/ButtonByClass';
import ButtonByFunc from     './react_kiso/04kai/ButtonByFunc';
import Article from          './react_kiso/04kai/Article';
import Article05 from        './react_kiso/05kai/Article05';
import Article06 from        './react_kiso/06kai/Article06';

function App() {
  const authorName = 'torahack';
  const now = new Date();

  return (
    <>
      <div className='App'><h1>第6回</h1></div>
      <Article06/>

      <div className='App'><h1>第5回</h1></div>
      <Article05 title="Title by export default." />

      {/* 第4回 */}
      <div>
        <ButtonByClass hello="Hello by class." />
        <ButtonByFunc hello="Hello by func." />
        <Article 
          title="新・日本一わかりやすいReact入門【基礎編】"            // 文字列の場合は{}が要らない
          content={"今日のトピックはpropsのデータの受け渡しについて。"} // {}有りでも大丈夫。
          order={4}
          isPublished={true}
          author={authorName}
          updatedAt={now}
        />
        <Article  
          title="新・日本一わかりやすいReact入門【基礎編】"
          order={5}
          content={"今日のトピックはuseStateについて。"} 
          isPublished={false}
          author={authorName}
          updatedAt={now}
        />
        <Article 
          title="新・日本一わかりやすいReact入門【基礎編】"
          order={6}
          content={"今日のトピックはuseEffectのについて。"} 
          isPublished={true}
          author={authorName}
          updatedAt={now}
        />
      </div>

      {/* 第2回 */}
      <div className='App'>
        <BlueButton />
        <Tumbnail />
      </div> 

    </>
  );
}

export default App;
