import express from "express";
import {graphqlHTTP} from "express-graphql";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const schema = {
    
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})