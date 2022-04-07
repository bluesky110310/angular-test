import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodesListComponent } from './nodes-list/nodes-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'nodes', pathMatch: 'full' },
  { path: 'nodes', component: NodesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
