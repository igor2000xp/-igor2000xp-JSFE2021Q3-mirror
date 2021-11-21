
export function parsePipe(key) {
  let pipe = key.split('|')[1].trim(); 


  if(!hasParams(pipe)) return { name: pipe };


  // Number:2:2 

  let pipeData = pipe.split(':');
  return {
    name: pipeData[0],
    args: pipeData.slice(1)
  }
}

function hasParams(pipe) {
  return pipe.includes(':')
}