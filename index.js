// start your server here
const server = require('./api/server')

const PORT = 8000

server.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`)
})