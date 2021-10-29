// https://miro.com/signup/
import { Locator, Page } from '@playwright/test';

export class MiroSignupPage {
    readonly page: Page;
    readonly miroLogoLink: Locator;
    readonly signInButton: Locator;
    readonly header: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signupButton: Locator;
    readonly signupWGoogleButton: Locator;
    readonly signupWSlackButton: Locator;
    readonly signupWOffice365Button: Locator;
    readonly signupWAppleButton: Locator;
    readonly signupWFBButton: Locator;
    readonly cookiesBanner: Locator;
    readonly cookiesSettingsButton: Locator;
    readonly acceptCookiesButton: Locator;
    readonly policyText: Locator;
    readonly termsCheckbox: Locator;
    readonly subscribeCheckbox: Locator;
    readonly termsLink: Locator;
    readonly privacyPolicyLink: Locator;
    readonly benefitArea: Locator;
    readonly benefitList: Locator;
    readonly nameError: Locator;
    readonly emailError: Locator;
    readonly termsError: Locator;
    readonly emptyPasswordHint: Locator;
    readonly passwordHint: Locator;
    readonly registeredEmailValue: Locator;
    readonly termsLine: Locator;
    readonly subsLine: Locator;
    readonly socialTermsLine: Locator;
    readonly socialSubsLine: Locator;
    readonly continueSignupSocialButton: Locator;
    readonly socialTerms: Locator;
    readonly subsSocialCheck: Locator;
    readonly termsSocialCheck: Locator;
    readonly socialTermsError: Locator;
    readonly cookieBannerText: string;
    readonly signupHeaderText: string;
    readonly confirmEmailHeaderText: string;
    readonly signupButtonText: string;
    readonly signupWGoogleButtonText: string;
    readonly agreeWTermsText: string;
    readonly agreeWSocialTermsText: string;
    readonly termsMiroText: string;
    readonly subsMiroText: string;
    readonly continueSignupSocialButtonText: string;
    readonly socialTermsErrorClass: string;
    readonly google: string;
    readonly slack: string;
    readonly office365: string;
    readonly apple: string;
    readonly facebook: string;
    readonly benefitListText: any;

    constructor(page: Page) {
        this.page = page;
        this.miroLogoLink = page.locator('.overlay-signup__logo');
        this.signInButton = page.locator('.overlay-signup__btn');
        this.header = page.locator('h1');
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.signupButton = page.locator('[data-autotest-id="mr-form-signup-btn-start-1"]');
        this.signupWGoogleButton = page.locator('#a11y-signup-with-google');
        this.signupWSlackButton = page.locator('#kmq-slack-button');
        this.signupWOffice365Button = page.locator('#kmq-office365-button');
        this.signupWAppleButton = page.locator('#apple-auth');
        this.signupWFBButton = page.locator('.signup__btn--facebook');
        this.cookiesBanner = page.locator('#onetrust-banner-sdk');
        this.cookiesSettingsButton = page.locator('#onetrust-pc-btn-handler');
        this.acceptCookiesButton = page.locator('#onetrust-accept-btn-handler');
        this.policyText = page.locator('#onetrust-policy-text');
        this.termsCheckbox = page.locator('.signup__checkbox-list > div:nth-child(1) svg');
        this.subscribeCheckbox = page.locator('.signup__checkbox-list > div:nth-child(2) svg');
        this.termsLink = page.locator('[data-autotest-id="mr-link-terms-1"]');
        this.privacyPolicyLink = page.locator('[data-autotest-id="mr-link-privacy-1"]');
        this.benefitArea = page.locator('.cxl-social');
        this.benefitList = page.locator('.cxl-benefit');
        this.registeredEmailValue = page.locator('.signup__subtitle-form > strong');
        this.termsLine = page.locator('#signup-error-emptyTerms');
        this.subsLine = page.locator('#signup-subscribe-desc');
        this.socialTermsLine = page.locator('#signup-terms-desc-pop');
        this.socialSubsLine = page.locator('#signup-subscribe-desc-pop');
        this.continueSignupSocialButton = page.locator('[data-autotest-id="mr-form-gdpr-btn-signin-1"]');
        this.socialTerms = page.locator('#tos-signup-terms');
        this.subsSocialCheck = page.locator('.socialtos__terms-wrap.socialtos__terms-wrap--last > div > span > label');
        this.termsSocialCheck = page.locator('.socialtos.socialtos--visible > div > div > div:nth-child(2) > div > span > label');
        //errors
        this.nameError = page.locator('#nameError');
        this.emailError = page.locator('#emailError');
        this.termsError = page.locator('#termsError');
        this.passwordHint = page.locator('#signup-form-password');
        this.emptyPasswordHint = page.locator('[data-autotest-id="please-enter-your-password-1"]');
        this.socialTermsError = page.locator('#tos-signup-terms-error');
        // texts
        this.cookieBannerText = 'By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.Cookies Settings Accept All Cookies';
        this.signupHeaderText = 'Get started free today';
        this.confirmEmailHeaderText = 'Check your email';
        this.agreeWTermsText = 'Please agree with the Terms to sign up.';
        this.agreeWSocialTermsText = 'Please agree with the Terms of Service and Privacy Policy';
        this.signupButtonText = 'Get started now';
        this.signupWGoogleButtonText = 'Sign up with Google';
        this.termsMiroText = 'I agree to Miro Terms and Privacy Policy.';
        this.subsMiroText = 'I agree to receive Miro news and updates.';
        this.continueSignupSocialButtonText = 'Continue to sign up';
        this.socialTermsErrorClass = 'js__socialtos-terms socialtos__terms-error';
        this.benefitListText = [
            'Included for Free:', '3 editable boards', 'Core integrations',
            'Unlimited team members', 'Templates', 'Basic attention management'];
        // socials
        this.google = 'https://accounts.google.com';
        this.slack = 'https://slack.com/workspace-signin';
        this.office365 = 'https://login.microsoftonline.com';
        this.apple = 'https://appleid.apple.com';
        this.facebook = 'https://www.facebook.com/login.php';
    }

    async goto() {
        await this.page.goto('https://miro.com/signup/');
    }

    getRandomNumber() {
        return Math.round(Math.random()*100000).toString();
    }
}