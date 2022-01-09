import homeVarsHeader from './home-vars-header';
import homeVarsFooter from './home-vars-footer';

const homePageMain = `
<div class="container" style="with: 100%">
${homeVarsHeader}
  <div class="wrapper">
    <section class="home__page">
      <div class="logo__container">
        <img class="logo" 
        src="https://raw.githubusercontent.com/igor2000xp/assets-art-quiz/main/assets/quiz/group_1438.png" alt="art-quiz">
      </div>
      
      <a href="#tabs-auth">
        <button appHover="violet" class="waves-effect button__home button__artist" style="transition: 1s ease-out;"> 
        <p appHover="violet">
          Artist quiz
        </p>
        
        </button>
      </a>
      <a href="#tabs-pic">
        <button class="waves-effect button__home button__artist" style="transition: 1s ease-out;"> 
          Picture quiz
        </button>
      </a>
    </section>
   ${homeVarsFooter}
  </div>
</div>
`;

export default homePageMain;