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
        &lt;!DOCTYPE html&gt;\
        &lt;html lang="ja"&gt;\
        &lt;body&gt;\
        &lt;h1&gt;HTMLの一番大きい見出しを表示します&lt;/h1&gt;\
        &lt;/body&gt;\
        &lt;/html&gt;\
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
