import { Page, Locator } from "@playwright/test";
import { baseURL } from "../util/baseURL";

class LoginPage {
    readonly page: Page;
    readonly topTitle: Locator;
    readonly formTitle: Locator;
    readonly googleSignInButton: Locator;
    readonly micrososftSignInButton: Locator;
    readonly appleSignInButton: Locator;
    readonly userAgreementLink: Locator;
    readonly privacyPolicyLink: Locator;
    readonly cookiePolicyLink: Locator;
    readonly orTxt: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly viewPasswordButton: Locator;
    readonly forgetPasswordLink: Locator;
    readonly staySignedInLabel: Locator;
    readonly signInButton: Locator;
    readonly newToLinkedinText: Locator;
    readonly joinNowLink: Locator;

    constructor(page: Page) {
        if (!page) {
            throw new Error('Page object is required to initialize LoginPage');
        }
        this.page = page;
        this.topTitle = page.getByRole('link', { name: 'LinkedIn'});
        this.formTitle = page.getByRole("heading", { name: "Sign in" });
        this.googleSignInButton = page.frameLocator('iframe[title="Sign in with Google Button"]').getByRole('button', { name: 'Continue with Google. Opens' });
        this.micrososftSignInButton = page.frameLocator('iframe[name="microsoft_signin_iframe_1"]').getByRole('button', { name: 'Entrar com a conta da' });
        this.appleSignInButton = page.getByRole('button', { name: 'Entrar com a Apple' });
        this.userAgreementLink = page.locator('#organic-div').getByRole('link', { name: 'Contrato do Usuário' });
        this.privacyPolicyLink = page.getByRole('link', { name: 'Política de Privacidade', exact: true });
        this.cookiePolicyLink = page.locator('#organic-div').getByRole('link', { name: 'Política de Cookies' });
        this.orTxt = page.getByText('ou', { exact: true });
        this.emailInput = page.getByRole('textbox', { name: 'E-mail ou telefone' });
        this.passwordInput = page.getByRole('textbox', { name: 'Senha' });
        this.viewPasswordButton = page.getByRole('button', { name: 'Exibir' });
        this.forgetPasswordLink = page.getByRole('link', { name: 'Esqueceu a senha?' });
        this.staySignedInLabel = page.getByText('Me mantenha na conta');
        this.signInButton = page.getByRole('button', { name: 'Entrar', exact: true });
        this.newToLinkedinText = page.getByText('Ainda não faz parte do');
        this.joinNowLink = page.getByRole('link', { name: 'Cadastre-se agora' });

    }

    async goToLoginPage() {
        await this.page.goto(baseURL.login);
    }

}

export default LoginPage;