import { MyFoodAppPage } from './app.po';

describe('my-food-app App', function() {
  let page: MyFoodAppPage;

  beforeEach(() => {
    page = new MyFoodAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
