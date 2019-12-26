const http = require('http');

function handleRequest(request,response){
    response.setHeader('content-type','text/html');
    response.write('<html>');
    response.write('<head>');
    response.write('<title>Demo Node Page</title>');
    response.write('</head>');
    response.write('<body><h1>This is Demo Response</h1><a href="https://www.google.com">Redirect to Google</a></body>');
    response.write('</html>');
    response.end();
}

const server = http.createServer(handleRequest);


server.listen(3000,()=>{
    console.log('Server Started.....');

});