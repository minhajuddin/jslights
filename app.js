(function() {
  width = 800
  height = 500
  speed = 100

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

  range = function(start, end) {
    arr = _.range.apply(_, arguments)
    if (_.isEmpty(arr)) arr = [start]
    return arr
  }

  lineCoordinates = function(x1, y1, x2, y2, sign) {
    xrange = range(x1, x2, 20 * sign)
    yrange = range(y1, y2, 20 * sign)

    if (xrange.length > yrange.length) {
      yrange = _.map(_.range(xrange.length), function() {
        return y1
      })
    } else {
      xrange = _.map(_.range(yrange.length), function() {
        return x1
      })
    }

    return _.zip(xrange, yrange)
  }

  rect = [
  lineCoordinates(10, 10, 790, 10, 1), //top --
  lineCoordinates(790, 10, 800, 490, 1), // right |
  lineCoordinates(790, 490, 10, 490, - 1), //bottom --
  lineCoordinates(10, 490, 10, 10, - 1), //left |
  ]

  rectangleCoordinates = _.flatten(rect, 1)

  log(rectangleCoordinates)

  _.each(rectangleCoordinates, function(c) {
    on(c[0], c[1])
  })

  pos = 0
  lastPos = 125
  toggle = true
  animate = function() {
    ++pos;
    if (pos == 126) toggle = ! toggle;
    pos = pos % 126;
    off(rectangleCoordinates[pos][0], rectangleCoordinates[pos][1]);
    on(rectangleCoordinates[lastPos][0], rectangleCoordinates[lastPos][1]);

    lastPos = pos

    setTimeout(animate, speed)
  }
  animate()

}).apply(window)

