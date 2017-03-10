import { AngularAppAuthJwtPage } from './app.po';

describe('angular-app-auth-jwt App', function() {
  let page: AngularAppAuthJwtPage;

  beforeEach(() => {
    page = new AngularAppAuthJwtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
