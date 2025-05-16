const today = new Date();
const year = today.getUTCFullYear();
const month = String(today.getUTCMonth() + 1).padStart(2, '0');
const day = String(today.getUTCDate()).padStart(2, '0');

console.log(`${year}-${month}-${day}`);
