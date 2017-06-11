var w = 960,
    h = 500,
    z = 20,
    x = w / z,
    y = h / z;

var svg = d3.select("header").append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(d3.range(x * y))
  .enter().append("rect")
    .attr("transform", translate)
    .attr("width", z)
    .attr("height", z)
    .style("fill", function(d) { return d3.hsl(d % x / x * 1000, 1, Math.floor(d / x) / y); })
    .on("mouseover", mouseover);


function translate(d) {
  return "translate(" + (d % x) * z + "," + Math.floor(d / x) * z + ")";
}

function mouseover(d) {
   this.parentNode.appendChild(this);
   document.bgColor = d3.hsl(d % x / x * 1000, 1, Math.floor(d / x) / y);
   currentbg=document.bgColor;
   document.body.style.background = currentbg;
   d3.select(this)
      .style("pointer-events", "none")
    .transition()
      .duration(750)
      .attr("transform", "translate(480,480)scale(23)rotate(180)")
    .transition()
      .delay(1500)
      .attr("transform", "translate(240,240)scale(0)")
      .style("fill-opacity", 0)
      .remove();
}

function newGradient() {
    var c1 = {
        r: Math.floor(Math.random()*255),
        g: Math.floor(Math.random()*255),
        b: Math.floor(Math.random()*255)
    };
    var c2 = {
        r: Math.floor(Math.random()*255),
        g: Math.floor(Math.random()*255),
        b: Math.floor(Math.random()*255)
    };
    c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
    c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';
    return 'radial-gradient(at top left, '+c1.rgb+', '+c2.rgb+')';
}

function rollBg() {
    $('.bg').css('background', newGradient());
}

rollBg();
setInterval(rollBg, 10000);

