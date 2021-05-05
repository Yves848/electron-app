import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';

const routes: Routes = [
  { path: '', component: MaincomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
