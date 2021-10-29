export class PasswordConst {
    public static readonly weakPasswordValue = '12345678';
    public static readonly sosoPasswordValue = 'Ab_12!Ab_12!';
    public static readonly goodPasswordValue = 'AAbb_12!AAbb_12!';
    public static readonly greatPasswordValue = 'AAbb_12!AAbb_12';
    public static readonly weakPasswordText = 'Weak password';
    public static readonly sosoPasswordText = 'So-so password';
    public static readonly goodPasswordText = 'Good password';
    public static readonly greatPasswordText = 'Great password';
    public static readonly weakAndSosoPasswordColor = 'rgb(255, 208, 47)';
    public static readonly goodPasswordColor = 'rgb(119, 204, 102)';
    public static readonly greatPasswordColor = 'rgb(63, 83, 217)';
    public static readonly symbols7PasswordValue = '1234567';
    public static readonly spaces8PasswordValue = '        ';
    public static readonly specialSymbolsPasswordValue = '~`!@#$%^&*()_+?:"{}[];\'';

    public static readonly inputErrorClassName = 'signup__input-text signup__input-text--error';
    public static readonly inputValidClassName = 'signup__input-text';

    public static readonly emptyPasswordErrorText = 'Please enter your password.';
    public static readonly passwordErrorText = 'Please use 8+ characters for secure password';
    public static readonly passwordPlaceholder = 'Password 8+ characters';
}