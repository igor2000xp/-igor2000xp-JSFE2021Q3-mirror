import { readJsonFile } from "./read-json.mjs";


export async function getCategories(path) {
  let dataFromJson = await readJsonFile(path);
  let categories = Object.entries(dataFromJson);
  let cat = [];

  for(let i = 0; i < categories.length / 2; i++) {
    cat[i] = categories[i][1].category;
  }
  cat = [...new Set(cat)];  // Remove doubles
  console.log(cat);
  return cat;
}

export async function getAuthors(path) {
  let dataFromJson = await readJsonFile(path);
  let categories = Object.entries(dataFromJson);
  let authors = [];

  for(let i = 0; i < categories.length / 2; i++) {
    authors[i] = categories[i][1].author;
  }
  authors = [...new Set(authors)];  // Remove doubles
  console.log(authors);
  return authors;
}

export async function getCatJson(path) {
  let dataFromJson = await readJsonFile(path);
  let categories = Object.entries(dataFromJson);

  // console.log(categories[119][1]);
  return categories;
}


export async function sortCatPic (path) {

  let categories = await getCategories(path);
  let dataFromJson = await readJsonFile(path);
  let sortedArray = [];


  for (let i = 0; i < categories.length; i++) {
    // console.log(categories[i]);
    for (let j = 0; j < dataFromJson.length; j++) {
    
      if(categories[i] == dataFromJson[j].category) {
        // console.log(e);
        sortedArray[j] = dataFromJson[j];
        sortedArray[j].catNum = i;
      }
    }
    
  }
  // This code is needed to get a numbered array by category
  // sortedArray.forEach(e => {
  //   if(e.catNum == 11) console.log(e);  
  // });


  // console.log(sortedArray);
  return sortedArray;
}




// getCategories('./data.json');
getAuthors('./data.json');
// getCatJson('./data.json');
// sortCatPic ('./data.json');


