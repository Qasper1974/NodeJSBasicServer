const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

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

    if (url === '/message' && method === 'POST') {

        const body = []

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.write('<html><head>')
    res.write('<title>First Page</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h2>Hello world!</h2>')
    res.write('</body></html>')
    res.end()    
}

module.exports = requestHandler;
