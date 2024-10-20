function userCreator(name, score) {
    // const newUser = Object.create(userFunctionStore);
    /* newUser*/ this.name = name;
    /*newUser*/ this.score = score;
    // return newUser;
};

/*functionStore*/ userCreator.prototype //{};
/*functionStore*/ userCreator.prototype.increment = function() {
    this.score++;
}

const user1 = new userCreator("Michal", 3);
const user2 = new userCreator("Nithesh", 6);