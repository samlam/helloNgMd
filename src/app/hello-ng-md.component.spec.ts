import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HelloNgMdAppComponent } from '../app/hello-ng-md.component';

beforeEachProviders(() => [HelloNgMdAppComponent]);

describe('App: HelloNgMd', () => {
  it('should create the app',
      inject([HelloNgMdAppComponent], (app: HelloNgMdAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'hello-ng-md works!\'',
      inject([HelloNgMdAppComponent], (app: HelloNgMdAppComponent) => {
    expect(app.title).toEqual('hello-ng-md works!');
  }));
});
