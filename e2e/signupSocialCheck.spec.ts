import {test, expect} from '@playwright/test';
import {MiroSignupPage} from '../POM/miroSignupPage';

test.describe('Social SignUp Check', () => {

    test.beforeEach(async ({page, isMobile}) => {
        const miro = new MiroSignupPage(page);
        await miro.goto();
        if (isMobile){
            await page.touchscreen.tap(100, 100);
        }
    });

    test.describe('Check checkboxes', () => {
         test('Checkbox text (Failed case)', async ({page}) => {
             const miro = new MiroSignupPage(page);
             //action
             await expect(miro.termsLine).toContainText(miro.termsMiroText);
             await expect(miro.subsLine).toContainText(miro.subsMiroText);
             await expect(miro.signupWGoogleButton).toContainText(miro.signupWGoogleButtonText);
             await miro.signupWGoogleButton.click();
             //result
             await expect(miro.socialTermsLine).toBeVisible();
             await expect(miro.socialTermsLine).toContainText(miro.termsMiroText);
             await expect(miro.socialSubsLine).toBeVisible();
             await expect(miro.socialSubsLine).toContainText(miro.subsMiroText);
         });

         test('Agree to continue', async ({page}) => {
             const miro = new MiroSignupPage(page);
             //action
             await expect(miro.signupWGoogleButton).toContainText(miro.signupWGoogleButtonText);
             await miro.signupWGoogleButton.click();
             //result
             await expect(miro.socialSubsLine).toBeVisible();
             await expect(miro.socialTermsLine).toBeVisible();
             await expect(miro.continueSignupSocialButton).toBeVisible();
             await expect(miro.continueSignupSocialButton).toContainText(miro.continueSignupSocialButtonText);
             //try to continue without terms and subs
             await miro.continueSignupSocialButton.click();
             await expect(miro.socialTerms).toHaveClass(miro.socialTermsErrorClass);
             await expect(miro.socialTermsError).toContainText(miro.agreeWSocialTermsText);
             //try to continue without terms
             await miro.subsSocialCheck.click();
             await miro.continueSignupSocialButton.click();
             await expect(miro.socialTerms).toHaveClass(miro.socialTermsErrorClass);
             await expect(miro.socialTermsError).toContainText(miro.agreeWSocialTermsText);
             //try to continue with terms and subs
             await miro.termsSocialCheck.click();
             await miro.continueSignupSocialButton.click();

             await miro.page.waitForEvent('load');
             expect(page.url().includes(miro.google)).toBeTruthy();
         });
    });

    test.describe('Social', () => {
        test('Google', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await expect(miro.signupWGoogleButton).toContainText(miro.signupWGoogleButtonText);
            await miro.signupWGoogleButton.click();
            await expect(miro.socialSubsLine).toBeVisible();
            await expect(miro.socialTermsLine).toBeVisible();
            await expect(miro.continueSignupSocialButton).toBeVisible();
            await expect(miro.continueSignupSocialButton).toContainText(miro.continueSignupSocialButtonText);
            //try to continue with terms only
            await miro.termsSocialCheck.click();
            await miro.continueSignupSocialButton.click();
            //result
            await miro.page.waitForEvent('load');
            expect(page.url().includes(miro.google)).toBeTruthy();
        });

        test('Slack', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.signupWSlackButton.click();
            await expect(miro.socialSubsLine).toBeVisible();
            await expect(miro.socialTermsLine).toBeVisible();
            await expect(miro.continueSignupSocialButton).toBeVisible();
            await expect(miro.continueSignupSocialButton).toContainText(miro.continueSignupSocialButtonText);
            await miro.termsSocialCheck.click();
            await miro.continueSignupSocialButton.click();
            //result
            await miro.page.waitForEvent('load');
            expect(page.url().includes(miro.slack)).toBeTruthy();
        });

        test('Office365', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.signupWOffice365Button.click();
            await expect(miro.socialSubsLine).toBeVisible();
            await expect(miro.socialTermsLine).toBeVisible();
            await expect(miro.continueSignupSocialButton).toBeVisible();
            await expect(miro.continueSignupSocialButton).toContainText(miro.continueSignupSocialButtonText);
            await miro.termsSocialCheck.click();
            await miro.continueSignupSocialButton.click();
            //result
            await miro.page.waitForEvent('load');
            expect(page.url().includes(miro.office365)).toBeTruthy();
        });

        test('Apple', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.signupWAppleButton.click();
            await expect(miro.socialSubsLine).toBeVisible();
            await expect(miro.socialTermsLine).toBeVisible();
            await expect(miro.continueSignupSocialButton).toBeVisible();
            await expect(miro.continueSignupSocialButton).toContainText(miro.continueSignupSocialButtonText);
            await miro.termsSocialCheck.click();
            await miro.continueSignupSocialButton.click();
            //result
            await miro.page.waitForEvent('load');
            expect(page.url().includes(miro.apple)).toBeTruthy();
        });

        test('Facebook', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.signupWFBButton.click();
            await expect(miro.socialSubsLine).toBeVisible();
            await expect(miro.socialTermsLine).toBeVisible();
            await expect(miro.continueSignupSocialButton).toBeVisible();
            await expect(miro.continueSignupSocialButton).toContainText(miro.continueSignupSocialButtonText);
            await miro.termsSocialCheck.click();
            await miro.continueSignupSocialButton.click();
            //result
            await miro.page.waitForEvent('load');
            expect(page.url().includes(miro.facebook)).toBeTruthy();
        });
    });
})
