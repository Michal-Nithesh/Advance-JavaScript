function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increment: function() { this.score++; },
    login: function() { console.log("Logged in");}
};

const user1 = userCreator("Michal", 3);
const user2 = userCreator("Nithesh", 6);
user1.increment();
user1.hasOwnProperty("score")