import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './components/charts/charts.component';
import { DashComponent } from './components/dash/dash.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EcommercComponent } from './components/ecommerc/ecommerc.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegisterComponent } from './components/register/register.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
    children: [
      { path: 'sidemenu', component: SideMenuComponent },
      { path: 'home', component: HomeComponent },
      { path: 'nav', component: NavigationComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'info', component: InfoComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'ecommerc', component: EcommercComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
export const routesLinks = [
  DashComponent,
  SideMenuComponent,
  HomeComponent,
  NavigationComponent,
  RegisterComponent,
  FormsComponent,
  InfoComponent,
  TablesComponent,
  ChartsComponent,
  EcommercComponent,
  DashboardComponent,
];
