import pipesFactory from './pipes-factory';
import _ from '../../tools/util';

export default function applyPipe(pipeData, value) {
  const pipe = pipesFactory.getPipe(pipeData.name);
  const pipeDataNew = { args: [] };

  if (_.isUndefined(pipe)) throw new Error(`Pipe with name ${pipeData.name} wasn't found`);

  if (_.isUndefined(pipeData.args)) {
    pipeDataNew.args = [];
  }
  pipeData.args.forEach((el) => {
    pipeDataNew.args.push(el);
  });
  return pipe.transform(value, ...pipeDataNew.args);
}
