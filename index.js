const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

let mediaMail = [
    {
        weight: 1,
        rate: 3.49
    },
    {
        weight: 2,
        rate: 4.16
    },
    {
        weight: 3,
        rate: 4.83
    },
    {
        weight: 4,
        rate: 5.50
    },
    {
        weight: 5,
        rate: 6.17
    },
    {
        weight: 6,
        rate: 6.84
    },
    {
        weight: 7,
        rate: 7.51
    },
    {
        weight: 8,
        rate: 8.21
    },
    {
        weight: 9,
        rate: 8.91
    },
    {
        weight: 10,
        rate: 9.61
    },
    {
        weight: 11,
        rate: 10.31
    },
    {
        weight: 12,
        rate: 11.01
    },
    {
        weight: 13,
        rate: 11.71
    },
    {
        weight: 14,
        rate: 12.41
    },
    {
        weight: 15,
        rate: 13.11
    },
    {
        weight: 16,
        rate: 13.81
    },
    {
        weight: 17,
        rate: 14.51
    },
    {
        weight: 18,
        rate: 15.21
    },
    {
        weight: 19,
        rate: 15.91
    },
    {
        weight: 20,
        rate: 16.61
    },
    {
        weight: 21,
        rate: 17.31
    },
    {
        weight: 22,
        rate: 18.01
    },
    {
        weight: 23,
        rate: 18.71
    },
    {
        weight: 24,
        rate: 19.41
    },
    {
        weight: 25,
        rate: 20.11
    },
    {
        weight: 26,
        rate: 20.81
    },
    {
        weight: 27,
        rate: 21.51
    },
    {
        weight: 28,
        rate: 22.21
    },
    {
        weight: 29,
        rate: 22.91
    },
    {
        weight: 30,
        rate: 23.61
    },
    {
        weight: 31,
        rate: 24.31
    },
    {
        weight: 32,
        rate: 25.01
    },
    {
        weight: 33,
        rate: 25.71
    },
    {
        weight: 34,
        rate: 26.41
    },
    {
        weight: 35,
        rate: 27.11
    },
    {
        weight: 36,
        rate: 27.81
    },
    {
        weight: 37,
        rate: 28.51
    },
    {
        weight: 38,
        rate: 29.21
    },
    {
        weight: 39,
        rate: 29.91
    },
    {
        weight: 40,
        rate: 30.61
    },
    {
        weight: 41,
        rate: 31.31
    },
    {
        weight: 42,
        rate: 32.01
    },
    {
        weight: 43,
        rate: 32.71
    },
    {
        weight: 44,
        rate: 33.41
    },
    {
        weight: 45,
        rate: 34.11
    },
    {
        weight: 46,
        rate: 34.81
    },
    {
        weight: 47,
        rate: 35.51
    },
    {
        weight: 48,
        rate: 36.21
    },
    {
        weight: 49,
        rate: 36.91
    },
    {
        weight: 50,
        rate: 37.61
    },
    {
        weight: 51,
        rate: 38.31
    },
    {
        weight: 52,
        rate: 39.01
    },
    {
        weight: 53,
        rate: 39.71
    },
    {
        weight: 54,
        rate: 40.41
    },
    {
        weight: 55,
        rate: 41.11
    },
    {
        weight: 56,
        rate: 41.81
    },
    {
        weight: 57,
        rate: 42.51
    },
    {
        weight: 58,
        rate: 43.21
    },
    {
        weight: 59,
        rate: 43.91
    },
    {
        weight: 60,
        rate: 44.61
    },
    {
        weight: 61,
        rate: 45.31
    },
    {
        weight: 62,
        rate: 46.01
    },
    {
        weight: 63,
        rate: 46.71
    },
    {
        weight: 64,
        rate: 47.41
    },
    {
        weight: 65,
        rate: 48.11
    },
    {
        weight: 66,
        rate: 48.81
    },
    {
        weight: 67,
        rate: 49.51
    },
    {
        weight: 68,
        rate: 50.21
    },
    {
        weight: 69,
        rate: 50.91
    },
    {
        weight: 70,
        rate: 51.61
    },
]

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/weight/', (req, res) => {
    console.log(mediaMail)
    return res.json(mediaMail)
})

app.get('/api/weight/:weight', (req, res) => {
    const weight = Number(req.params.weight)
    const package = mediaMail.find( package => package.weight === weight)

    if (package){
        console.log(package.rate)
        res.json(package.rate)
        } else {
          res.statusMessage = `Rate for ${weight} lbs package not found!`;
          res.status(404).end()
        }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server Activated on ${PORT}!`)
})