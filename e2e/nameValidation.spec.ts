import {test, expect} from '@playwright/test';
import {MiroSignupPage} from '../POM/miroSignupPage';
import {NameConst} from '../POM/nameConst';
import {PasswordConst} from "../POM/passwordConst";
import {EmailConst} from "../POM/emailConst";

// It is needed to click to SignUp Button for validate input
test.describe('Name Validation', () => {

    test.beforeEach(async ({page, isMobile}) => {
        const miro = new MiroSignupPage(page);
        await miro.goto();
        if (isMobile){
            await page.touchscreen.tap(100, 100);
        }
    });

    test.describe('Positive Cases', () => {
        test('type "Name"', async ({page}) => {
            const miro = new MiroSignupPage(page);

            //action
            await miro.nameInput.type(NameConst.placeholderNameValue);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type "Ivan"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.realNameValueEN);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type "Иван"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.realNameValueRU);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type "Ivan Ivanov"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.real2WordsNameValueEN);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type "I.Ivanov"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.realWDotNameValueEN);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type "Åsbjørg Sjöholm"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.realNordNameValue);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type "IVAN"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.realNameValueUppercase);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type "ivan"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.realNameValueLowercase);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type "123"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.numberNameValue);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type "~`!@#$%^&*()_+?:"{}[];\'"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.specSymbolsNameValue);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        //max length less than 255
        test('type "PTmEJMZbfUcIGDvoCSLZkD..."', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.symbols255NameValue);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type " Ivan "', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.betweenSpacesNameValue);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type "▲♦♥"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.geometricSymbolsNameValue);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type "Iv@n1 ИвÅн0♦!$"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.mixedNameValue);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('type "d.rozhkov"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.type(NameConst.alreadyUsedNameValue);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });

        test('fill "Ivan"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.nameInput.fill(NameConst.fillNameValue);
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputValidClassName);
            await expect(miro.nameError).not.toBeVisible();
        });
    })

    test.describe('Negative Cases', () => {
        test('Empty Name', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await expect(miro.nameInput).toBeEmpty();
            await miro.signupButton.click();
            //result
            await expect(miro.nameInput).toHaveClass(NameConst.inputErrorClassName);
            await expect(miro.nameError).toBeVisible();
            await expect(miro.nameError).toBeVisible();
            await expect(miro.nameError).toContainText(NameConst.nameErrorText);
        });

        test.describe('Server validation after passed client validation', () => {
            test('type " "', async ({page}) => {
                const miro = new MiroSignupPage(page);
                //action
                await miro.nameInput.type(NameConst.onlySpaceNameValue);
                await miro.emailInput.type(EmailConst.simpleValidEmailValue);
                await miro.passwordInput.type(PasswordConst.weakPasswordValue);
                await miro.termsCheckbox.click();
                await miro.signupButton.click();
                //result
                await expect(miro.nameInput).toHaveClass(NameConst.inputErrorClassName);
                await expect(miro.nameError).toBeVisible();
                await expect(miro.nameError).toContainText(NameConst.nameErrorText);
            });

            test('type long name with special symbol (server validation)', async ({page}) => {
                const miro = new MiroSignupPage(page);
                //action
                await miro.nameInput.type(NameConst.maxLengthPlusNameValue);
                await miro.emailInput.type(EmailConst.simpleValidEmailValue);
                await miro.passwordInput.type(PasswordConst.weakPasswordValue);
                await miro.termsCheckbox.click();
                await miro.signupButton.click();
                //result
                await expect(miro.nameInput).toHaveClass(NameConst.inputErrorClassName);
                await expect(miro.nameError).toBeVisible();
                await expect(miro.nameError).toContainText(NameConst.longNameErrorText);
            });
        });
    });
});
