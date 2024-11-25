// クラスを使わない書き方
(() => {
  console.log('hello NoClass');

  const $elm = document.querySelector('#js-faq');
  const $trigger = $elm.getElementsByTagName('p');

  const triggerLen = $trigger.length;
  let index = 0;
  while (index < triggerLen) {
    $trigger[index].addEventListener('click', (e) => clickHandler(e));
    index++;
  }

  const clickHandler = (e) => { // e: event
    e.preventDefault();

    const $target = e.currentTarget;
    const $content = $target.nextElementSibling; //取ってきたQ次の要素：Aにあたる。

    if ($content.style.display === 'block') {
      $content.style.display = 'none';
    } else {
      $content.style.display = 'block';
    }
  }
})();
