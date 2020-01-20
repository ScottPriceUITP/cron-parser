var test = require('tap').test
var expression = require('../lib/expression')

test('expression 31 of month', function (t) {
  try {
    var interval = expression.parse('0 0 31 * *')
    var i
    for (i = 0; i < 20; ++i) {
      interval.next()
    }
    t.end()
  } catch (err) {
    t.ifError(err, 'Interval parse error')
  }
})
