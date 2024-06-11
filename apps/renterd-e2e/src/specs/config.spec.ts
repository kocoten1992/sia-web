import { test, expect } from '@playwright/test'
import { login } from '../fixtures/login'
import { expectSwitchByLabel, setSwitchByLabel } from '../fixtures/switchValue'
import { setViewMode } from '../fixtures/configViewMode'
import { navigateToConfig } from '../fixtures/navigate'
import { mockApiSiaCentralExchangeRates } from '@siafoundation/sia-central-mock'
import {
  expectTextInputByName,
  expectTextInputByNameAttribute,
  fillTextInputByName,
} from '../fixtures/textInput'
import { configResetAllSettings } from '../fixtures/configResetAllSettings'
import { clearToasts } from '../fixtures/clearToasts'
import { clickIfEnabledAndWait, clickIf } from '../fixtures/click'

test('basic field change and save behaviour', async ({ page }) => {
  // Set up.
  await mockApiSiaCentralExchangeRates({ page })
  await login({ page })

  // Reset state.
  await navigateToConfig({ page })
  await configResetAllSettings({ page })
  await setViewMode({ page, state: 'basic' })
  await setSwitchByLabel(page, 'autoAllowance', true)

  // Test that values can be updated.
  await fillTextInputByName(page, 'storageTB', '7')
  await fillTextInputByName(page, 'uploadTBMonth', '7')
  await fillTextInputByName(page, 'downloadTBMonth', '7')
  await fillTextInputByName(page, 'maxStoragePriceTBMonth', '7000')
  await fillTextInputByName(page, 'maxUploadPriceTB', '7000')
  await fillTextInputByName(page, 'maxDownloadPriceTB', '7000')

  // Correct number of changes is shown.
  await expect(page.getByText('7 changes')).toBeVisible()
  await page.getByText('Save changes').click()
  await expect(page.getByText('7 changes')).toBeHidden()

  // Values are the same after save.
  await expectTextInputByName(page, 'storageTB', '7')
  await expectTextInputByName(page, 'uploadTBMonth', '7')
  await expectTextInputByName(page, 'downloadTBMonth', '7')
  await expectTextInputByName(page, 'maxStoragePriceTBMonth', '7,000')
  await expectTextInputByName(page, 'maxUploadPriceTB', '7,000')
  await expectTextInputByName(page, 'maxDownloadPriceTB', '7,000')
  await expectTextInputByName(page, 'allowanceMonth', '343,000')
})

test('estimate based off storage, pricing, and redundancy', async ({
  page,
}) => {
  // Set up.
  await mockApiSiaCentralExchangeRates({ page })
  await login({ page })

  // Reset state.
  await navigateToConfig({ page })
  await setSwitchByLabel(page, 'autoAllowance', true)
  await setViewMode({ page, state: 'advanced' })

  await fillTextInputByName(page, 'storageTB', '10')
  await fillTextInputByName(page, 'uploadTBMonth', '10')
  await fillTextInputByName(page, 'downloadTBMonth', '4')
  await fillTextInputByName(page, 'maxStoragePriceTBMonth', '1500')
  await fillTextInputByName(page, 'maxUploadPriceTB', '1000')
  await fillTextInputByName(page, 'maxDownloadPriceTB', '5000')
  await fillTextInputByName(page, 'minShards', '2')
  await fillTextInputByName(page, 'totalShards', '8')

  const estimateParts = [
    'Estimate',
    '12,000 SC',
    '($126.86)',
    'per TB/month with 4.0x redundancy',
    '120,000 SC',
    '($1268.56)',
    'to store 10.00 TB/month with 4.0x redundancy',
  ]

  for (const part of estimateParts) {
    await expect(page.getByText(part)).toBeVisible()
  }
})

test('configure with auto allowance', async ({ page }) => {
  // Set up.
  await mockApiSiaCentralExchangeRates({ page })
  await login({ page })

  // Reset state.
  await navigateToConfig({ page })
  await setSwitchByLabel(page, 'autoAllowance', true)
  await setViewMode({ page, state: 'basic' })

  // Set all values that affect the allowance calculation.
  await fillTextInputByName(page, 'storageTB', '10')
  await fillTextInputByName(page, 'uploadTBMonth', '10')
  await fillTextInputByName(page, 'downloadTBMonth', '4')
  await fillTextInputByName(page, 'maxStoragePriceTBMonth', '1500')
  await fillTextInputByName(page, 'maxUploadPriceTB', '1000')
  await fillTextInputByName(page, 'maxDownloadPriceTB', '5000')
  await expectSwitchByLabel(page, 'autoAllowance', true)
  // Allowance auto updated.
  await expectTextInputByName(page, 'allowanceMonth', '95,000')
  // Allowance cannot be manually updated.
  await expectTextInputByNameAttribute(page, 'allowanceMonth', 'readOnly')
})

