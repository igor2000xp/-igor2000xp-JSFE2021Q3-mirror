import { WFMComponent } from 'framework';

class AppHeader extends WFMComponent {
  constructor(config) {
    super(config)
  }
}

export const appHeader = new AppHeader({
  selector: 'app-header',

  template: `
    <header class="heder__settings">
      <div class="art-settings">
        <img src="../src/img/quiz/carbon_settings.svg" alt="art-setup">
      </div>
    </header>
  `,

  styles: `
  
  `
})