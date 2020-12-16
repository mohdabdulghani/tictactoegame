const { TestScheduler } = require('jest')
const add = require('./content')
test('there is no i in hello',() => {
    expect(add('hello')).not.toMatch(i)
})