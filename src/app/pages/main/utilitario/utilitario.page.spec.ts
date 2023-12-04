import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitarioPage } from './utilitario.page';

describe('UtilitarioPage', () => {
  let component: UtilitarioPage;
  let fixture: ComponentFixture<UtilitarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilitarioPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UtilitarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
