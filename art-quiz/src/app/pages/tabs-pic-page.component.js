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

export const tabsPicPageComponent = new TabsPageComponent ({
  selector: 'app-tabs-pic-page',
  template: `
    
    
<div class="wrapper-art">


<div class="container-cat__art">
  <header class="heder-settings__art">
    <div class="header-top">
      <div class="art-settings__left">
        <img src="../img/quiz/logo_art.svg" alt="art-setup">
      </div>
      <div class="art-settings">
        <img src="../img/quiz/carbon_settings.svg" alt="art-setup">
      </div>

    </div>
    <div class="art-settings__cat">
      <h1>Categories</h1>
    </div>
  </header>

  
    <section class="content">

      <div class="cont-pics">

        <div class="cont-pic">
          <div class="header-pic">
            <div class="heder-pic__name">
              <h4>Realism</h4>
            </div>
            <div class="heder-pic__score">
              <h4>0/10</h4>
            </div>
          </div>

          <div class="pic-cat__container">
            <a href="./#">
              <img class="pic-cat" src="../img/cat/0.jpg" alt="realism">
             </a>
          </div>

        </div>
        
        <div class="cont-pic">
          <div class="header-pic">
            <div class="heder-pic__name">
              <h4>Impressionism</h4>
            </div>
            <div class="heder-pic__score">
              <h4>0/10</h4>
            </div>
          </div>
          <div class="pic-cat__container">
            <a href="./#">
              <img class="pic-cat" src="../img/cat/1.jpg" alt="realism">
             </a>
          </div>

        </div>

        <div class="cont-pic">
          <div class="header-pic">
            <div class="heder-pic__name">
              <h4>Religion</h4>
            </div>
            <div class="heder-pic__score">
              <h4>0/10</h4>
            </div>
          </div>
          <div class="pic-cat__container">
            <a href="./#">
              <img class="pic-cat" src="../img/cat/2.jpg" alt="realism">
             </a>
          </div>
        </div>
        
        <div class="cont-pic">
          <div class="header-pic">
            <div class="heder-pic__name">
              <h4>Portrait</h4>
            </div>
            <div class="heder-pic__score">
              <h4>0/10</h4>
            </div>
          </div>
          <div class="pic-cat__container">
            <a href="./#">
              <img class="pic-cat" src="../img/cat/3.jpg" alt="realism">
             </a>
          </div>
        </div>
        
        <div class="cont-pic">
          <div class="header-pic">
            <div class="heder-pic__name">
              <h4>Renaissance</h4>
            </div>
            <div class="heder-pic__score">
              <h4>0/10</h4>
            </div>
          </div>
          <div class="pic-cat__container">
            <a href="./#">
              <img class="pic-cat" src="../img/cat/4.jpg" alt="realism">
             </a>
          </div>
        </div>
        
        <div class="cont-pic">
          <div class="header-pic">
            <div class="heder-pic__name">
              <h4>Painting</h4>
            </div>
            <div class="heder-pic__score">
              <h4>0/10</h4>
            </div>
          </div>
          <div class="pic-cat__container">
            <a href="./#">
              <img class="pic-cat" src="../img/cat/5.jpg" alt="realism">
             </a>
          </div>
        </div>

        <div class="cont-pic">
          <div class="header-pic">
            <div class="heder-pic__name">
              <h4>Landscape</h4>
            </div>
            <div class="heder-pic__score">
              <h4>0/10</h4>
            </div>
          </div>
          <div class="pic-cat__container">
            <a href="./#">
              <img class="pic-cat" src="../img/cat/6.jpg" alt="realism">
             </a>
          </div>
        </div>
        
        <div class="cont-pic">
          <div class="header-pic">
            <div class="heder-pic__name">
              <h4>Marine</h4>
            </div>
            <div class="heder-pic__score">
              <h4>0/10</h4>
            </div>
          </div>
          <div class="pic-cat__container">
            <a href="./#">
              <img class="pic-cat" src="../img/cat/7.jpg" alt="realism">
             </a>
          </div>
        </div>

        <div class="cont-pic">
          <div class="header-pic">
            <div class="heder-pic__name">
              <h4>Avant-garde</h4>
            </div>
            <div class="heder-pic__score">
              <h4>0/10</h4>
            </div>
          </div>
          <div class="pic-cat__container">
            <a href="./#">
              <img class="pic-cat" src="../img/cat/8.jpg" alt="realism">
             </a>
          </div>
        </div>
        
        <div class="cont-pic">
          <div class="header-pic">
            <div class="heder-pic__name">
              <h4>Surrealism</h4>
            </div>
            <div class="heder-pic__score">
              <h4>0/10</h4>
            </div>
          </div>
          <div class="pic-cat__container">
            <a href="./#">
              <img class="pic-cat" src="../img/cat/9.jpg" alt="realism">
             </a>
          </div>
        </div>

        <div class="cont-pic">
          <div class="header-pic">
            <div class="heder-pic__name">
              <h4>Romanticism</h4>
            </div>
            <div class="heder-pic__score">
              <h4>0/10</h4>
            </div>
          </div>
          <div class="pic-cat__container">
            <a href="./#">
              <img class="pic-cat" src="../img/cat/10.jpg" alt="realism">
             </a>
          </div>
        </div>
        
        <div class="cont-pic">
          <div class="header-pic">
            <div class="heder-pic__name">
              <h4>Expressionism</h4>
            </div>
            <div class="heder-pic__score">
              <h4>0/10</h4>
            </div>
          </div>
          <div class="pic-cat__container">
            <a href="./#">
              <img class="pic-cat" src="../img/cat/11.jpg" alt="realism">
             </a>
          </div>
        </div>


      </div>


    </section>

    <footer class="footer__art"> 
      <div class="footer-cont-art__down">

        <div class="footer-cont-art__home">
          <a href="./#">
            <img src="../img/quiz/home.svg" alt="RSSchool">
          </a>
        </div>
        <div class="footer-cont-art__cat">
       
            <img src="../img/quiz/cat_colour.svg" alt="RSSchool">
          
        </div>
        <div class="footer-cont-art__score">
          <a href="#">
            <img src="../img/quiz/score.svg" alt="RSSchool">
          </a>
        </div>
      </div>
    </footer>

</div>



</div>
  `,

    styles: `

    `
});

