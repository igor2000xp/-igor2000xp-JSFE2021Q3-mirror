import PageNotFoundComponent from './components/page-not-found.component';
import { IRoute } from './framework/router/interfaces';
import ChristmasToysListComponent from './components/christmas-toys-list.component';
import HomePageComponent from './components/home-page-component';
import TreePageComponent from './components/trees-page-component';
import { ROUTE_NOT_FOUND } from './constants';

export const routes: IRoute[] = [
  {
    path: ROUTE_NOT_FOUND,
    component: PageNotFoundComponent,
  },
  {
    path: '/toys',
    component: ChristmasToysListComponent,
  },
  {
    path: '/',
    component: HomePageComponent,
  },
  {
    path: '/trees',
    component: TreePageComponent,
  },

];