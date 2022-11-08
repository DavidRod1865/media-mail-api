const express = require('express')
const app = express()
const PORT = 8000

let mediaMail = {
    1: {
        shipRate: "3.49"
    },
    2: {
        shipRate: "4.16"
    },
    3: {
        shipRate: "4.83"
    },
    4: {
        shipRate: "5.50"
    },
    5: {
        shipRate: "6.17"
    },
    6: {
        shipRate: "6.84"
    },
    7: {
        shipRate: "7.51"
    },
    8: {
        shipRate: "8.21"
    },
    9: {
        shipRate: "8.91"
    },
    10: {
        shipRate: "9.61"
    },
    11: {
        shipRate: "10.31"
    },
    12: {
        shipRate: "11.01"
    },
    13: {
        shipRate: "11.71"
    },
    14: {
        shipRate: "12.41"
    },
    15: {
        shipRate: "13.11"
    },
    16: {
        shipRate: "13.81"
    },
    17: {
        shipRate: "14.51"
    },
    18: {
        shipRate: "15.21"
    },
    19: {
        shipRate: "15.91"
    },
    20: {
        shipRate: "16.61"
    },
    21: {
        shipRate: "17.31"
    },
    22: {
        shipRate: "18.01"
    },
    23: {
        shipRate: "18.71"
    },
    24: {
        shipRate: "19.41"
    },
    25: {
        shipRate: "20.11"
    },
    26: {
        shipRate: "20.81"
    },
    27: {
        shipRate: "21.51"
    },
    28: {
        shipRate: "22.21"
    },
    29: {
        shipRate: "22.91"
    },
    30: {  
        shipRate: "23.61"
    },
    31: {
        shipRate: "24.31"
    },
    32: {
        shipRate: "25.01"
    },
    33: {
        shipRate: "25.71"
    },
    34: {
        shipRate: "26.41"
    },
    35: {
        shipRate: "27.11"
    },
    36: {
        shipRate: "27.81"
    },
    37: {
        shipRate: "28.51"
    },
    38: {
        shipRate: "29.21"
    },
    39: {
        shipRate: "29.91"
    },
    40: {
        shipRate: "30.61"
    },
    41: {
        shipRate: "31.31"
    },
    42: {
        shipRate: "32.01"
    },
    43: {
        shipRate: "32.71"
    },
    44: {
        shipRate: "33.41"
    },
    45: {
        shipRate: "34.11"
    },
    46: {
        shipRate: "34.81"
    },
    47: {
        shipRate: "35.51"
    },
    48: {
        shipRate: "36.21"
    },
    49: {
        shipRate: "36.91"
    },
    50: {
        shipRate: "37.61"
    },
    51: {
        shipRate: "38.31"
    },
    52: {
        shipRate: "39.01"
    },
    53: {
        shipRate: "39.71"
    },
    54: {
        shipRate: "40.41"
    },
    55: {
        shipRate: "41.11"
    },
    56: {
        shipRate: "41.81"
    },
    57: {
        shipRate: "42.51"
    },
    58: {
        shipRate: "43.21"
    },
    59: {
        shipRate: "43.91"
    },
    60: {
        shipRate: "44.61"
    },
    61: {
        shipRate: "45.31"
    },
    62: {
        shipRate: "46.01"
    },
    63: {
        shipRate: "46.71"
    },
    64: {
        shipRate: "47.41"
    },
    65: {
        shipRate: "48.11"
    },
    66: {
        shipRate: "48.81"
    },
    67: {
        shipRate: "49.51"
    },
    68: {
        shipRate: "50.21"
    },
    69: {
        shipRate: "50.91"
    },
    70: {
        shipRate: "51.61"
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/weight/:num', (req, res) => {
    const bookWeight = req.params.num
    if (mediaMail[bookWeight]){
    res.json(mediaMail[bookWeight].shipRate)
    console.log(mediaMail[bookWeight].shipRate)
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server Activated on ${PORT}!`)
})