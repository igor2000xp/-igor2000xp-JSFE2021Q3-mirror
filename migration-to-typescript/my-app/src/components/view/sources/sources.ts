import './sources.css';
import { IArtNews, dataSources } from '../../interfaces/interfacesAndTypes';

export class Sources {
  draw(data: Array<IArtNews>) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp')!;

    data.forEach((item) => {
      const sourceClone = <HTMLTemplateElement>sourceItemTemp.content!.cloneNode(true);
      sourceClone.querySelector('.source__item-name')!.textContent = item.name!;
      sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id!);

      fragment.append(sourceClone);
    });


    document.querySelector('.sources')!.append(fragment);
  }
}

// export default Sources;