import Styles from "./login.module.css"

export default function login() {
    return (
        <>
             <main className={Styles.mainContent}>
                <div className={Styles.loginContainer}>
                    <div className={Styles.loginCard}>
                        <h1 className={Styles.loginTitle}>LOGIN</h1>

                        <div className={Styles.successMessage} id="successMessage">
                            Login realizado com sucesso! Redirecionando...
                        </div>

                            <div className={Styles.formGroup}>
                                <label for="email" className={Styles.formLabel} >Email ou Usuário</label>
                                <input type="text" id="email" name="email" className={Styles.formInput}
                                    placeholder="Digite seu email ou usuário" required/>
                                    <div className={Styles.errorMessage} id="emailError">Este campo é obrigatório</div>
                            </div>

                            <div className={Styles.formGroup}>
                                <label for="password" className={Styles.formLabel}>Senha</label>
                                <div className={Styles.passwordContainer}>
                                    <input type="password" id="password" name="password" className={Styles.formInput}
                                        placeholder="Digite sua senha" required />
                                        <button type="button" className={Styles.passwordToggle} id="passwordToggle">
                                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                id="eyeIcon">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                                </path>
                                            </svg>
                                        </button>
                                </div>
                                <div className={Styles.errorMessage} id="passwordError">Este campo é obrigatório</div>
                            </div>

                            <div className={Styles.forgotPassword}>
                                <a href="#" id="forgotPasswordLink">Esqueci minha senha</a>
                            </div>

                            <button className={Styles.loginButton} id="loginButton" onclick="loginForm()">
                                Entrar
                            </button>
                            <div id="erro">


                            </div>

                        <div className={Styles.divider}>
                            <span>ou</span>
                        </div>

                        <div className={Styles.registerLink}>
                            Não tem uma conta? <a href="#" id="registerLink">Criar conta gratuita</a>
                        </div>
                    </div>
                </div>
            </main> 
        </>
    )
}