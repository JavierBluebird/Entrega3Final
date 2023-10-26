import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalpagPage } from './modalpag.page';

describe('ModalpagPage', () => {
  let component: ModalpagPage;
  let fixture: ComponentFixture<ModalpagPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalpagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
