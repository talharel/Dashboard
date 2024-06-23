import { test } from '@playwright/test';
import { DashboardPage } from '../pagesObjects/dashboardPage';
import { DashboardWorkflows } from '../workflows/dashboardWorkflows';
import { Actions } from '../uiActions/actions';

test.describe('Elements validation', () => {
  let dashboardPage;
  let dashboardWorkflows;
  let actions;
  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    dashboardWorkflows = new DashboardWorkflows(page);
    actions = new Actions();
    await page.goto('/');
  });

  test('Check Dashboard title and visibilities', async ({ page }) => {
    await actions.checkVisibliyAndValue(
      dashboardPage.dashboardTitle,
      'DASHBOARD'
    );

    await actions.checkVisibliyAndCount(dashboardPage.ministatisticCards, 4);
  });
});
