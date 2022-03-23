const quotes = [
  {
    quote: '꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다',
    author: '월트 디즈니',
  },
  {
    quote: '비록 해가 진다고 해도, 나에게는 전기불이 있다',
    author: '로커 커트 코베인',
  },
  {
    quote: '웃음 이 없는 하루는 버린 하루다',
    author: '찰리 채플린',
  },
  {
    quote: '우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다',
    author: '케네디',
  },
  {
    quote: '변화는 우리가 누군가나 무엇, 혹은 후일을 기다린다고 찾아오지 않는다',
    author: '버락 오바마',
  },
  {
    quote: '조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다',
    author: '오프라 윈프리',
  },
  {
    quote: '새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다',
    author: '스티브 잡스',
  },
  {
    quote: '행동은 모든 성공의 가장 기초적인 핵심이다',
    author: '파블로 피카소',
  }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;