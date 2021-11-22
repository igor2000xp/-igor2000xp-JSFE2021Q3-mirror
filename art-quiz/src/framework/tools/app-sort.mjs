import { getCategories } from './create-array.categories.mjs';

let cat = [];
let path = './data.json';
// getCategories('./data.json').then(function() {
//   cat = getCategories('./data.json');
// });

// var cat = getText(item.name).then(res=>console.log(res))

// cat = getCategories(path).then(res=>console.log(res));
// getCategories(path).then(res=>{cat = res});

// hello().then((value) => console.log(value))
getCategories(path).then((value) => cat = value);


console.log(cat);






// console.log(appSort.sortedArray);
// console.log(appSort.path);