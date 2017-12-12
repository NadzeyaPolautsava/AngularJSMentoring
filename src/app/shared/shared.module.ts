import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/header/logo';
import { MenuComponent } from './components/header/menu';
import { UserInfoComponent } from './components/header/userInfo';
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';


@NgModule({
  imports: [ CommonModule ],
  declarations: [ 
    LogoComponent, 
    MenuComponent, 
    UserInfoComponent, 
    HeaderComponent, 
    FooterComponent
],
  exports:      [ 
    LogoComponent, 
    MenuComponent, 
    UserInfoComponent, 
    HeaderComponent, 
    FooterComponent
   ]
})
export class SharedModule { }
