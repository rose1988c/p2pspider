'use strict';
var p2pspider = require('../lib/index');
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
        console.log(metadata);
        /*var buffer = new Buffer("中文测试");
        console.log(buffer.toString('utf-8'));*/
        console.log(metadata.info.name.toString('utf-8'));
    }
);