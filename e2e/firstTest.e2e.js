describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should load the list screen', async () => {
    await expect(element(by.id('list-screen'))).toBeVisible();
  });
});
