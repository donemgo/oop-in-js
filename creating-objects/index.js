const user = Object.create(null);
const user1 = Object.create({ name: 'dozie' });
// user and user1 are going to be both empty objects, but user1 would have something interesting

function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };
  return newUser;
}

const user1 = userCreator('phil', 40);
const user2 = userCreator('kebuke', 50);
