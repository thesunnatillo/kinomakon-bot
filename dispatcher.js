const { Composer } = require("grammy")
const startCommand = require("./src/handlers/start")
const helpCommand = require("./src/handlers/help")
const matchSubscribe = require("./src/middleware/subscribe")
const dispatcher = new Composer()

dispatcher.use(matchSubscribe)
dispatcher.command('start', startCommand)
dispatcher.command('help', helpCommand)

module.exports = dispatcher;