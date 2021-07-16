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
app.use('/chartjs', express.static(path.join(__dirname,'/node_modules/chartjs')))
app.use('/axios', express.static(path.join(__dirname,'/node_modules/axios')))
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/views', express.static(path.join(__dirname, '/views')))
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap')))
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {

    res.render(path.join(__dirname, 'views/index'), { title: 'home'} )
    res.end()
})

app.get('/data-request', (req, res) => {
    const user = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/data.json') ))
 
    res.status(200).json(user.user)
})

app.get('/scan', (req, res) => {
    const storage = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/data.json') ))

    const outputs = {
        pet: 14.12,
        hdpe: 13.005,
        hEffect: `People are exposed to these chemicals not only during manufacturing, but also by using plastic packages, because some chemicals migrate from the plastic packaging to the foods they contain. Examples of plastics contaminating food have been reported with most plastic types, including Styrene from polystyrene, plasticizers from PVC, antioxidants from polyethylene, and Acetaldehyde from PET.
                    Among the factors controlling migration are the chemical structure of the migrants and the nature of the packaged food. In studies cited in Food Additives and Contaminants, LDPE, HDPE, and polypropylene bottles released measurable levels of BHT, Chimassorb 81, Irganox PS 800, Irganix 1076, and Irganox 1010 into their contents of vegetable oil and ethanol. Evidence was also found that acetaldehyde migrated out of PET and into water.`,
                        //https://ecologycenter.org/factsheets/adverse-health-effects-of-plastics/
        envEffect: `At A&C Plastics, we love talking about all the different ways plastic can help make our lives safer, stronger and more colorful. But the environmental effects of plastics can't be left out of the conversation. The plastic waste epidemic is causing major problems around the world, on land and at sea. Thankfully, there is a simple way to tell whether a plastic is recyclable or not, and also if it's safe to be reused or should be avoided altogether. And it's already printed on just about every plastic item you purchase.`,
                        //https://www.acplasticsinc.com/informationcenter/r/environmental-effects-of-plastics
        cFprint: 5
    }

    res.render(path.join(__dirname, 'views/pages/scan'), { title: 'scan', output: outputs})
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

