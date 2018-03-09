import { Exer1Page } from './app.po';

describe('exer1 App', () => {
  let page: Exer1Page;

  beforeEach(() => {
    page = new Exer1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
