import { RoutingExamples2V4Page } from './app.po';

describe('routing-examples2-v4 App', () => {
  let page: RoutingExamples2V4Page;

  beforeEach(() => {
    page = new RoutingExamples2V4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
