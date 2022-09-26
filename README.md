# random-fruit-package

## Installation

This package is available via npm:

```
npm i get-random-fruit
```

## Usage

```javascript
const { randomFruit, randomFruits, fruits } = require("get-random-fruit");

randomFruit(); //Output random fruit in the singular
randomFruits(); //Output array of 5 fruits in singular
randomFruits(12); //Output array of 12 fruits in singular
randomFruits(12, true); //Output array of 12 fruits in plural

console.log(fruits); //Show list of all fruits