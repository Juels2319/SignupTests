import {test, expect} from '@playwright/test';
import {MiroSignupPage} from '../POM/miroSignupPage';
import {SecurityConst} from '../POM/securityConst';

// It is needed to click to SignUp Button for validate classes
test.describe('Security Check', () => {

    test.beforeEach(async ({page, isMobile}) => {
        const miro = new MiroSignupPage(page);
        await miro.goto();
        if (isMobile){
            await page.touchscreen.tap(100, 100);
        }
    });

    test.describe('XSS', () => {
        test('type "testmail@miro.com<script>alert(1)</script>"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(SecurityConst.scriptXSS);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(SecurityConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(SecurityConst.emailErrorText);
        });

        test('type "testmail@miro.com<!--....XSS...-->"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(SecurityConst.HTMLXSS);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(SecurityConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(SecurityConst.emailErrorText);
        });

        test('type "testmail@miro.com<div ...XSS...=test />"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(SecurityConst.nameXSS);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(SecurityConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(SecurityConst.emailErrorText);
        });

        test('type "testmail@miro.com<...XSS...... href="/test" />"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(SecurityConst.tagXSS);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(SecurityConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(SecurityConst.emailErrorText);
        });

        test('type "testmail@miro.com<style>...XSS...</style>"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(SecurityConst.styleXSS);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(SecurityConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(SecurityConst.emailErrorText);
        });

        test('type "testmail@miro.com<IMG SRC="javascript:alert(\'XSS\');">"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(SecurityConst.imgXSS);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(SecurityConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(SecurityConst.emailErrorText);
        });

        test('type "testmail@miro.com<body onload=alert(1)>"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(SecurityConst.bodyOnloadXSS);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(SecurityConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(SecurityConst.emailErrorText);
        });

        test('type "testmail@miro.com"><svg onload=alert(1)//"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(SecurityConst.svgAOnloadXSS);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(SecurityConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(SecurityConst.emailErrorText);
        });

        test('type "testmail@miro.com\'><svg onload=alert(1)//"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(SecurityConst.svgBOnloadXSS);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(SecurityConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(SecurityConst.emailErrorText);
        });
    })
    
    test.describe('SQL Injection', () => {
        test('type "mail@miro.com-1\' or sleep(10) --"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(SecurityConst.sleepASQLI);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(SecurityConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(SecurityConst.emailErrorText);
        });

        test('type "-1\' or sleep(10) --mail@miro.com"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(SecurityConst.sleepBSQLI);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(SecurityConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(SecurityConst.emailErrorText);
        });

        test('type "mail@miro.com-1\' or sleep(10) --mail@miro.com"', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            await miro.emailInput.type(SecurityConst.sleepCSQLI);
            await miro.signupButton.click();
            //result
            await expect(miro.emailInput).toHaveClass(SecurityConst.inputErrorClassName);
            await expect(miro.emailError).toBeVisible();
            await expect(miro.emailError).toContainText(SecurityConst.emailErrorText);
        });
    })
    
    test.describe('Template Injection', () => {
        test('type "test{{7*7}}mail@miro.com', async ({page}) => {
            const miro = new MiroSignupPage(page);
            //action
            const email = 't' + miro.getRandomNumber() + SecurityConst.sevenXsevenTemplateI;
            await miro.nameInput.type(SecurityConst.validNameValue);
            await miro.emailInput.type(email);
            await miro.passwordInput.type(SecurityConst.validPasswordValue);
            await miro.termsCheckbox.click();
            await miro.signupButton.click();
            //result
            await miro.page.waitForEvent('load');
            await expect(miro.registeredEmailValue).toBeVisible();
            await expect(miro.registeredEmailValue).toContainText(email);
            await expect(miro.registeredEmailValue).not.toContainText(SecurityConst.sevenXsevenResultTemplateI);
        });
    })
});
