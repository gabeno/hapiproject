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
        layoutPath: 'views/layout',
        layout: 'default',
        //helpersPath: 'views/helpers',
        //partialsPath: 'views/partials'
    })
})

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        var data = {
            title: 'Index Page!',
            message: 'Hello world :)'
        }
        reply.view('index', data)
    }
})
