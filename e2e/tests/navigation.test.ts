import { expect, test } from '@nuxt/test-utils/playwright';

test.describe('Page Navigation', () => {
  test('should navigate to the Start page on click', async ({ page }) => {
    await page.goto('/');
    await page.click('text="Start page"');
    await page.screenshot({ path: './e2e/screenshots/navigation-start-page.png' });
  });
  test('should navigate to the Other page on click', async ({ page }) => {
    await page.goto('/');
    await page.click('text="Other page"');
    await expect(page).toHaveURL('/other');
    await page.screenshot({ path: './e2e/screenshots/navigation-other-page.png' });
  });
});
