const https = require('https')
const options = {
    hostname: 'example.com',
    port: 443,
    path: '/get-data',
    method: 'GET'
}

const req = https.request(options, res => {
    let data = ""
    res.on('data', d => {
        data += d
    })

    res.on('end', () => {
        let output = JSON.parse(data).data;
        output.sort(function(a, b) {
            return a.id - b.id;
        })
        output.forEach((item, index) => {
            console.log(item.id);
            console.log(item.name)
        })
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()