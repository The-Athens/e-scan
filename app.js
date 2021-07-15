const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const port = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())
app.use('/chartjs', express.static(path.join(__dirname,'/chartjs')))
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/views', express.static(path.join(__dirname, '/views')))
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap')))
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const storage = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/data.json') ))

    res.render(path.join(__dirname, 'views/index'), { title: 'home', drawer: storage})
    res.end()
})

app.get('/scan', (req, res) => {
    const storage = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/data.json') ))

    res.render(path.join(__dirname, 'views/pages/scan'), { title: 'scan'})
    res.end()
})

app.get('/withdraw', (req, res) => {
    const storage = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/data.json') ))

    res.render(path.join(__dirname, 'views/pages/withdraw'), { title: 'withdraw'})
    res.end()
})

// // Saves picture for capture image requests
// app.post('/capture-image', async (req, res) => {

//     try{
//         const file = await fs.readFile(path.join(__dirname, 'data/data.json'))
//         const storage = JSON.parse( file )
//         const image = req.body.image
//         const name = req.body.name
    
//         for (let cont of storage) {
//             if (cont.user.name === name) {
//                 cont.image = image
//             }
//         }
    
//         await fs.writeFile(path.join(__dirname, 'data/data.json'), JSON.stringify(storage) , { flag: 'a' }, (err) => {
//             console.log(error)
//         })
    
//         res.redirect('/')
//     }
//     catch (err) {
//         throw err
//     }
    
// })


app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

