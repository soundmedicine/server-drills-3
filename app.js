const express = require('express')
const cors = require('cors')

let students = [{
    id: 1,
    firstName: 'Alice',
    lastName: 'Zephyr',
    hometown: 'Seattle'
}, {
    id: 2,
    firstName: 'Bob',
    lastName: 'Yellow',
    hometown: 'Vancouver'
}, {
    id: 3,
    firstName: 'Claire',
    lastName: 'Xylitol',
    hometown: 'Toledo'
}, {
    id: 4,
    firstName: 'Daniel',
    lastName: 'Winston',
    hometown: 'Akron'
}, {
    id: 5,
    firstName: 'Edina',
    lastName: 'Veritas',
    hometown: 'Wichita'
}]

function findById(data, id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i]
        }
    }
    return null
}

const app = express()
app.use(cors())

app.get('/', function(request, response) {
    response.json({data: students})
})

app.use('/:id', function(request, response) {
    let record = findById(instructors, request.params.id)
    if (!record) {
        response.status(404).send('No record found!')
    }
    response.json({data: record})
})

app.listen(process.env.PORT || 3000)
