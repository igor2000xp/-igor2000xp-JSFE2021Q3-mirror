import { readJsonFile } from "./read-json.mjs";
import { getCategories } from './create-array.categories.mjs'


export class GetPicByCategories {
  constructor(config) {
    this.path = config.path;
    this.categories = [];
    this.dataFromJson = [];
    this.sortedArray = [];
  }

   async on() {
     console.log(this.path);
    this.categories =  await getCategories(this.path);

    return this.categories;
    // this.dataFromJson  = await readJsonFile(this.path);
    // this.sortedArray = await sortCat (this.path);
  }


}



async function sortCat (path) {

  let categories = await getCategories(path);
  let dataFromJson = await readJsonFile(path);
  let sortedArray = [];


  for (let i = 0; i < categories.length; i++) {
    
    dataFromJson.forEach(element => {
      if(categories[i] == dataFromJson.category) {
        push(sortedArray) = dataFromJson;
      }
    });
    
  }
  return 
}




// async function getPicByCategories() {

  
//   let dataFromJson = await readJsonFile('./data.json');
//   let categories = await getCategories('./data.json');

//   console.log(dataFromJson);
//   let categories = Object.entries(dataFromJson);
//   let cat = [];
//   console.log(categories[5][1].category + '---' + categories.length / 2);


//   for(let i = 0; i < categories.length / 2; i++) {
//     cat[i] = categories[i][1].category;
  
//   }
//   cat = [...new Set(cat)];  // Remove doubles
//   // console.log(cat);
// }


// getPicByCategories();