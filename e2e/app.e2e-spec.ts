import { AngularGithubAuthPage } from './app.po';

describe('angular-github-auth App', function() {
  let page: AngularGithubAuthPage;

  beforeEach(() => {
    page = new AngularGithubAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
