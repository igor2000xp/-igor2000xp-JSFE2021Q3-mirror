import PageNotFoundComponent from './components/page-not-found.component';
import { IRoute } from './framework/router/interfaces';
import ChristmasToysListComponent from './components/christmas-toys-list.component';
import { ROUTE_NOT_FOUND } from './constants';

export const routes: IRoute[] = [
  {
    path: ROUTE_NOT_FOUND,
    component: PageNotFoundComponent,
  },
  {
    path: '',
    component: ChristmasToysListComponent,
  },
];