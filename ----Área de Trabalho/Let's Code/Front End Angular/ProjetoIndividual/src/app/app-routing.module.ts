import { AddComponent } from './pages/add/add.component';
import { TeamComponent } from './pages/team/team.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"players", component: TeamComponent},
  { path:"", redirectTo: "players", pathMatch: "full" },
  {path:"add", component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
