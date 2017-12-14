import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/header/logo';
import { MenuComponent } from './components/header/menu';
import { UserInfoComponent } from './components/header/userInfo';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';

import { DurationPipe } from './pipes/duration.pipe';
import { TitlePipe } from './pipes/title.pipe'; 
import { Title } from '@angular/platform-browser/src/browser/title';


@NgModule({
  imports: [ CommonModule ],
  declarations: [ 
    LogoComponent, 
    MenuComponent, 
    UserInfoComponent, 
    HeaderComponent, 
    FooterComponent, 
    DurationPipe, 
    TitlePipe
],
  exports:      [ 
    LogoComponent, 
    MenuComponent, 
    UserInfoComponent, 
    HeaderComponent, 
    FooterComponent, 
    DurationPipe, 
    TitlePipe
   ]
})
export class SharedModule { }
