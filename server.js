var Hapi = require('hapi')

var server = new Hapi.Server()
server.connection({
    host: 'localhost',
    port: 4598
})

server.start(function(err){
    if (err) {
        throw err
    }
    console.log('Server running at: ', server.info.uri)
})

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply){
        reply('Hello world!')
    }
})
