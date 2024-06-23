import { Page } from 'playwright';
import { Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardTitle: Locator;
  readonly userInfoTitle: Locator;
  readonly dashboardDate: Locator;
  readonly ministatisticCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardTitle = page.locator('.dashboard-header-title');
    this.userInfoTitle = page.locator('.user-info-title');
    this.ministatisticCards = page.locator('.ministatistic');
  }
}
