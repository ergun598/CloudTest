var express=require('express');

var app=express();


var port= process.env.PORT||3000;

app.use('/assets',express.static(__dirname+'//public'));
app.set('view engine','ejs');

app.use('/',function(req,res,next){
console.log(req.url+'\n');
next();


});
app.get('/',function(req,res){

   res.render('index',{adi:'kasım ergün'}); 
//res.send('<html><head><link href=assets/styles.css type=text/css rel=stylesheet /></head><body><h1>dashdahsh</h1><p>This is a paragraph.</p></body></html>');
}

);


app.get('/person/:id',function(req,res){

    
res.send('<html><head><title>Page Title</title></head><body><h1>hello person '+req.params.id+'</h1><p>This is a paragraph.</p></body></html>');
}

);

app.listen(port);