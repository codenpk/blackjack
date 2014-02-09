'use strict';
var request = require('request');

var PORT = 4201;
var URL = 'http://localhost:'+PORT;

function login(body, cb) {
    cmd('login', 'POST', body, cb);
}

// view Tables
function viewTables(body, cb) {
    cmd('viewTables', 'GET', true, cb);
}

function joinTable(body, cb) {
    cmd('joinTable', 'POST', body, cb);
}

function leaveTable(body, cb) {
    cmd('leaveTable', 'POST', body, cb);
}

function bet(body, cb) {
    cmd('bet', 'POST', body, cb);
}

function hit(body, cb) {
    cmd('hit', 'POST', body, cb);
}

function stand(body, cb) {
    cmd('stand', 'POST', body, cb);
}

function debugCredits(body, cb) {
    cmd('debug/credits', 'POST', body, cb);
}

function debugGetPlayer(body, cb) {
    cmd('debug/getPlayer', 'GET', body, cb);
}

function cmd(apiCmd, method, body, cb) {
    request({method:method, json:body, uri: URL+'/'+apiCmd},
     function(err, res, json) {
        if (err) {
            logger.error('%s: %j', apiCmd, json);
            return cb(err);
        } else {
            logger.debug('%s: %j', apiCmd, json);
        }
        cb(null, json);
    });
}

module.exports = {
    login: login,
    viewTables: viewTables,
    joinTable: joinTable,
    leaveTable: leaveTable,
    bet: bet,
    hit: hit,
    stand: stand,
    debugCredits: debugCredits,
    debugGetPlayer: debugGetPlayer
};