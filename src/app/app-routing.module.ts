import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: "", component: MainLayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "projets", component: ProjectComponent }
    ]
  },
  { path: "auth", component: ConnexionComponent },
  { path: "*", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
