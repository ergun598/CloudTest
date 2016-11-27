var fs=require('fs');
var zlib=require('zlib');

var greet= fs.readFileSync(__dirname+'\\greet.txt','utf8');
console.log(greet);

/*var greet2 =fs.readFile(__dirname+'\\greet.txt','utf8',
function(err,data){

console.log(data);
});

*/
console.log("bittii");

var readable=fs.createReadStream(__dirname+'\\greet.txt',{encoding:'utf8'});
var writable=fs.createWriteStream(__dirname+'\\greetcopy.txt');
var compressed=fs.createWriteStream(__dirname+'\\greetcopy.txt.zp');

var gzip = zlib.createGzip();

readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);

readable.on('data',function(chunk){

console.log("okuma");
console.log(chunk);
writable.write(chunk);
});