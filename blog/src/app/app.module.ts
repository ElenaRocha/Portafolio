import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { FormularioComponent } from './formulario/formulario.component';
import { VistaPostComponent } from './vista-post/vista-post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FormularioComponent,
    VistaPostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
