let arr = prompt('Please enter the array elements');
let arrr = arr.split(' ');
console.log('Your unchanged array:', arrr);
arrr.sort((a, b) => a - b);
console.log('Your sort array:', arrr);
arrr.splice(1, 3);
console.log('Your array without 2-4 elements inclusive:', arrr);




