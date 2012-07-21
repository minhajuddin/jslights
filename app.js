(function() {
  width = 800
  height = 500
  speed = 500

  log = function() {
    console.log.apply(console, arguments)
  }
  $ = function(id) {
    return document.getElementById(id)
  }

  log('started', parseInt((Math.random(1000) * 1000)))

  can = $('tutorial')
  ctx = can.getContext('2d')

  on = function(x, y) {
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fillRect(x, y, width = 10, height = 10);
  }

  off = function(x, y) {
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(x, y, width = 10, height = 10);
  }

  drawLights = function(x1, y1, x2, y2){
    on(x1, y1)
    on(x2, y2)
  }

  drawLights(10,10, 780, 10)

  //toggle = true
  //setInterval(function(){
    //toggle ? on(10, 10) : off(10, 10)
    //toggle = !toggle
  //}, speed)

  //for(i = 20; i < 800; i += 20)
    //on(10, i)


}).apply(window)

