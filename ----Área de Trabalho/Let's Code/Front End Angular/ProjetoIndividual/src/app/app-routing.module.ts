import { AddComponent } from './pages/add/add.component';
import { TeamComponent } from './pages/team/team.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"players", component: TeamComponent},
  {path:"", redirectTo: "players", pathMatch: "full" },
  {path:"add", component: AddComponent},
  {path:"**",component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
