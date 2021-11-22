import { WFMComponent, $ } from 'framework';

class TabsPageComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }

  events() {
    return {
      'click .collapsible': 'onTabClick'  
    }
  };

  // onInit() {
  //   http.get('https://api.ipify.org?format=json')
  //     .then(({ip}) => {
  //         _.delay(1000).then(() => {
  //         this.data.ip = ip;
  //          this.render();
  //         });
          
  //     })
  // }


  onTabClick({target}) {
    // console.log(event);
    let $target = $(target);
    if(!$target.hasClass('collapsible-header')) return;

    // this.el.querySelectorAll('.js-tab').forEach(e => {
    //   e.classList.remove('active');
    // });
    // target.parentNode.classList.add('active');

    this.el.findAll('.js-tab').forEach(e => {
      e.removeClass('active');
    });
    $target.parent().addClass('active');
  }
}

export const tabsPageComponent = new TabsPageComponent ({
  selector: 'app-tabs-page',
  template: `
    
    <div class="row">
      <div class="col s6 offset-s3">
        <ul class="collapsible popout collapsible-accordion">

          <li class="js-tab">
            <div class="collapsible-header">
              <i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</span>
            </div>
          </li>

          <li class="js-tab active">
            <div class="collapsible-header">
              <i class="material-icons">place</i>Second</div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</span>
            </div>
          </li>

          <li class="js-tab">
            <div class="collapsible-header">
              <i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</span>
            </div>
          </li>

         </ul>

      </div>
    </div>
  `,

    styles: `
    .collapsible-accordion {
      margin-top: 30px
    }

    .collapsible li.active .collapsible-body {
      display: block;
    }
    `
});

