var scale = d3.scale
  .linear() // also try .log() or .pow()
  .domain([130, 350]) // input min/max of sales values
  .range([10, 100]); // output pixels for SVG

console.log(scale(300));
console.log(scale(270));
console.log(scale(150));
console.log(scale(349));
