var http=require('http');
var fs=require('fs');

http.createServer(function (req,res) {

   if(req.url==='/'){


res.writeHead(200,{'Content-Type':'text/json'});

var htm= fs.readFileSync(__dirname+'\\index.html','utf-8');  
var message='hllooo';
htm=htm.replace('{message}',message);
res.end(htm);

}



else if(req.url==='/api'){

res.writeHead(200,{'Content-Type':'application/json'});

var obj ={

    adi:'ahmet',
    soyadi:'mehmet'
};
res.end(JSON.stringify(obj));

}

res.writeHead(404);
res.end();


}).listen(1337,'127.0.0.1');