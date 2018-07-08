import { AngularFormsV4Page } from './app.po';

describe('angular-forms-v4 App', () => {
  let page: AngularFormsV4Page;

  beforeEach(() => {
    page = new AngularFormsV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
