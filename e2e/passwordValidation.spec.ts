import {test, expect} from '@playwright/test';
import {MiroSignupPage} from '../POM/miroSignupPage';
import {PasswordConst} from '../POM/passwordConst';

// It is needed to click to SignUp Button for validate classes
test.describe('Password Validation', () => {

    test.beforeEach(async ({page, isMobile}) => {
        const miro = new MiroSignupPage(page);
        await miro.goto();
        if (isMobile){
            await page.touchscreen.tap(100, 100);
        }
    });

    test.describe('Positive Cases', () => {
        test('type "12345678"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.passwordInput.type(PasswordConst.weakPasswordValue);
            await miro.signupButton.click();
            //result
            await expect(miro.passwordHint.first()).toContainText(PasswordConst.weakPasswordText);
            await expect(miro.passwordHint.first()).toHaveCSS('color', PasswordConst.weakAndSosoPasswordColor);
            await expect(miro.passwordInput).toHaveClass(PasswordConst.inputValidClassName);
        });

        test('type "Ab_12!Ab_12!"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.passwordInput.type(PasswordConst.sosoPasswordValue);
            await miro.signupButton.click();
            //result
            await expect(miro.passwordHint.first()).toContainText(PasswordConst.sosoPasswordText);
            await expect(miro.passwordHint.first()).toHaveCSS('color', PasswordConst.weakAndSosoPasswordColor);
            await expect(miro.passwordInput).toHaveClass(PasswordConst.inputValidClassName);
        });

        test('type "AAbb_12!AAbb_12!"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.passwordInput.type(PasswordConst.goodPasswordValue);
            await miro.signupButton.click();
            //result
            await expect(miro.passwordHint.first()).toContainText(PasswordConst.goodPasswordText);
            await expect(miro.passwordHint.first()).toHaveCSS('color', PasswordConst.goodPasswordColor);
            await expect(miro.passwordInput).toHaveClass(PasswordConst.inputValidClassName);
        });

        test('type "AAbb_12!AAbb_12"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.passwordInput.type(PasswordConst.greatPasswordValue);
            await miro.signupButton.click();
            //result
            await expect(miro.passwordHint.first()).toContainText(PasswordConst.greatPasswordText);
            await expect(miro.passwordHint.first()).toHaveCSS('color', PasswordConst.greatPasswordColor);
            await expect(miro.passwordInput).toHaveClass(PasswordConst.inputValidClassName);
        });

        test('type "        "', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.passwordInput.type(PasswordConst.spaces8PasswordValue);
            await miro.signupButton.click();
            //result
            await expect(miro.passwordHint.first()).toContainText(PasswordConst.weakPasswordText);
            await expect(miro.passwordHint.first()).toHaveCSS('color', PasswordConst.weakAndSosoPasswordColor);
            await expect(miro.passwordInput).toHaveClass(PasswordConst.inputValidClassName);
        });

        test('type "~`!@#$%^&*()_+?:"{}[];\'"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.passwordInput.type(PasswordConst.specialSymbolsPasswordValue);
            await miro.signupButton.click();
            //result
            await expect(miro.passwordHint.first()).toContainText(PasswordConst.greatPasswordText);
            await expect(miro.passwordHint.first()).toHaveCSS('color', PasswordConst.greatPasswordColor);
            await expect(miro.passwordInput).toHaveClass(PasswordConst.inputValidClassName);
        });
    })

    test.describe('Negative Cases', () => {
        test('Empty password', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await expect(miro.passwordInput).toBeEmpty();
            await miro.signupButton.click();
            //result
            await expect(miro.emptyPasswordHint).toBeVisible();
            await expect(miro.passwordInput).toHaveClass(PasswordConst.inputErrorClassName);
            await expect(miro.emptyPasswordHint).toContainText(PasswordConst.emptyPasswordErrorText);
        });

        test('type "1234567"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.passwordInput.type(PasswordConst.symbols7PasswordValue);
            await miro.signupButton.click();
            //result
            await expect(miro.passwordHint.first()).toBeVisible();
            await expect(miro.passwordInput).toHaveClass(PasswordConst.inputErrorClassName);
            await expect(miro.passwordHint.first()).toContainText(PasswordConst.passwordErrorText);
        });
    })
});
