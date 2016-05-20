import { HelloNgMdPage } from './app.po';

describe('hello-ng-md App', function() {
  let page: HelloNgMdPage;

  beforeEach(() => {
    page = new HelloNgMdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hello-ng-md works!');
  });
});
