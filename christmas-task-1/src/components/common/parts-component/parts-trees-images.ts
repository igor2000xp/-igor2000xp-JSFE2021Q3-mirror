import data from '../../../assets/data';


export default class PartOfTreesImages {
private numberCards: number;

  constructor(numberCards: number) {
    this.numberCards = numberCards;

    this.render(this.numberCards);
  }

  public render(numberCards: number): string {
    let toysFav = '';
    let toysFavImg = '';
    for (let i = 0; i < numberCards; i++) {
      // dataTrees.push(data[i]);
  
      for (let j = 0; j < Number(data[i].count); j++) {
  
        toysFavImg += `
        <img
              class="favorites-card-img"
              src="https://raw.githubusercontent.com/igor2000xp/assets/main/toys/${i + 1}.webp"
              alt="toy"
              id="${i + 1}-${j + 1}"
              draggable="true"
              data-imgnum="${i + 1}"
            />
        `;
      }
  
      toysFav += `
        <div class="favorites-card" data-num="${i + 1}">
          <p class="favorites-count">${data[i].count}</p>
          ${toysFavImg}
        </div>
      `;
      toysFavImg = '';

  }
  return toysFav;
  
  
  }
}