test('configure allowance manually', async ({ page }) => {
  // Set up.
  await mockApiSiaCentralExchangeRates({ page })
  await login({ page })

  // Reset state.
  await navigateToConfig({ page })
  await configResetAllSettings({ page })
  await setSwitchByLabel(page, 'autoAllowance', false)
  await setViewMode({ page, state: 'basic' })
  await fillTextInputByName(page, 'allowanceMonth', '777')

  // Set all values that affect the allowance calculation.
  await fillTextInputByName(page, 'storageTB', '10')
  await fillTextInputByName(page, 'uploadTBMonth', '10')
  await fillTextInputByName(page, 'downloadTBMonth', '4')
  await fillTextInputByName(page, 'maxStoragePriceTBMonth', '1500')
  await fillTextInputByName(page, 'maxUploadPriceTB', '1000')
  await fillTextInputByName(page, 'maxDownloadPriceTB', '5000')
  await expectSwitchByLabel(page, 'autoAllowance', false)
  // Allowance did not auto update.
  await expectTextInputByName(page, 'allowanceMonth', '777')
  // Allowance can be manually updated.
  await fillTextInputByName(page, 'allowanceMonth', '4000')
  await expectTextInputByName(page, 'allowanceMonth', '4,000')
})

test('system offers recommendations', async ({ page }) => {
  // Set up.
  await mockApiSiaCentralExchangeRates({ page })
  await login({ page })

  // Reset state.
  await navigateToConfig({ page })
  await configResetAllSettings({ page })
  await setViewMode({ page, state: 'basic' })
  await setSwitchByLabel(page, 'autoAllowance', true)

  // Reset to very high values that will not need any recommendations.
  await fillTextInputByName(page, 'storageTB', '1')
  await fillTextInputByName(page, 'uploadTBMonth', '1')
  await fillTextInputByName(page, 'downloadTBMonth', '1')
  await fillTextInputByName(page, 'maxStoragePriceTBMonth', '100000000')
  await fillTextInputByName(page, 'maxUploadPriceTB', '100000000')
  await fillTextInputByName(page, 'maxDownloadPriceTB', '100000000')
  await clickIfEnabledAndWait(
    page.getByText('Save changes'),
    page.getByText('Configuration has been saved')
  )
  await clearToasts({ page })

  await expect(
    page.getByText(
      /(0 recommendations to match with more hosts|Configuration matches with a sufficient number of hosts)/
    )
  ).toBeVisible()

  await fillTextInputByName(page, 'storageTB', '10')
  await fillTextInputByName(page, 'uploadTBMonth', '10')
  await fillTextInputByName(page, 'downloadTBMonth', '4')
  await fillTextInputByName(page, 'maxStoragePriceTBMonth', '100')
  await fillTextInputByName(page, 'maxUploadPriceTB', '100')
  await fillTextInputByName(page, 'maxDownloadPriceTB', '100')
  await clickIfEnabledAndWait(
    page.getByText('Save changes'),
    page.getByText('Configuration has been saved')
  )
  await clearToasts({ page })
  // There are now recommendations.
  await expect(
    page.getByText('0 recommendations to match with more hosts')
  ).toBeHidden()

  // Apply all recommendations.
  const count = await page
    .getByTestId('recommendationsList')
    .locator('*')
    .evaluateAll((elements) => elements.length)
  expect(count).toBeGreaterThan(0)

  const storagePriceBtn = page
    .getByTestId('recommendationsList')
    .getByTestId('maxStoragePriceTBMonth')
    .locator('button')
  const uploadPriceBtn = page
    .getByTestId('recommendationsList')
    .getByTestId('maxUploadPriceTB')
    .locator('button')
  const downloadPriceBtn = page
    .getByTestId('recommendationsList')
    .getByTestId('maxDownloadPriceTB')
    .locator('button')

  await clickIf(storagePriceBtn, 'isVisible')
  await expect(storagePriceBtn).toBeHidden()
  await clickIf(uploadPriceBtn, 'isVisible')
  await expect(uploadPriceBtn).toBeHidden()
  await clickIf(downloadPriceBtn, 'isVisible')
  await expect(downloadPriceBtn).toBeHidden()

  // Check that all recommendations were applied and there are changes to the config.
  // TODO: disabled because sometimes the "increase value" recommendation is
  // replaced with a "decrease value" recommendation with the same value.
  // await expect(page.getByTestId('recommendationsList')).toBeHidden()

  await expect(page.getByText(`Save changes`)).toBeEnabled()
})
