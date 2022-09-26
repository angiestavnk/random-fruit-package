const data = require("./data/data.json");

function randomFruit() {
  return data[Math.floor(Math.random() * data.length)].singular;
};

function randomFruits(n = 5, plural = false) {
  let fruitsArr = [];
  let copyData = JSON.parse(JSON.stringify(data));
  for(let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * copyData.length);
    let randomElement = copyData.splice(randomIndex, 1)[0];
    fruitsArr.push(plural ? randomElement.plural : randomElement.singular);
  }
  return fruitsArr;
};

module.exports = {
  fruits: data,
  randomFruit: randomFruit,
  randomFruits: randomFruits
};
