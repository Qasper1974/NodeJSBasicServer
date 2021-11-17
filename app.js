const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url, req.method, res)
    res.write('<html>')
    res.write('<head>')
    res.write('<title>My First Page')
    res.write('</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h2>Hello world!')
    res.write('</h2>')
    res.write('</body>')
    res.write('</html>')

})

server.listen(8080);

