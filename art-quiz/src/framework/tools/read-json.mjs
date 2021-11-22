import { ReadStream } from 'fs';



function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    // console.log(path);
    var stream = new ReadStream(path, "utf8");
    stream.on('readable', function () {
      var data = stream.read();
      if (data !== null) {
        // console.log(data);
        resolve(data);
      }
    });

  });
}

export async function readJsonFile(path) {

  let data = await readFilePromise(path);
  // console.log(JSON.parse(data));
  return data = JSON.parse(data);
} 


// readJsonFile('./data.json');
