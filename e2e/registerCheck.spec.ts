import {test, expect} from '@playwright/test';
import {MiroSignupPage} from '../POM/miroSignupPage';
import {NameConst} from "../POM/nameConst";
import {EmailConst} from "../POM/emailConst";
import {PasswordConst} from "../POM/passwordConst";

test.describe('Register Check', () => {

    test.beforeEach(async ({page, isMobile}) => {
        const miro = new MiroSignupPage(page);
        await miro.goto();
        if (isMobile){
            await page.touchscreen.tap(100, 100);
        }
    });

    test.describe('Positive cases', () => {
         test('type "All values are valid"', async ({page}) => {
             const miro = new MiroSignupPage(page);
             //action
             const email = 't' + miro.getRandomNumber() + EmailConst.simpleValidEmailValue;
             await miro.nameInput.type(NameConst.realNameValueEN);
             await miro.emailInput.type(email);
             await miro.passwordInput.type(PasswordConst.weakPasswordValue);
             await miro.termsCheckbox.click();
             await miro.subscribeCheckbox.click();
             await miro.signupButton.click();

             //result
             await miro.page.waitForEvent('load');
             await expect(miro.header).toBeVisible();
             await expect(miro.header).toContainText(miro.confirmEmailHeaderText);
             await expect(miro.registeredEmailValue).toBeVisible();
             await expect(miro.registeredEmailValue).toContainText(email);
         });

         test('type "All values are valid except sub.checkbox"', async ({page}) => {
             const miro = new MiroSignupPage(page);
             //action
             const email = 't' + miro.getRandomNumber() + EmailConst.simpleValidEmailValue;
             await miro.nameInput.type(NameConst.realNameValueEN);
             await miro.emailInput.type(email);
             await miro.passwordInput.type(PasswordConst.weakPasswordValue);
             await miro.termsCheckbox.click();
             await miro.subscribeCheckbox.click();
             await miro.signupButton.click();

             //result
             await miro.page.waitForEvent('load');
             await expect(miro.header).toBeVisible();
             await expect(miro.header).toContainText(miro.confirmEmailHeaderText);
             await expect(miro.registeredEmailValue).toBeVisible();
             await expect(miro.registeredEmailValue).toContainText(email);
         });
    });

    test.describe('Negative cases', () => {
        test('type "All values are empty"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await expect(miro.nameInput).toBeEmpty();
            await expect(miro.emailInput).toBeEmpty();
            await expect(miro.passwordInput).toBeEmpty();
            await miro.signupButton.click();
            //result
            await expect(miro.nameError).toBeVisible();
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emptyPasswordHint).toBeVisible();

            await expect(miro.nameInput).toHaveClass(NameConst.inputErrorClassName);
            await expect(miro.nameError).toContainText(NameConst.nameErrorText);

            await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
            await expect(miro.emailError).toContainText(EmailConst.emptyEmailErrorText);

            await expect(miro.passwordInput).toHaveClass(PasswordConst.inputErrorClassName);
            await expect(miro.emptyPasswordHint).toContainText(PasswordConst.emptyPasswordErrorText);
        });

        test('type "All values are valid except Name"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            const email = 't' + miro.getRandomNumber() + EmailConst.simpleValidEmailValue;
            await miro.nameInput.type(NameConst.maxLengthPlusNameValue);
            await miro.emailInput.type(email);
            await miro.passwordInput.type(PasswordConst.weakPasswordValue);
            await miro.termsCheckbox.click();
            await miro.subscribeCheckbox.click();
            await miro.signupButton.click();
            //result
            await expect(miro.nameError).toBeVisible();
            await expect(miro.nameInput).toHaveClass(NameConst.inputErrorClassName);
            await expect(miro.nameError).toContainText(NameConst.longNameErrorText);
        });

        test('type "All values are valid except Email"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.realNameValueEN);
            await miro.emailInput.type(EmailConst.woAtEmailValue);
            await miro.passwordInput.type(PasswordConst.weakPasswordValue);
            await miro.termsCheckbox.click();
            await miro.subscribeCheckbox.click();
            await miro.signupButton.click();
            //result
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
            await expect(miro.emailError).toContainText(EmailConst.emailErrorText);
        });

        test('type "All values are valid except Password"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            const email = 't' + miro.getRandomNumber() + EmailConst.simpleValidEmailValue;
            await miro.nameInput.type(NameConst.realNameValueEN);
            await miro.emailInput.type(email);
            await miro.passwordInput.type(PasswordConst.symbols7PasswordValue);
            await miro.termsCheckbox.click();
            await miro.subscribeCheckbox.click();
            await miro.signupButton.click();
            //result
            await expect(miro.passwordInput).toBeVisible();
            await expect(miro.passwordInput).toHaveClass(PasswordConst.inputErrorClassName);
            await expect(miro.passwordHint.first()).toContainText(PasswordConst.passwordErrorText);
        });

        test('type "All values are valid except Terms"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            const email = 't' + miro.getRandomNumber() + EmailConst.simpleValidEmailValue;
            await miro.nameInput.type(NameConst.realNameValueEN);
            await miro.emailInput.type(email);
            await miro.passwordInput.type(PasswordConst.weakPasswordValue);
            await miro.subscribeCheckbox.click();
            await miro.signupButton.click();
            //result
            await expect(miro.termsError).toContainText(miro.agreeWTermsText);
        });
    });
});
