import express from "express";
import {graphqlHTTP} from "express-graphql";
import schema from "./schema";
import { connect } from "./database";

const app = express();
connect();

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
        message: "text"
    }
}));

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})