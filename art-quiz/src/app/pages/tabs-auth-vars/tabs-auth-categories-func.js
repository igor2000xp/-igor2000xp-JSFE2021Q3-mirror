import dataCategories from '../../data-files/data-categories';

function funcTabsAuthCategories(countCategories, score, gameType) {
  let template = ``;
  for(let i = 0; i < countCategories; i++) {
    let categories = dataCategories[i];
    const scoreFunc = score[i];
  template += `
  <div class="cont-pic">
  
    <div class="header-pic">
  
      <div class="heder-pic__name">
        <h4>
          ${categories}
        </h4>
      </div> <!-- end of heder-pic__name -->
  
      <div class="heder-pic__score">
        <h4>
          ${scoreFunc}
        /10</h4>
      </div>
  
    </div> <!-- End  of header-pic -->
  
    <div class="pic-cat__container">
      <a href="./#${gameType}">
        <img class="pic-cat" 
        src="https://raw.githubusercontent.com/igor2000xp/assets-art-quiz/main/assets/cat/${i}.jpg" 
        alt="categories">
        </a>
    </div> <!-- End of class="pic-cat__container" -->
  
  </div> <!-- Ebd of cont-pic -->
  
  
  
  `;
  }
  return template;
} 

export default funcTabsAuthCategories;
