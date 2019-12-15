// user and user1 are going to be both empty objects, but user1 would have something interesting
const userFunctionCreator = {
  increment: function() {
    this.score++;
  },
  login: function() {
    console.log('you are logging in');
  },
};

function userCreator(name, score) {
  const newUser = Object.create(userFunctionCreator);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const user1 = userCreator('phil', 40);
const user2 = userCreator('kebuke', 50);
user2.increment();

// now every function has it's object side and it's object side, when we declare a function we can add functions to a function using it's this idea

function userCreator2(name, score) {
  this.name = name;
  this.score = score;
}
userCreator2.prototype.increment = function() {
  this.score++;
};

const user3 = new userCreator2('Dozie', 100);
user3.increment();
