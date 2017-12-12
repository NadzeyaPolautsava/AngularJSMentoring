import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/common/header/logo';
import { MenuComponent } from './components/common/header/menu';
import { UserInfoComponent } from './components/common/header/userInfo';
import { HeaderComponent } from './components/common/header';
import { FooterComponent } from './components/common/footer';

import { AuthService } from './services/auth.service';

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
   ], 

   providers: [
     AuthService
   ]
})
export class SharedModule { }
