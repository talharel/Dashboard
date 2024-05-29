import { Page } from 'playwright';
import { DashboardPage } from '../pagesObjects/dashboardPage';

export class DashboardWorkflows {
  readonly page: Page;
  readonly dashboardLocators: DashboardPage;

  constructor(page: Page) {
    this.page = page;
    this.dashboardLocators = new DashboardPage(page);
  }
}
