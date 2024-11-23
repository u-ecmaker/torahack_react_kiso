const PublishButton = (props) => {
  return (
    //        ↓buttonタグのonクリックイベント
    //        ↓                ↓親からの引数propsのonClick2
    <button onClick={() => props.onClickUpdateFunc()}>
      公開状態：{props.isPublished.toString()}
    </button>
  )
}

export default PublishButton;