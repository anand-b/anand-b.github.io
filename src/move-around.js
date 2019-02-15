const { join } = require('path')
var ncp = require('ncp').ncp;
ncp.limit = 16;
var source = join(__dirname,'out/')
var destination = join(__dirname,'../'); 
ncp(source, destination, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});