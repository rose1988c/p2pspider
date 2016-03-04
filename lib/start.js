'use strict';
var p2pspider = require('./lib/index');

var SSDB = require('./SSDB');
var ssdb = SSDB.connect('127.0.0.1', 8972, 200);

/*ssdb.set('a', new Date(), function(){
    console.log('set a');
});
*/
/*ssdb.get('a', function(err, val){
    console.log('get a = ' + val);
    ssdb.close();
});*/


p2pspider(
    {
        address: '0.0.0.0',
        port: 6881,
        nodesMaxSize: 200,   // be careful
        maxConnections: 400, // be careful
        timeout: 5000,
        filter: function (infohash, callback) {
            var theInfohashIsExistsInDatabase = false; // false => always to download the metadata even though the metadata is exists.
            callback(theInfohashIsExistsInDatabase);
        }
    },
    function (metadata) {
        //console.log(metadata);
        //var buffer = new Buffer("中文测试");
        //console.log(buffer.toString('utf-8'));
        //console.log(metadata.info.name.toString('utf-8'));

        var name = metadata.info.name.toString('utf-8');
        var infohash = metadata.info.infohash;
        var magnet = metadata.info.magnet;
        var length = metadata.info.length || 0;

        console.log(name);
        console.log(magnet);

        ssdb.hset(name, 'name', name);
        ssdb.hset(name, 'infohash', name);
        ssdb.hset(name, 'magnet', name);
        ssdb.hset(name, 'length', name);


    }
);