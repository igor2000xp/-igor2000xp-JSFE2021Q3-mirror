import { homePageComponent } from "./pages/home-page.component";
import { tabsPageComponent } from "./pages/tabs-page.component";
import { tabsPicPageComponent } from "./pages/tabs-pic-page.component";
import { directivePageComponent } from "./pages/directive-page.component";
import { pipePageComponent } from "./pages/pipes-page.component";
import { questPageComponent } from "./pages/question-page.component";

import { notFound } from "./shared/not-found.component";


export const appRoutes = [
  { path: '', component: homePageComponent },
  { path: 'tabs', component: tabsPageComponent },
  { path: 'directive', component: directivePageComponent },
  { path: 'pipe', component: pipePageComponent },
  { path: '**', component: notFound },
  { path: 'tabs-pic', component: tabsPicPageComponent },
  { path: 'tabs-quest', component: questPageComponent }
  
]
