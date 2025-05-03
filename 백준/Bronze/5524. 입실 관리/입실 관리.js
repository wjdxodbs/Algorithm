const fs = require('fs');
const [n, ...names] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

names.forEach(name => {
  console.log(name.toLowerCase());
});
