export class HelloNgMdPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hello-ng-md-app h1')).getText();
  }
}
