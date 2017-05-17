import { GamesPage } from './app.po';

describe('games App', () => {
  let page: GamesPage;

  beforeEach(() => {
    page = new GamesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
