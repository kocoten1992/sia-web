import { test, expect } from '@playwright/test'
import { login } from '../fixtures/login'
import { unlockWallet, walletInList } from '../fixtures/wallet'
import { navigateToWallet } from '../fixtures/navigateToWallet'
import { fillComposeTransactionSiacoin } from '../fixtures/sendSiacoinDialog'

test('send siacoin with a seed wallet', async ({ page }) => {
  await login({ page })
  const name = 'test-send-siacoin-seed-wallet'
  const receiveAddress =
    '5739945c21e60afd70eaf97ccd33ea27836e0219212449f39e4b38acaa8b3119aa4150a9ef0f'
  const changeAddress =
    '170173c40ca0f39f9618da30af14c390c7ce70248a3662a7a5d3d5a8a31c9fbfa2071e9f6518'
  const mnemonic =
    'march wait photo expire sweet hurry photo joy sail certain time beef'
  await walletInList(page, name)
  await unlockWallet(page, name, mnemonic)
  await navigateToWallet(page, name)
  await page.getByLabel('send').click()
  await fillComposeTransactionSiacoin({
    page,
    receiveAddress,
    changeAddress,
    amount: '1',
  })
  await expect(page.getByText('The wallet is currently unlocked')).toBeVisible()
  await expect(page.getByText('Total')).toBeVisible()
  await expect(page.getByText('1.004 SC')).toBeVisible()

  await page
    .getByRole('button', { name: 'Sign and broadcast transaction' })
    .click()
  await expect(
    page.getByText('Transaction successfully broadcast')
  ).toBeVisible()
  await expect(page.getByText(receiveAddress.slice(0, 5))).toBeVisible()
  await expect(page.getByText(changeAddress.slice(0, 5))).toBeVisible()
  await expect(page.getByText('Total')).toBeVisible()
  await expect(page.getByText('1.004 SC')).toBeVisible()
})
