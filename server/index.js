const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.urlencoded())

app.post('/user', (req, res) => {
    const cnt = fs.readFileSync('data.json', {
        encoding:'utf8'
    })
    const users = JSON.parse(cnt)
    users.push(req.body)
    fs.writeFileSync('data.json', JSON.stringify(users))
    res.status(200).redirect('http://127.0.0.1:5500/login.html')
})

app.post('/login', (req, res) => {
    const cnt = fs.readFileSync('data.json', {
        encoding:'utf8'
    })
    const users = JSON.parse(cnt)
    for(const user of users) {
        if(user.email === req.body.email && user.password === req.body.password) {
            const ul = Buffer.from(JSON.stringify(user)).toString('base64')
            res.header('set-cookie', `user=${ul}; Domain=localhost; Path=/; SameSite=Strict`)
            res.status(200).redirect('http://127.0.0.1:5500/senha.html')
        }
    }
    res.status(404).redirect('http://127.0.0.1:5500/registro.html')
})
app.listen(8000)