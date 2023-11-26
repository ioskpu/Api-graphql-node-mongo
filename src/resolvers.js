import { tasks } from "./sample";
import Users from "./models/Users";

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
        },
        async Users () {
            return await Users.find();
        }
    },
    Mutation: {
        createTask: (root, {input}) => {
            input._id = tasks.length + 1;
            tasks.push(input);
            return input;
        },
        async createUsers (_, {input}) {
            const newUser = new Users(input);
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, {_id}) {
            return await Users.findByIdAndDelete(_id);
        },
        async updateUser(_, {input}) {
            return await Users.findByIdAndUpdate(input._id, input, {new: true});
        }
    }
}