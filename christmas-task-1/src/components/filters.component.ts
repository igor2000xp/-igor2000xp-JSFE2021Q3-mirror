import Component from '../framework/component/component';

export  default class FiltersComponent extends Component {
  afterRender() {
    // this.categoryLinks = Array(document.querySelectorAll());
    // this.categoryLinks.forEach((el) => el.addEventListener('click', this.onCategoryClick.bind(this, el)));
  }

  onDataFilterClick(element: HTMLLIElement ) {
    // this.state.changeDataFilter(date);
    // this.state.changeCategory(element.getAttribute('category'));
  }
}