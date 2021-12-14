import './sources.css';
import { IArtNews } from '../../interfaces/interfacesAndTypes';

export class Sources {
  public draw(values: Array<IArtNews>) {

    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp')!;

    values!.forEach((item) => {
      const sourceClone = <HTMLTemplateElement>sourceItemTemp.content!.cloneNode(true);
      sourceClone.querySelector('.source__item-name')!.textContent = item.name!;
      sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id!);

      fragment.append(sourceClone);
    });


    document.querySelector('.sources')!.append(fragment);
  }
}
