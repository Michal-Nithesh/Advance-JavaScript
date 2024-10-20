class UserCreator {
    constructor (name, score){
        this.name = name;
        this.score = score;
    }
    increment () { this.score++; }
    login () { console.log("Login"); }
}

const user = new UserCreator("Michal", 10);
user.increment();