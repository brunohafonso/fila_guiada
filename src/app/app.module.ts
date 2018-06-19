import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { RouterModule } from '@angular/router';

import { BuscarEscolasComponent } from './buscar-escolas/buscar-escolas.component';
import { ROUTES } from './app.routes';
import { ConsultaPosicaoComponent } from './consulta-posicao/consulta-posicao.component';
import { FaqComponent } from './faq/faq.component';
import { TelefonesUteisComponent } from './telefones-uteis/telefones-uteis.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BuscarEscolasComponent,
    ConsultaPosicaoComponent,
    FaqComponent,
    TelefonesUteisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
