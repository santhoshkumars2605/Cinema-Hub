import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge'
import {MatIconModule} from '@angular/material/icon';
import{MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieComponent } from './movie/movie.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorComponent } from './error/error.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviefilterComponent } from './moviefilter/moviefilter.component';
import { SettingfilterComponent } from './settingfilter/settingfilter.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
  


const appRoute:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomepageComponent},
  {path:'movies',component:MovieComponent},
  {path:'settings',component:SettingsComponent},
  {path:'**',component:ErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MovieComponent,
    SettingsComponent,
    ErrorComponent,
    MovielistComponent,
    MoviefilterComponent,
    SettingfilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
