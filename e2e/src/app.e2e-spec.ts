import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    expect(browser.params.login.password).toEqual(123456);
    //  expect(process.env.npm_config_params_login_password).toEqual('123456');

    // console.log(process.env);

    page.navigateTo();
    expect(page.getTitleText()).toEqual(
      'cli-protractor-sandbox app is running!'
    );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
