const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// Define logic for graphql queries
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true, 
}));

// Express listening port
app.listen(4000, () => {
    console.log('Listening');
});