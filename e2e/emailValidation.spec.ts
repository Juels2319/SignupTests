import {test, expect} from '@playwright/test';
import {MiroSignupPage} from '../POM/miroSignupPage';
import {EmailConst} from '../POM/emailConst';
import {NameConst} from '../POM/nameConst';
import {PasswordConst} from '../POM/passwordConst';

// It is needed to click to SignUp Button for validate input
test.describe('Email Validation', () => {

    test.beforeEach(async ({page, isMobile}) => {
        const miro = new MiroSignupPage(page);
        await miro.goto();
        if (isMobile){
            await page.touchscreen.tap(100, 100);
        }
    });

    test.describe('Positive Cases', () => {
        test('type "email@miro.com"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.simpleValidEmailValue);

            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputValidClassName);
            await expect(miro.emailError).not.toBeVisible();
        });

        test('type "email@домен.рф"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.simpleRUEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputValidClassName);
            await expect(miro.emailError).not.toBeVisible();
        });

        test('type "123@miro.ru"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.numberEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputValidClassName);
            await expect(miro.emailError).not.toBeVisible();
        });

        test('type "e-mail@miro.ru"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.minusNameEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputValidClassName);
            await expect(miro.emailError).not.toBeVisible();
        });

        test('type "email@mi-ro.ru"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.minusDomainEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputValidClassName);
            await expect(miro.emailError).not.toBeVisible();
        });

        test('type "e.mail@miro.ru"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.dotNameEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputValidClassName);
            await expect(miro.emailError).not.toBeVisible();
        });

        test('type "email@mi.ro.ru"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.dotDomainEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputValidClassName);
            await expect(miro.emailError).not.toBeVisible();
        });

        test('type "e_mail@miro.ru"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.specSymbolNameEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputValidClassName);
            await expect(miro.emailError).not.toBeVisible();
        });

        test('type "email@mirocom"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.wo2DomainEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputValidClassName);
            await expect(miro.emailError).not.toBeVisible();
        });

        test('type "e_m-a.il123@mi.ro.ru"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.mixedEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputValidClassName);
            await expect(miro.emailError).not.toBeVisible();
        });
    })

    test.describe('Negative Cases', () => {
        test('Empty email', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await expect(miro.emailInput).toBeEmpty();
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(EmailConst.emptyEmailErrorText);
        });

        test('type "email@mi_ro.ru"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.specSymbolDomainEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(EmailConst.emailErrorText);
        });

        test('type email@miro..com', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.w2DotDomainEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(EmailConst.emailErrorText);
        });

        test('type email@-miro.ru', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.minus1stDomainEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(EmailConst.emailErrorText);
        });

        test('type emailmiro.ru', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.woAtEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(EmailConst.emailErrorText);
        });

        test('type e mail@mi_ro.ru', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.spaceNameEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(EmailConst.emailErrorText);
        });

        test('type email@mi ro.ru', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.spaceDomainEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(EmailConst.emailErrorText);
        });

        test('type @miro.ru', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.woNameEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(EmailConst.emailErrorText);
        });

        test('type email@', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(EmailConst.woDomainEmailValue);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(EmailConst.emailErrorText);
        });

        test.describe('Server validation after passed client validation', () => {
            test('type email@miro.r', async ({page}) => {
                const miro = new MiroSignupPage(page);
                //action
                await miro.emailInput.type(EmailConst.littleDomainEmailValue);
                await miro.nameInput.type(NameConst.realNameValueEN);
                await miro.passwordInput.type(PasswordConst.weakPasswordValue);
                await miro.termsCheckbox.click();
                await miro.signupButton.click();
                //result
                await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
                await expect(miro.emailError).toBeVisible();
                await expect(miro.emailError).toContainText(EmailConst.emailValidateErrorText);
            });

            test('type 1234567890123456789012345678901234567890123456789012345678901234+x@example.com', async ({page}) => {
                const miro = new MiroSignupPage(page);
                //action
                await miro.emailInput.type(EmailConst.symbols64EmailValue);
                await miro.nameInput.type(NameConst.realNameValueEN);
                await miro.passwordInput.type(PasswordConst.weakPasswordValue);
                await miro.termsCheckbox.click();
                await miro.signupButton.click();
                //result
                await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
                await expect(miro.emailError).toBeVisible();
                await expect(miro.emailError).toContainText(EmailConst.emailValidateErrorText);
            });

            test('type testemail@mail.ru', async ({page}) => {
                const miro = new MiroSignupPage(page);
                //action
                await miro.nameInput.type(NameConst.realNameValueEN);
                await miro.emailInput.type(EmailConst.alreadyUsedEmailValue);
                await miro.passwordInput.type(PasswordConst.weakPasswordValue);
                await miro.termsCheckbox.click();
                await miro.signupButton.click();
                //result
                await miro.page.waitForEvent('load');
                await expect(miro.emailInput).toHaveClass(EmailConst.inputErrorClassName);
                await expect(miro.emailError).toBeVisible();
                await expect(miro.emailError).toContainText(EmailConst.emailUsedErrorText);
            });
        });
    })
});
