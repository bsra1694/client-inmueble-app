import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmuebleRoutingModule } from './inmueble-routing.module';
import { StoreModule } from '@ngrx/store';

import {reducers, effects} from './store';
import { EffectsModule } from '@ngrx/effects';
import { SaveEffects } from './store/save/save.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InmuebleRoutingModule,
    StoreModule.forFeature('inmueble', reducers),
    EffectsModule.forFeature([SaveEffects]),
  ]
})
export class InmuebleModule { }
