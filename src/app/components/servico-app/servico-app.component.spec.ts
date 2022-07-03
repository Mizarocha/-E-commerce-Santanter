import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoAppComponent } from './servico-app.component';

describe('ServicoAppComponent', () => {
  let component: ServicoAppComponent;
  let fixture: ComponentFixture<ServicoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
