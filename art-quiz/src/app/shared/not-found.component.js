import { WFMComponent } from '../../framework/index';

class NotFound extends WFMComponent {
  // constructor(config) {
  //   super(config);
  // }
}

const notFound = new NotFound({
  selector: 'app-not-found',

  template: `
    <div class="not-found-block">
      <div>
        <h2 class="red darken-1">404</h2>
        <h4>Страница не найдена</h4>
        <a href="#">Перейти на главную</a>
      </div>
    </div>   
  `,
  styles: `
  .not-found-block {
    display: flex; 
    align-items: center; 
    justify-content: center;
  }
  `,
});

export default notFound;
