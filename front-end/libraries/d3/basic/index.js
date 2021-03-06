import * as d3 from 'd3';

require('./index.scss');

const data = [
  { k: 1, v: 1, },
  { k: 2, v: 4, },
  { k: 3, v: 9, },
  { k: 4, v: 16, },
  { k: 5, v: 25, }
];

const p = d3.select('#d3-graph') // <main id="d3-graph">를 선택
  .selectAll('div') // <main> 하위의 모든 <div>를 선택
  .data(data) // 요소에 데이터를 바인딩
  .style('width', d => `${ d.v * 10 }px`) // 요소에 스타일 적용
  .text(d => d.v); // 데이터 출력

p.enter() // 요소와 바인드되지 않는 데이터에 대한 Selection 객체 반환
  .append('div') // enter에 의해 반환된 객체들에 대해 실제 <div> 요소를 생성
  .attr('id', d => d.k) // 생성된 요소에 id를 부여
  .style('width', d => `${ d.v * 10 }px`) // 요소에 스타일 적용
  .text(d => d.v); // 생성된 요소들에 데이터를 출력

p.exit() // 데이터와 바인드되지 않은 요소에 대한 Selection 객체 반환
  .remove(); // exit에 의해 반환된 객체들을 제거

