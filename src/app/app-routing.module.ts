
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importing all the compoennts that we need to mdule 
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path : '',
    component : ViewComponent
  },
  {
    path : 'create',
    component : CreateComponent
  },
  {
    path : 'update',
    component : UpdateComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
