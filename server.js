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

server.register([
    {register: require('vision')}, // template rendering
    {register: require('inert')}   // static files
], function(err){
    if (err) {
        throw err;
    }
    // set view configuration in plugin register callback
    server.views({
        engines: {
            html: require('handlebars')
        }
    })
})

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply){
        reply('Hello world!')
    }
})
