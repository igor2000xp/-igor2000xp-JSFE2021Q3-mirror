import { homePageComponent } from "./pages/home-page.component";
import { tabsAuthComponent } from "./pages/tabs-auth-page.component";
import { tabsPicPageComponent } from "./pages/tabs-pic-page.component";
import { directivePageComponent } from "./pages/directive-page.component";
import { pipePageComponent } from "./pages/pipes-page.component";
import { questPicComponent } from "./pages/question-pic-page.component"
import { questAuthComponent } from "./pages/question-auth-page.component";

import { notFound } from "./shared/not-found.component";


export const appRoutes = [
  { path: '', component: homePageComponent },
  { path: 'directive', component: directivePageComponent },
  { path: 'pipe', component: pipePageComponent },
  { path: '**', component: notFound },
  { path: 'tabs-pic', component: tabsPicPageComponent },
  { path: 'tabs-auth', component: tabsAuthComponent },
  { path: 'quest-pic', component: questPicComponent },
  { path: 'quest-auth', component:   questAuthComponent }

  
]
