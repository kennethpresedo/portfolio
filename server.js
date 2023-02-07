require('dotenv').config()
const path = require('path')
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico' )))

app.use('/*')
app.use('/about')
app.use('/contact')
app.use('/portfolio')

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
