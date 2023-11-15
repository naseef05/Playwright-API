const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.gamesforthebrain.com/game/checkers/');
  });
  
  test.describe('Checker Game', () => {
    test('Confirm that the site is up', async ({ page }) => {
      // create a new todo locator
      await expect(page).toHaveTitle(/Checkers - Games for the Brain/);
    });

})

test.describe('Make Five legal move', () => {
    test('Include taking the blue chip', async ({ page }) => {
      // create a new todo locator
      await expect(page).toHaveTitle(/Checkers - Games for the Brain/);
      await page.locator("xpath=//*[@name='space62']").click();
      await page.locator("xpath=//*[@name='space53']").click();
    });
    test('Use “Make a move” as confirmation that you can take the next step', async ({ page }) => {
        // create a new todo locator
        await expect(page).toHaveTitle(/Checkers - Games for the Brain/);
        await page.locator("xpath=//*[@name='space62']").click();
        await page.locator("xpath=//*[@name='space53']").click();
        await expect(page.locator("//*[@id='message']")).toHaveText('Make a move.');
      });
      test('Include taking a blue piece', async ({ page }) => {
        test.setTimeout(520000);
        // create a new todo locator
        await expect(page).toHaveTitle(/Checkers - Games for the Brain/);
        await page.locator("xpath=//*[@name='space62']").click();
        await page.waitForTimeout(2000);
        await page.locator("xpath=//*[@name='space53']").click();
        await page.waitForTimeout(2000);
        await expect(page.locator("//*[@id='message']")).toHaveText('Make a move.');
        await page.locator("xpath=//*[@name='space53']").click();
        await page.waitForTimeout(2000);
        await page.locator("xpath=//*[@name='space64']").click();
        await page.waitForTimeout(2000);
        await expect(page.locator("//*[@id='message']")).toHaveText('Make a move.');
        await page.locator("xpath=//*[@name='space22']").click();
        await page.waitForTimeout(2000);
        await page.locator("xpath=//*[@name='space13']").click();
        await page.waitForTimeout(2000);
        await expect(page.locator("//*[@id='message']")).toHaveText('Make a move.');
        await page.locator("xpath=//*[@name='space13']").click();
        await page.waitForTimeout(2000);
        await page.locator("xpath=//*[@name='space35']").click();
        await page.waitForTimeout(2000);
      });

})