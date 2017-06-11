import { browser, by, element } from 'protractor';

export class PublicPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ap-root h1')).getText();
  }
}
