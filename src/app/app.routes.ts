import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {IndexComponent} from "./components/index/index.component";

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];
