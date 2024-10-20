function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increment: function() {
        const add = () => { this.score++ }
        add();
    },
};

const user1 = userCreator("Michal", 3);
const user2 = userCreator("Nithesh", 6);
user1.increment();
user1.hasOwnProperty("score")