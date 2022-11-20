import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import { LangagesComponent } from './pages/competences/langages/langages.component';
import { FormationsComponent } from './pages/competences/formations/formations.component';
import { AutresComponent } from './pages/competences/autres/autres.component';
import { InteretsComponent } from './pages/competences/interets/interets.component';
import { ProjetComponent } from './pages/projets/projet/projet.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjetsComponent,
    ContactComponent,
    CompetencesComponent,
    LangagesComponent,
    FormationsComponent,
    AutresComponent,
    InteretsComponent,
    ProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
