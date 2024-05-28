import { Page } from 'playwright';
import { Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardTitle: Locator;
  readonly dashboardDate: Locator;

  constructor(page: Page) {
    this.page = page;
  }
}
