// 'use strict';

// import './styles/style.scss';
// import { Home } from './framework/core/components/pages/Home';
// import { Categories } from './framework/core/components/pages/Categories';
// import { Settings } from './framework/core/components/pages/Settings';
// import { Error404 } from './framework/core/components/pages/Error404';
// import { Header } from './components/Header';
// import { Footer } from './components/Footer';
// import { Utils } from './utils/Utils';
import { appModule } from './app/app.module';
import { bootstrap } from './framework/core/bootstrap';

bootstrap(appModule);

// const homeInstance = new Home();
// const settingsSettings = new Settings();
// const categoriesInstance = new Categories();
// const error404Instance = new Error404();
// const headerInstance = new Header();
// const footerInstance = new Footer();
// const routes = {
//   '/': homeInstance,
//   '/settings': settingsSettings,
//   '/categories': categoriesInstance,
// };

// const router = async () => {
//   const header = null || document.getElementById('header_container');
//   const content = null || document.getElementById('page_container');
//   const footer = null || document.getElementById('footer_container');

//   header.innerHTML = await headerInstance.render();
//   await headerInstance.after_render();

//   footer.innerHTML = await footerInstance.render();
//   await footerInstance.after_render();

//   const request = Utils.parseRequestURL();
//   const parsedURL = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');
//   const page = routes[parsedURL] ? routes[parsedURL] : error404Instance;
//   content.innerHTML = await page.render();
//   await page.after_render();
// };

// window.addEventListener('hashchange', router);
// window.addEventListener('load', router);
