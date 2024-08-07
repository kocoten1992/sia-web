import { Page, expect } from '@playwright/test'

export async function navigateToBuckets({ page }: { page: Page }) {
  await page.getByTestId('sidenav').getByLabel('Files').click()
  await expect(page.getByTestId('navbar').getByText('Buckets')).toBeVisible()
}

export async function navigateToConfig({ page }: { page: Page }) {
  await page.getByTestId('sidenav').getByLabel('Configuration').click()
  await expect(
    page.getByTestId('navbar').getByText('Configuration')
  ).toBeVisible()
}
