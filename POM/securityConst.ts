export class SecurityConst {

    //XSS
    public static readonly scriptXSS = 'testmail@miro.com<script>alert(1)</script>';
    public static readonly HTMLXSS = 'testmail@miro.com<!--....XSS...-->';
    public static readonly nameXSS = 'testmail@miro.com<div ...XSS...=test />';
    public static readonly tagXSS = 'testmail@miro.com<...XSS...... href="/test" />';
    public static readonly styleXSS = 'testmail@miro.com<style>...XSS...</style>';
    public static readonly imgXSS = 'testmail@miro.com<IMG SRC="javascript:alert(\'XSS\');">';
    public static readonly bodyOnloadXSS = 'testmail@miro.com<body onload=alert(1)>';
    public static readonly svgAOnloadXSS = 'testmail@miro.com"><svg onload=alert(1)//';
    public static readonly svgBOnloadXSS = 'testmail@miro.com\'><svg onload=alert(1)//';

    //SQL Injection
    public static readonly sleepASQLI = 'mail@miro.com-1\' or sleep(10) --';
    public static readonly sleepBSQLI = '-1\' or sleep(10) --mail@miro.com';
    public static readonly sleepCSQLI = 'mail@miro.com-1\' or sleep(10) --mail@miro.com';

    //Template Injection
    public static readonly sevenXsevenTemplateI = '{{7*7}}mail@miro.com';
    public static readonly sevenXsevenResultTemplateI = '49mail@miro.com';
    public static readonly validNameValue = 'Name';
    public static readonly validPasswordValue = '12345678';

    public static readonly inputErrorClassName = 'signup__input-text signup__input-text--error';
    public static readonly inputValidClassName = 'signup__input-text';

    public static readonly nameErrorText = 'Please enter your name.';
    public static readonly longNameErrorText = 'The field Name must be a string with a maximum length of 55.';
    public static readonly emptyEmailErrorText = 'Please enter your email address.';
    public static readonly emailErrorText = 'The email you entered is incorrect.';
    public static readonly emailUsedErrorText = 'Sorry, this email is already registered';
    public static readonly emptyPasswordErrorText = 'Please enter your password.';
    public static readonly passwordErrorText = 'Please use 8+ characters for secure password';

}