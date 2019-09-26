import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExperiencesComponent} from './experiences/experiences.component';
import {LoisirsComponent} from './loisirs/loisirs.component';
import {ContactsComponent} from './contacts/contacts.component';
import {FormationsComponent} from './formations/formations.component';

const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path: 'experiences', component: ExperiencesComponent},
    {path: 'loisirs', component: LoisirsComponent},
    {path: 'contacts', component: ContactsComponent},
    {path:'formations',component:FormationsComponent},
    {path:'**', redirectTo:'home',pathMatch:'full'},
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  })
export class AppRoutingModule {}
