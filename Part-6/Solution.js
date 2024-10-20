function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
        newUser.score++;
    };
    return newUser;
};

const user1 = userCreator("Michal", 3);
const user2 = userCreator("Nithesh", 6);
user1.increment();