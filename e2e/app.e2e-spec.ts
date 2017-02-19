import { CrawfishCupPage } from './app.po';

describe('crawfish-cup App', () => {
  let page: CrawfishCupPage;

  beforeEach(() => {
    page = new CrawfishCupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
