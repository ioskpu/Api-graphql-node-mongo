import { tasks } from "./sample";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World w/ GraphQL!';
        },
        greet(root, {name}, context)  {
            console.log(context);
            console.log(name);
            return 'Hello! ' + name;
        },
        tasks: () => {
            return tasks
        }
    },
    Mutation: {
        createTask: (root, {input}) => {
            input._id = tasks.length + 1;
            tasks.push(input);
            return input;
        }
    }
}