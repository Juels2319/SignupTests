export class EmailConst {
    public static readonly simpleValidEmailValue = 'email@miro.com';
    public static readonly simpleRUEmailValue = 'email@домен.рф';
    public static readonly numberEmailValue = '123@miro.ru';
    public static readonly minusNameEmailValue = 'e-mail@miro.ru';
    public static readonly minusDomainEmailValue = 'email@mi-ro.ru';
    public static readonly minus1stDomainEmailValue = 'email@-miro.ru';
    public static readonly dotNameEmailValue = 'e.mail@miro.ru';
    public static readonly dotDomainEmailValue = 'email@mi.ro.ru';
    public static readonly specSymbolNameEmailValue = 'e_mail@miro.ru';
    public static readonly specSymbolDomainEmailValue = 'email@mi_ro.ru';
    public static readonly symbols64EmailValue = '1234567890123456789012345678901234567890123456789012345678901234+x@example.com'; //error
    public static readonly woAtEmailValue = 'emailmiro.ru';
    public static readonly spaceNameEmailValue = 'e mail@mi_ro.ru';
    public static readonly spaceDomainEmailValue = 'email@mi ro.ru';
    public static readonly woNameEmailValue = '@miro.ru';
    public static readonly woDomainEmailValue = 'email@';
    public static readonly littleDomainEmailValue = 'email@miro.r'; //error
    public static readonly wo2DomainEmailValue = 'email@mirocom';
    public static readonly w2DotDomainEmailValue = 'email@miro..com';
    public static readonly mixedEmailValue = 'e_m-a.il123@mi.ro.ru';
    public static readonly alreadyUsedEmailValue = 'testemail@mail.ru';

    public static readonly inputErrorClassName = 'signup__input-text signup__input-text--error';
    public static readonly inputValidClassName = 'signup__input-text';

    public static readonly emptyEmailErrorText = 'Please enter your email address.';
    public static readonly emailErrorText = 'The email you entered is incorrect.';
    public static readonly emailValidateErrorText = 'This doesn’t look like an email address. Please check it for typos and try again.';
    public static readonly emailUsedErrorText = 'Sorry, this email is already registered';
    public static readonly emailPlaceholder = 'Work email';
}