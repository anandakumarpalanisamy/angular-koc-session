import { AngularComponentIntV4Page } from './app.po';

describe('angular-component-int-v4 App', () => {
  let page: AngularComponentIntV4Page;

  beforeEach(() => {
    page = new AngularComponentIntV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
