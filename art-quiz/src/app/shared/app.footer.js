import { WFMComponent } from 'framework';

class AppFooter extends WFMComponent {
  constructor(config) {
    super(config)
  }
}

export const appFooter = new AppFooter({
  selector: 'app-footer',

  template: `
    </footer> 
      <div class="container footer-container__down">
        <div>
          © 2021
        </div>
        <div class="footer-container__down-rss">
          <a href="https://app.rs.school/course/student/cross-check-submit?course=js-fe-2021Q3">The Rolling Scopes School</a>
        </div>
        <div class="footer-link">
          <a href="https://github.com/igor2000xp/rsschool-cv">igor2000xp</a>
        </div>
      </div>
    </footer>
      
  `,

  styles: `
    .header__logo {
      margin-left: 20px;
    }
  
  `
})