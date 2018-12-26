'use strict;'
const http = require('http');
/**サーバーの作成
 * 
 */
const server = http.createServer((req,res) => {
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });
    res.write('\
        <!DOCTYPE html>\
        <html lang="ja">\
        <body>\
        <h1>HTMLの一番大きい見出しを表示します</h1>\
        </body>\
        </html>\
        ');
    res.end();
})
/**
 *　サーバーを起動
 */
const port = 8000;
server.listen(port,() => {
    console.log('Listening on ' + port);
})
