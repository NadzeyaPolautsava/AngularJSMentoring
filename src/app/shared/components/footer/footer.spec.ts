import { FooterComponent } from './footer';
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { CommonModule } from '@angular/common';




describe('BannerComponent (inline template)', () => {

    let comp:    FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;
beforeEach(() => {

    TestBed.configureTestingModule({
        imports: [ 
            CommonModule,           
        ],
        declarations: [ 
            FooterComponent
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    comp = fixture.componentInstance;
    el = fixture.nativeElement;
});

it('should contain Nadezhda', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('Nadezhda');
  });
});