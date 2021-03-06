var sinon = require('sinon')
var test = require('tap').test
var CronExpression = require('../lib/expression')

test('increment_on_first_itereation', function (t) {
  try {
    var clock = sinon.useFakeTimers()
    var fakeNow = new Date('Tue Feb 21 2017 16:45:00')
    clock.tick(fakeNow.getTime())
    var interval = CronExpression.parse('* * * * *')
    t.ok(interval, 'Interval parsed')
    var next = interval.next()
    t.ok(next, 'Found next scheduled interval')
    // Make sure next has incremented in 1 minute
    t.equal(fakeNow.getTime() + 60000, next.getTime())
    clock.restore()
    t.end()
  } catch (err) {
    t.ifError(err, 'Interval parse error')
  }
})
