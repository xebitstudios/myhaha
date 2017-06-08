import { TawWebsiteFrontendPage } from './app.po';

describe('taw-website-frontend App', () => {
  let page: TawWebsiteFrontendPage;

  beforeEach(() => {
    page = new TawWebsiteFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
