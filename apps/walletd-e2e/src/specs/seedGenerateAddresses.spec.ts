import { test, expect } from '@playwright/test'
import { login } from '../fixtures/login'
import { deleteWalletIfExists, recoverWallet } from '../fixtures/wallet'
import { navigateToWallet } from '../fixtures/navigateToWallet'
import { fillTextInputByName } from '../fixtures/textInput'

test('generate new addresses', async ({ page, context }) => {
  const name = 'my-existing-wallet'
  const mnemonic =
    'ridge business wish transfer home glove office salt wealth baby journey diary'

  await login({ page })
  await deleteWalletIfExists(page, name)

  await recoverWallet(page, context, name, mnemonic)
  await navigateToWallet(page, name)
  await page.getByLabel('view addresses').click()
  await page.getByRole('button', { name: 'Add addresses' }).click()
  await fillTextInputByName(page, 'count', '5')
  await page.getByRole('button', { name: 'Generate addresses' }).click()
  await expect(
    page.getByText('65b40f6a720352ad5b9546b9f5077209672914cc...')
  ).toBeVisible()
  await expect(
    page.getByText('e94e8113563a549f95ff3904dccf77f1b8fbaad4...')
  ).toBeVisible()
  await expect(
    page.getByText('cc7241334772c6d10d47882b06b21a60242a19c3...')
  ).toBeVisible()
  await expect(
    page.getByText('170173c40ca0f39f9618da30af14c390c7ce7024...')
  ).toBeVisible()
  await expect(
    page.getByText('90c6057cdd2463eca61f83796e83152dbba28b6c...')
  ).toBeVisible()
})

test('generate new addresses and rescan', async ({ page, context }) => {
  const name = 'my-existing-wallet'
  const mnemonic =
    'ridge business wish transfer home glove office salt wealth baby journey diary'

  await login({ page })
  await deleteWalletIfExists(page, name)

  await recoverWallet(page, context, name, mnemonic)
  await navigateToWallet(page, name)
  await page.getByLabel('view addresses').click()
  await page.getByRole('button', { name: 'Add addresses' }).click()
  await fillTextInputByName(page, 'count', '5')
  await page.getByLabel('shouldRescan').click()
  const val = await page.locator('input[name=rescanStartHeight]').inputValue()
  const defaultRescanStartHeight = Number(val.replace(/,/g, ''))
  expect(defaultRescanStartHeight).toBeGreaterThan(60_000)
  await fillTextInputByName(
    page,
    'rescanStartHeight',
    String(defaultRescanStartHeight - 500)
  )
  await page
    .getByRole('button', { name: 'Generate addresses and rescan' })
    .click()
  await expect(page.getByText('Rescanning the blockchain')).toBeVisible()
  await expect(
    page.getByText('65b40f6a720352ad5b9546b9f5077209672914cc...')
  ).toBeVisible()
  await expect(
    page.getByText('e94e8113563a549f95ff3904dccf77f1b8fbaad4...')
  ).toBeVisible()
  await expect(
    page.getByText('cc7241334772c6d10d47882b06b21a60242a19c3...')
  ).toBeVisible()
  await expect(
    page.getByText('170173c40ca0f39f9618da30af14c390c7ce7024...')
  ).toBeVisible()
  await expect(
    page.getByText('90c6057cdd2463eca61f83796e83152dbba28b6c...')
  ).toBeVisible()
  await expect(page.getByText('Scanning...')).toBeVisible()
})
