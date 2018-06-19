import { Component } from '@angular/core';
import { Routes } from '@angular/router'

import { BuscarEscolasComponent } from './buscar-escolas/buscar-escolas.component';
import { ConsultaPosicaoComponent } from './consulta-posicao/consulta-posicao.component';
import { FaqComponent } from './faq/faq.component';
import { TelefonesUteisComponent } from './telefones-uteis/telefones-uteis.component';


const ROUTES: Routes = [
    {path: 'busca', component: BuscarEscolasComponent},
    {path: 'posicao', component: ConsultaPosicaoComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'telefones', component: TelefonesUteisComponent},
    { path: '', redirectTo: '/busca', pathMatch: 'full' },
]

export { ROUTES }