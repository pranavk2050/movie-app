const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const movieResolvers = require('./resolvers/resolvers')
const movieSchema = require('./schema/schema')
const cors = require('cors')

mongoose.connect('mongodb+srv://pranavk2050:OF5W2k06vNzRYM6m@pranav-movie-app.evtixkl.mongodb.net/?retryWrites=true&w=majority',{
    useNewURLParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected')
}).catch((err) => {
    console.log('Error: ',err)
})

app.use(cors())

//var source = "{ hello }"
/* 
graphql({ schema, source, rootValue }).then(response => {
  console.log(response)
}) */

app.use('/graphql',graphqlHTTP({
    schema : movieSchema,
    rootValue : movieResolvers,
    graphiql:true
}))


app.get('/hi',(req,res) => {
    res.send('Hello from express server')
})

app.listen('4000',() => {
    console.log("server on port 4000!")
})

