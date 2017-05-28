import { CraveNewsPage } from './app.po';

describe('crave-news App', () => {
  let page: CraveNewsPage;

  beforeEach(() => {
    page = new CraveNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
