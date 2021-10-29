import { test, expect } from '@playwright/test';
import { MiroSignupPage } from '../POM/miroSignupPage';
import {NameConst} from "../POM/nameConst";
import {EmailConst} from "../POM/emailConst";
import {PasswordConst} from "../POM/passwordConst";

test.describe('Check Core', () => {

  test.beforeEach(async ({page, isMobile}) => {
    const miro = new MiroSignupPage(page);
    await miro.goto();
    if (isMobile){
      await page.touchscreen.tap(100, 100);
    }
  });

  test('Open Page and check main elements for visibility', async ({page}) => {
    const miro = new MiroSignupPage(page);
    await expect(miro.cookiesBanner).toBeVisible();
    await expect(miro.miroLogoLink).toBeVisible();
    await expect(miro.signInButton).toBeVisible();
    await expect(miro.header).toBeVisible();
    await expect(miro.nameInput).toBeVisible();
    await expect(miro.emailInput).toBeVisible();
    await expect(miro.passwordInput).toBeVisible();
    await expect(miro.termsCheckbox).toBeVisible();
    await expect(miro.termsLink).toBeVisible();
    await expect(miro.privacyPolicyLink).toBeVisible();
    await expect(miro.subscribeCheckbox).toBeVisible();
    await expect(miro.signupButton).toBeVisible();
    await expect(miro.signupWGoogleButton).toBeVisible();
    await expect(miro.signupWSlackButton).toBeVisible();
    await expect(miro.signupWOffice365Button).toBeVisible();
    await expect(miro.signupWAppleButton).toBeVisible();
    await expect(miro.signupWFBButton).toBeVisible();
    await expect(miro.benefitArea).toBeVisible();
    await expect(miro.cookiesSettingsButton).toBeVisible();
    await expect(miro.acceptCookiesButton).toBeVisible();
    await expect(miro.policyText).toBeVisible();
  });

  test('Open Page and check main elements for content', async ({page}) => {
    const miro = new MiroSignupPage(page);
    await expect(miro.cookiesBanner).toContainText(miro.cookieBannerText);
    await expect(miro.header).toContainText(miro.signupHeaderText);
    await expect(miro.nameInput).toHaveAttribute('placeholder', NameConst.namePlaceholder)
    await expect(miro.emailInput).toHaveAttribute('placeholder', EmailConst.emailPlaceholder)
    await expect(miro.passwordInput).toHaveAttribute('placeholder', PasswordConst.passwordPlaceholder)
    await expect(miro.signupButton).toContainText(miro.signupButtonText);
    await expect(miro.signupWGoogleButton).toContainText(miro.signupWGoogleButtonText);
    await expect(miro.benefitList).toHaveCount(miro.benefitListText.length);
    expect(await miro.benefitList.allInnerTexts()).toEqual(miro.benefitListText);
  });
});
