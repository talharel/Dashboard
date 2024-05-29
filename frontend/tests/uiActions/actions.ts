import { expect } from '@playwright/test';
import { Locator } from 'playwright';

export class Actions {
  async checkVisibliyAndValue(
    element: Locator,
    expectedValue: string
  ): Promise<void> {
    await expect(element,"Visiblity Error").toBeVisible();
    await expect(element,"Value Error").toHaveText(expectedValue);
  }
}
