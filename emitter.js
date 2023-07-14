const EventEmitter = require('events')

class Emitter extends EventEmitter {}

const emitter = new Emitter()

emitter.on('connect', () => {
    console.log("Server Connected...")
})

emitter.on('hi', (name) => {
    console.log('Hello my name is ' + name)
})

emitter.emit('connect')
emitter.emit('hi', 'Istam')