import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { MediaKitComponent } from './media-kit/media-kit.component';
import { EdicionesComponent } from './ediciones/ediciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { EventosComponent } from './eventos/eventos.component';
import { EntrevistaComponent } from './entrevista/entrevista.component';


const routes: Routes = [
{path: 'inicio', component: InicioComponent},
{path: 'somos', component: QuienesSomosComponent},
{path: 'mediaKit', component: MediaKitComponent},
{path: 'ediciones', component: EdicionesComponent},
{path: 'publicidad', component: PublicidadComponent},
{path: 'articulo', component: ArticuloComponent},
{path: 'contacto', component: ContactoComponent},
{path: 'eventos', component: EventosComponent},
{path: 'entrevista', component: EntrevistaComponent},
{path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
