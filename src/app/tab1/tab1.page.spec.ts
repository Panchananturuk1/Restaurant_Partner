import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [
        IonicModule.forRoot(),
         ExploreContainerComponentModule,
         AppRoutingModule,
         Tab1PageRoutingModule
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    router = TestBed.get('Router')
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should go to the explore more page', () => {
    spyOn(router, 'navigate');

    component.explore();
    expect(router.navigate).toHaveBeenCalledWith(['explore-more'])
  });
});
