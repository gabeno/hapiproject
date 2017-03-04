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

server.register(require('vision'), function(err){
    if (err) {
        console.log('Can not register vision')
        throw err;
    }
    // set view configuration in plugin register callback
    server.views({
        engines: {
            html: require('handlebars')
        },
        path: __dirname + '/views',
        layout: 'layout'
    })
})

server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply){
        var data = {message: 'Hello world!'}
        reply.view('index', data)
    }
})

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'index'
    }
})
