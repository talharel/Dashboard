import { expect } from '@playwright/test';
import { Locator } from 'playwright';

export class Actions {
  async checkVisibliyAndValue(
    element: Locator,
    expectedValue: string
  ): Promise<void> {
    await expect(element, 'Visiblity Error').toBeVisible();
    await expect(element, 'Value Error').toHaveText(expectedValue);
  }

  async checkVisibliyAndCount(
    element: Locator,
    expectedValue: number
  ): Promise<void> {
    const countElementsInClass = await element.count();
    await expect(countElementsInClass).toBe(expectedValue);
  }
}
