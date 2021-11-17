const http = require('http');

const server = http.createServer((req,res)=>{

    const url = req.url;

    if (url === '/') {
        res.write('<html><head>')
        res.write('<title>Enter Message</title>')
        res.write('</head>')
        res.write('<body>')
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message"></input>')
        res.write('<button type="submit">Send</button></form>')
        res.write('</body></html>')
        return res.end()    
    }

    res.write('<html><head>')
    res.write('<title>First Page</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h2>Hello world!</h2>')
    res.write('</body></html>')
    res.end()    

})

server.listen(8080);
