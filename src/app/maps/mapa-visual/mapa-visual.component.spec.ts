import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaVisualComponent } from './mapa-visual.component';

describe('MapaVisualComponent', () => {
  let component: MapaVisualComponent;
  let fixture: ComponentFixture<MapaVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
