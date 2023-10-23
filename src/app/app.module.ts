import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

// Importamos el guard AuthGuard
import { AuthGuard } from './auth.guard';

@NgModule({
declarations: [AppComponent],
imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MatProgressBarModule, IonicStorageModule.forRoot(), HttpClientModule],
providers: [
{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
// Agregamos el guard AuthGuard a los proveedores del módulo
AuthGuard
],
bootstrap: [AppComponent],
})
export class AppModule { }
