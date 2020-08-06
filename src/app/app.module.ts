import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { MediaKitComponent } from './media-kit/media-kit.component';
import { EdicionesComponent } from './ediciones/ediciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { EventosComponent } from './eventos/eventos.component';
import { EntrevistaComponent } from './entrevista/entrevista.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    QuienesSomosComponent,
    MediaKitComponent,
    EdicionesComponent,
    ContactoComponent,
    ArticuloComponent,
    PublicidadComponent,
    EventosComponent,
    EntrevistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
