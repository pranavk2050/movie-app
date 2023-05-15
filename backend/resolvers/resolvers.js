
/* 
const movies = [
    {name: 'John Wick', genre: 'Action', year:'2019'},
    {name: 'John Wick', genre: 'Action', year:'2024'},
    {name: 'John Wick', genre: 'Action', year:'2029'},
    {name: 'John Wick', genre: 'Action', year:'2033'},
    {name: 'John Wick', genre: 'Action', year:'2037'},
    {name: 'John Wick', genre: 'Action', year:'2041'},
    {name: 'John Wicked', genre: 'Action', year:'2050'},
  ] */

  const mongoModel = require('../model/model');

const resolvers = { 
    listMovies: () =>{ 
        return mongoModel.find({})
     },

    addMovie:  (args) => {

        let newMovieData = new mongoModel({ name: args.name,
            genre: args.genre,
            year: args.year})

        newMovieData.save()
        
        return newMovieData
             
    }
   
};
module.exports = resolvers