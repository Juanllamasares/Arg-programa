import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewExpComponent } from './components/experiencia/newExp/new-exp.component';
import { EditExpComponent } from './components/experiencia/editExp/edit-exp.component';
import { NewEduComponent } from './components/educacion/new-edu/new-edu.component';
import { EditEduComponent } from './components/educacion/edit-edu/edit-edu.component';
import { EditarAcercaDeComponent } from './components/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { EditProyectComponent } from './components/proyectos/edit-proyect/edit-proyect.component';
import { NewProyectComponent } from './components/proyectos/new-proyect/new-proyect.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponent,
    NewExpComponent,
    EditExpComponent,
    NewEduComponent,
    EditEduComponent,
    EditarAcercaDeComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditProyectComponent,
    NewProyectComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
