import { test, expect } from '@playwright/test'
import { login } from '../fixtures/login'
import {
  expectSwitchByLabel,
  expectSwitchVisible,
  setSwitchByLabel,
} from '../fixtures/switchValue'
import { setViewMode } from '../fixtures/configViewMode'
import { navigateToConfig } from '../fixtures/navigate'
import { mockApiSiaCentralExchangeRates } from '@siafoundation/sia-central-mock'
import { configResetAllSettings } from '../fixtures/configResetAllSettings'
import {
  expectTextInputByName,
  expectTextInputNotVisible,
  fillTextInputByName,
} from '../fixtures/textInput'
import { fillSelectInputByName } from '../fixtures/selectInput'

test('basic field change and save behaviour', async ({ page }) => {
  // Set up.
  await mockApiSiaCentralExchangeRates({ page })
  await login({ page })

  // Reset state.
  await navigateToConfig({ page })
  await configResetAllSettings({ page })
  await setViewMode({ page, state: 'advanced' })

  // Test that values can be updated.
  await setSwitchByLabel(page, 'acceptingContracts', true)
  await fillTextInputByName(page, 'netAddress', 'foobar.com:7777')
  await fillTextInputByName(page, 'maxContractDuration', '7')
  await fillSelectInputByName(page, 'pinnedCurrency', 'AUD')
  await fillTextInputByName(page, 'pinnedThreshold', '7')
  await setSwitchByLabel(page, 'shouldPinStoragePrice', true)
  await fillTextInputByName(page, 'storagePricePinned', '77')
  await fillTextInputByName(page, 'egressPrice', '77')
  await fillTextInputByName(page, 'baseRPCPrice', '77')

  // Correct number of changes is shown.
  await expect(page.getByText('9 changes')).toBeVisible()
  await page.getByText('Save changes').click()
  await expect(page.getByText('9 changes')).toBeHidden()

  // Values are the same after save.
  await expectSwitchByLabel(page, 'acceptingContracts', true)
  // Address change detected.
  // await expect(
  //   page.getByText('Address has changed, make sure to re-announce the host.')
  // ).toBeVisible()
  await expectTextInputByName(page, 'netAddress', 'foobar.com:7777')
  await expectTextInputByName(page, 'maxContractDuration', '7')
  await fillSelectInputByName(page, 'pinnedCurrency', 'USD')
  await expectTextInputByName(page, 'pinnedThreshold', '7')
  // Pinned vs not pinned fields correctly shown or hidden.
  await expectSwitchByLabel(page, 'shouldPinStoragePrice', true)
  await expectTextInputByName(page, 'storagePricePinned', '$77')
  await expectTextInputNotVisible(page, 'storagePrice')
  await expectSwitchByLabel(page, 'shouldPinEgressPrice', false)
  await expectTextInputByName(page, 'egressPrice', '77')
  await expectTextInputNotVisible(page, 'egressPricePinned')
  await expectTextInputByName(page, 'baseRPCPrice', '77')
})

test('pin switches should show in both view modes', async ({ page }) => {
  // Set up.
  await mockApiSiaCentralExchangeRates({ page })
  await login({ page })

  await navigateToConfig({ page })
  await setViewMode({ page, state: 'basic' })
  await expectSwitchVisible(page, 'shouldPinStoragePrice')
  await expectSwitchVisible(page, 'shouldPinEgressPrice')
  await expectSwitchVisible(page, 'shouldPinIngressPrice')
  await expectSwitchVisible(page, 'shouldPinMaxCollateral')

  await navigateToConfig({ page })
  await setViewMode({ page, state: 'advanced' })
  await expectSwitchVisible(page, 'shouldPinStoragePrice')
  await expectSwitchVisible(page, 'shouldPinEgressPrice')
  await expectSwitchVisible(page, 'shouldPinIngressPrice')
  await expectSwitchVisible(page, 'shouldPinMaxCollateral')
})

test('dynamic max collateral suggestion', async ({ page }) => {
  // Set up.
  await mockApiSiaCentralExchangeRates({ page })
  await login({ page })

  // Reset state.
  await navigateToConfig({ page })
  await configResetAllSettings({ page })
  await setViewMode({ page, state: 'basic' })
  await fillTextInputByName(page, 'maxCollateral', '777')
  await expect(
    page
      .getByTestId('maxCollateralGroup')
      .getByLabel('Suggestion')
      .getByText('60 SC')
  ).toBeVisible()

  // Set all values that affect the max collateral calculation.
  await fillTextInputByName(page, 'storagePrice', '10')
  await fillTextInputByName(page, 'collateralMultiplier', '10')
  await expect(
    page
      .getByTestId('maxCollateralGroup')
      .getByLabel('Suggestion')
      .getByText('300 SC')
  ).toBeVisible()
})