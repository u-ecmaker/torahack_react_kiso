/* eslint-disable no-unused-vars */
(() => {
  class Accordion {

    // 初期化
    constructor(obj){

      // console.log('obj', obj);
      console.log('obj', obj.hookName);

      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);
    
      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
        index++;
      }
      this.sayHello();
    }

    clickHandler(e) { // e: event
      e.preventDefault();
  
      const $target = e.currentTarget;
      const $content = $target.nextElementSibling; //取ってきたQ次の要素：Aにあたる。
  
      if ($content.style.display === 'block') {
        $content.style.display = 'none';
      } else {
        $content.style.display = 'block';
      }
    }
    
    sayHello(){
      console.log('sayHello');
    }
  }


  const instanceAccordion = new Accordion({
    hookName: '#js-faq',
    tagName: 'p',
  });

  const dummyAccordion = new Accordion({
    hookName: '#js-accordion',
    tagName: 'a',
  });

  const miniAccordion = new Accordion({
    hookName: '#js-mini',
    tagName: 'dt',
  });


})();
