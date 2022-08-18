import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { EditEduComponent } from './components/educacion/edit-edu/edit-edu.component';
import { NewEduComponent } from './components/educacion/new-edu/new-edu.component';
import { EditExpComponent } from './components/experiencia/editExp/edit-exp.component';
import { NewExpComponent } from './components/experiencia/newExp/new-exp.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'newExp',component: NewExpComponent},
  {path:'editExp/:id',component: EditExpComponent},
  {path:'newEdu',component: NewEduComponent},
  {path:'editEdu/:id',component: EditEduComponent},
  {path:'editAcercaDe/:id',component: EditarAcercaDeComponent},
  {path:'editSkill/:id',component: EditSkillComponent},
  {path:'newSkill',component: NewSkillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
