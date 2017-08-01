import { Aula1Page } from './app.po';

describe('aula1 App', () => {
  let page: Aula1Page;

  beforeEach(() => {
    page = new Aula1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
