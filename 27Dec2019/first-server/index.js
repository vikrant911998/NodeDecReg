const http = require('http');
const fs = require('fs');

function handleRequest(request,response){
    const url = request.url;
    const method = request.method;
    if( url == '/' && method == 'GET' ){
        response.setHeader('content-type','text/html');
        response.write('<html>');
        response.write('<head>');
        response.write('<title>Demo Node Page</title>');
        response.write('</head>');
        response.write('<body><h1>This is Demo Response</h1><a href="https://www.google.com">Redirect to Google</a></body>');
        response.write('</html>');
        response.end();
    }
    else if( url == '/test' && method == 'GET' ){
        response.setHeader('content-type','text/html');
        response.write('<html>');
        response.write('<head>');
        response.write('<title>Demo Node Page</title>');
        response.write('</head>');
        response.write('<body><h1>This is Test Response</h1><form action="/message" method="GET"><input type="text" placeholder="Enter the text" name="msg"> <button>SUBMIT</button></form></body>');
        response.write('</html>');
        response.end();
    }
    else if( url=='/message' && method=='GET' ){
        console.log('Inside Form URL');
        var requestData = [];
        let finalData = "";

        request.on('data',(chunk)=>{
            requestData.push(chunk);
            
        });

        request.on('end',()=>{
            
            let parseData = Buffer.concat(requestData).toString();
            
            parseData = parseData.split('=')[1];
            parseData = parseData.split('+');
            

            for(let item of parseData)
                finalData +=item+' ';

                
            console.log('inside ',finalData);
            fs.writeFileSync('dummy.txt',finalData);
            
        });

        // console.log('Outer -> ',finalData);

        response.write('data Saved SuccessFully.');
        response.end();
    }

}

const server = http.createServer(handleRequest);


server.listen(3000,()=>{
    console.log('Server Started.....');

});