import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, RootComponent } from './routes';
import { FormsModule }   from '@angular/forms'; 

import { DragulaModule } from 'ng2-dragula'
import { mainComponent } from './main';

import { FormComponent } from './components/form/form';
import { GridComponent } from './components/grid/GridComponent';
import { InputComponent } from './components/input/InputComponent';
import { Attribute } from './components/attribute/attribute';
// InputMenu
import { InputMenu } from './components/InputMenu/InputMenu';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    DragulaModule,
    FormsModule
  ],
  declarations: [
    RootComponent,
    mainComponent,
    FormComponent,
    GridComponent,
    InputComponent,
    InputMenu,
    Attribute,
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
