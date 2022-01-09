function hasParams(pipe) {
  return pipe.includes(':');
}

export default function parsePipe(key) {
  const pipe = key.split('|')[1].trim();

  if (!hasParams(pipe)) return { name: pipe };

  // Number:2:2

  const pipeData = pipe.split(':');
  return {
    name: pipeData[0],
    args: pipeData.slice(1),
  };
}
