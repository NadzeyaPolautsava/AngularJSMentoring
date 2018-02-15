import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { LogoComponent } from './components/header/logo';
import { MenuComponent } from './components/header/menu';
import { UserInfoComponent } from './components/header/userInfo';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { NoContentComponent } from './components/noContent';

import { DurationPipe } from './pipes/duration.pipe';
import { TitlePipe } from './pipes/title.pipe'; 
import { Title } from '@angular/platform-browser/src/browser/title';

import reducers  from './../reducers';


@NgModule({
  imports: [ 
    CommonModule, 
    StoreModule.forRoot(reducers),
  ],
  declarations: [ 
    LogoComponent, 
    MenuComponent, 
    UserInfoComponent, 
    HeaderComponent, 
    FooterComponent, 
    NoContentComponent, 
    DurationPipe, 
    TitlePipe
],
  exports:      [ 
    LogoComponent, 
    MenuComponent, 
    UserInfoComponent, 
    HeaderComponent, 
    FooterComponent, 
    NoContentComponent, 
    DurationPipe, 
    TitlePipe
   ]
})
export class SharedModule { }
