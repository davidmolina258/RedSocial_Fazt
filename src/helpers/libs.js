const helpers = {};

helpers.randomName = () => {
  let posible = "abcdefghijkmnlopqrstuvwxyz0123456789";
  let randomNumber = 0;
  for (let i = 0; i < 6; i++) {
    randomNumber += posible.charAt(Math.floor(Math.random() * posible.length));
  }

  return randomNumber;
};

module.exports = helpers;
