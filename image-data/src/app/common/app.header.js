import { WFMComponent } from 'framework';

class AppHeader extends WFMComponent {
  constructor(config) {
    super(config)
  }
}

export const appHeader = new AppHeader({
  selector: 'app-header',

  template: `

    <nav class="indigo">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo header__logo" >Art-quiz</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Главная</a></li>
          <li><a href="#tabs">Табы</a></li>
        </ul>
      </div>
    </nav> 
      
  `,

  styles: `
    .header__logo {
      margin-left: 20px;
    }
  
  `
})