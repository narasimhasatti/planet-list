import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { FavouriteListComponent } from './planet-list/favourite-list/favourite-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    FavouriteListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
