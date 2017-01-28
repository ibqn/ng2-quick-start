import { browser, element, by } from 'protractor';


describe('QuickStart E2E Tests', () => {

  const expectedMsg = 'My First Angular App';
  const buttonText = 'Toggle Heading';

  beforeEach(() => {
    browser.get('');
  });

  it(`Should display: ${expectedMsg}`, () => {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

  it('Should verify that toggle button is present', () => {
    const button = element(by.buttonText(buttonText));

    expect(button.getTagName()).toBe('button');

    button.click().then(() => {
      expect(element(by.css('h1')).isPresent()).toBe(false);
    });
  });

});
