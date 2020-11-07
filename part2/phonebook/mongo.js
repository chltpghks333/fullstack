const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide all the required entries')
    process.exit(1)
}

const password = process.argv[2]

// build connection to mongo database
const url =
    `mongodb+srv://swanchoi:${password}@cluster0.9t5nt.mongodb.net/person_app?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})

// create a schema for the collection and a model that goes into the collection(people)
const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length > 3) {
    const name = process.argv[3]
    const number = process.argv[4]

    const person = new Person({
        name: name,
        number: number,
    })

    person.save().then(result => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
} else {
    Person
        .find({})
        .then(persons => {
            persons.forEach(person => {
                console.log(person)
            })
            mongoose.connection.close()
        })


}



