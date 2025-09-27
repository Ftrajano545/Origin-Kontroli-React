import Styles from "./home.module.css"

export default function Home() {
    return (
        <>

            <header className={Styles.header}>
                <div className={Styles.container}>
                    <div className={Styles.headerContent}>
                        <div className={Styles.logo}>
                            <a href="/index.html">
                                <img src="/img/logo_caixa.png" alt="" width="60px" />
                            </a>
                            <span className={Styles.logoText}>Kontroli</span>
                        </div>

                        <nav className={Styles.nav}>
                            <a href="#features">Funcionalidades</a>
                            <a href="#benefits">Benefícios</a>
                            <a href="#contact">Contato</a>
                        </nav>

                        <div className={Styles.navButtons}>
                            <a href="#" className={`${Styles.btn} ${Styles.btnOutline}`}>Quero testar</a>
                            <a href="/pages/login/login.html" className={`${Styles.btn} ${Styles.btnPrimary}`}>Login</a>
                        </div>
                    </div>
                </div>
            </header>

            
                <section className={Styles.firstSection}>
                    <div className={Styles.container}>
                        <div className={Styles.firstSectionGrid}>
                            <div className={Styles.firstSectionContent}>
                                <div className={Styles.firstSectionBadge}>
                                    🚀 Controle de estoque inteligente
                                </div>
                                <h1 className={Styles.firstSectionTitle}>
                                    Elimine a <span className={Styles.firstSectionGradientText}>falta de controle</span> do seu estoque
                                </h1>
                                <p className={Styles.firstSectionDescription}>
                                    Automatize seu controle de estoque, evite perdas inesperadas e otimize
                                    suas vendas com nossa solução inteligente para pequenas e médias empresas.
                                </p>
                                <div className={Styles.firstSectionButtons}>
                                    <a href="#" className={`${Styles.btn} ${Styles.btnPrimary} ${Styles.btnLg}`}>
                                        Começar gratuitamente
                                    </a>
                                    <a href="#" className={` ${Styles.btn} ${Styles.btnOutline} ${Styles.btnLg}`}>
                                        Ver demonstração
                                    </a>
                                </div>
                                <div className={Styles.firstSectionFeatures}>
                                    ✨ Teste grátis por 30 dias • Sem compromisso • Suporte incluído
                                </div>
                            </div>
                            <div className={Styles.firstSectionImage}>
                                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&h=600"
                                    alt="Imagem de Estoque" />
                                <div className={Styles.firstSectionStats}>
                                    <div>
                                        <div className={Styles.firstSectionStatValue}>98%</div>
                                        <div className={Styles.firstSectionStatLabel}>Precisão</div>
                                    </div>
                                    <div>
                                        <div className={Styles.firstSectionStatValue}>-75%</div>
                                        <div className={Styles.firstSectionStatVabel}>Perdas</div>
                                    </div>
                                    <div>
                                        <div className={Styles.firstSectionStatValue}>+45%</div>
                                        <div className={Styles.firstSectionStatLabel}>Eficiência</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={Styles.problemSection}>
                    <div className={Styles.container}>
                        <div className={Styles.sectionHeader}>
                            <h2 className={Styles.sectionTitle}>O desafio das pequenas empresas</h2>
                            <p className={Styles.sectionDescription}>
                                Pequenos negócios sofrem com falta de controle de estoque,
                                perdas inesperadas e retrabalho no dia a dia.
                            </p>
                        </div>

                        <div className={Styles.problemGrid}>
                            <div className={Styles.problemCards}>
                                <div className={`${Styles.card} ${Styles.problemCard}`}>
                                    <div className={Styles.cardContent}>
                                        <div className={`${Styles.cardIcon} ${Styles.problemIcon}`}>
                                            <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className={Styles.cardTitle}>Produtos em falta</h3>
                                            <p className={Styles.cardText}>Perdas de vendas por não ter o produto na hora certa</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${Styles.card} ${Styles.problemCard}`}>
                                    <div className={Styles.cardContent}>
                                        <div className={`${Styles.cardIcon} ${Styles.problemIcon}`}>
                                            <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className={Styles.cardTitle}>Desperdício de capital</h3>
                                            <p className={Styles.cardText}>Estoque parado ou produtos com validade vencida</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${Styles.card} ${Styles.problemCard}`}>
                                    <div className={Styles.cardContent}>
                                        <div className={`${Styles.cardIcon} ${Styles.problemIcon}`}>
                                            <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className={Styles.cardTitle}>Tempo perdido</h3>
                                            <p className={Styles.cardText}>Horas gastas em controles manuais e planilhas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Styles.problemImage}>
                                <img src="https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Funcionarios no estoque" />
                            </div>
                        </div>

                        <div className={Styles.sectionHeader}>
                            <div className={Styles.solucao}>
                                💡 A solução
                            </div>
                            <h2 className={Styles.sectionTitle}>
                                <span className={Styles.firstSectionGradientText}>Kontroli</span> automatiza seu controle de estoque
                            </h2>
                            <p className={Styles.sectionDescription}>
                                Nossa plataforma automatiza o controle de estoque, cadastra produtos,
                                registra entradas e saídas, envia alertas automáticos e gera relatórios inteligentes.
                            </p>
                        </div>

                        <div className={Styles.solutionGrid}>
                            <div className={`${Styles.card} ${Styles.solutionCard}`}>
                                <div className={Styles.cardContent}>
                                    <div className={`${Styles.cardIcon} ${Styles.solutionIcon} `}>
                                        <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className={Styles.cardTitle}>Controle automatizado</h3>
                                        <p className={Styles.cardText}>Cadastro inteligente de produtos com alertas automáticos</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`${Styles.card} ${Styles.solutionCard}`}>
                                <div className={Styles.cardContent}>
                                    <div className={`${Styles.cardIcon} ${Styles.solutionIcon}`}>
                                        <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className={Styles.cardTitle}>Relatórios inteligentes</h3>
                                        <p className={Styles.cardText}>Análises detalhadas para tomada de decisão estratégica</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`${Styles.card} ${Styles.solutionCard}`}>
                                <div className={Styles.cardContent}>
                                    <div className={` ${Styles.cardIcon} ${Styles.solutionIcon}`}>
                                        <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className={Styles.cardTitle}>Prevenção de perdas</h3>
                                        <p className={Styles.cardText}>Alertas de validade e monitoramento em tempo real</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className={Styles.featuresSection}>
                    <div className={Styles.container}>
                        <div className={Styles.sectionHeader}>
                            <div className={Styles.funcio}>
                                ⚡ Funcionalidades
                            </div>
                            <h2 className={Styles.sectionTitle}>
                                Tudo que você precisa para <span className={Styles.firstSectionGradientText}>controlar seu estoque</span>
                            </h2>
                            <p className={Styles.sectionDescription}>
                                Uma plataforma completa com todas as ferramentas necessárias
                                para otimizar a gestão do seu estoque e aumentar a eficiência do seu negócio.
                            </p>
                        </div>

                        <div className={Styles.featuresGrid}>
                            <div className={Styles.featureCard}>
                                <div className={Styles.featureContent}>
                                    <div className={Styles.featureIcon}>
                                        <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className={Styles.featureTitle}>Gestão de Produtos</h3>
                                        <p>Cadastre e organize seus produtos com códigos, categorias e fornecedores</p>
                                    </div>
                                </div>
                            </div>

                            <div className={Styles.featureCard}>
                                <div className={Styles.featureContent}>
                                    <div className={Styles.featureIcon}>
                                        <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className={Styles.featureTitle}>Controle de Entradas/Saídas</h3>
                                        <p>Registre movimentações automáticas e mantenha o estoque sempre atualizado</p>
                                    </div>
                                </div>
                            </div>

                            <div className={Styles.featureCard}>
                                <div className={Styles.featureContent}>
                                    <div className={Styles.featureIcon}>
                                        <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 17h5l-5 5v-5zM9 7H4l5-5v5zM13 12h7l-5 5V7l-5 5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className={Styles.featureTitle}>Alertas Inteligentes</h3>
                                        <p>Receba notificações de estoque baixo, produtos vencendo e mais</p>
                                    </div>
                                </div>
                            </div>

                            <div className={Styles.featureCard}>
                                <div className={Styles.featureContent}>
                                    <div className={Styles.featureIcon}>
                                        <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className={Styles.featureTitle}>Relatórios Avançados</h3>
                                        <p>Analise performance, custos e tome decisões baseadas em dados</p>
                                    </div>
                                </div>
                            </div>

                            <div className={Styles.featureCard}>
                                <div className={Styles.featureContent}>
                                    <div className={Styles.featureIcon}>
                                        <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className={Styles.featureTitle}>Acesso Mobile</h3>
                                        <p>Gerencie seu estoque de qualquer lugar com nossa app mobile</p>
                                    </div>
                                </div>
                            </div>

                            <div className={Styles.featureCard}>
                                <div className={Styles.featureContent}>
                                    <div className={Styles.featureIcon}>
                                        <svg className={Styles.ico} n fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className={Styles.featureTitle}>Multi-usuários</h3>
                                        <p>Controle de acesso e permissões para sua equipe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="benefits" className={Styles.ctaSection}>
                    <div className={Styles.container}>
                        <div className={Styles.sectionHeader}>
                            <h2 className={Styles.sectionTitle}>
                                Mais de <span className={Styles.firstSectionGradientText}>1.000+ empresas</span> confiam no Kontroli
                            </h2>
                            <p className={Styles.sectionDescription}>
                                Veja o que nossos clientes estão dizendo sobre a transformação em seus negócios
                            </p>
                        </div>

                        <div className={Styles.testimonialsGrid}>
                            <div className={Styles.testimonialCard}>
                                <div className={Styles.stars}>
                                    <span className={Styles.star}>★</span>
                                    <span className={Styles.star}>★</span>
                                    <span className={Styles.star}>★</span>
                                    <span className={Styles.star}>★</span>
                                    <span className={Styles.star}>★</span>
                                </div>
                                <div className={Styles.testimonialText}>
                                    "Desde que começamos a usar o Kontroli, nossas vendas aumentaram 30% e não temos mais
                                    produtos
                                    em falta."
                                </div>
                                <div className={Styles.testimonialAuthor}>Maria Silva</div>
                                <div className={Styles.testimonialRole}>Proprietária - Loja do Bairro</div>
                            </div>

                            <div className={Styles.testimonialCard}>
                                <div className={Styles.stars}>
                                    <span className={Styles.star}>★</span>
                                    <span className={Styles.star}>★</span>
                                    <span className={Styles.star}>★</span>
                                    <span className={Styles.star}>★</span>
                                    <span className={Styles.star}>★</span>
                                </div>
                                <div className={Styles.testimonialText}>
                                    "A automação dos alertas salvou nosso negócio. Nunca mais perdemos produtos por vencimento."
                                </div>
                                <div className={Styles.testimonialAuthor}>João Santos</div>
                                <div className={Styles.testimonialRole}>Gerente - Supermercado Santos</div>
                            </div>

                            <div className={Styles.testimonialCard}>
                                <div className={Styles.stars}>
                                    <span className={Styles.star}>★</span>
                                    <span className={Styles.star}>★</span>
                                    <span className={Styles.star}>★</span>
                                    <span className={Styles.star}>★</span>
                                    <span className={Styles.star}>★</span>
                                </div>
                                <div className={Styles.testimonialText}>
                                    "Os relatórios são incríveis! Agora temos controle total dos nossos custos e margem de
                                    lucro."
                                </div>
                                <div className={Styles.testimonialAuthor}>Ana Costa</div>
                                <div className={Styles.testimonialRole}>Sócia - Farmácia Central</div>
                            </div>
                        </div>

                        <div className={Styles.ctaCard}>
                            <h2 className={Styles.ctaTitle}>Pronto para transformar seu negócio?</h2>
                            <p className={Styles.ctaDescription}>
                                Junte-se a milhares de empresas que já automatizaram seu controle de estoque
                                e aumentaram seus lucros com o Kontroli.
                            </p>
                            <div className={Styles.ctaButtons}>
                                <a href="#" className={`${Styles.btn} ${Styles.btnWhite} ${Styles.btnLg}`}>
                                    Começar teste grátis
                                    <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                        </path>
                                    </svg>
                                </a>
                                <a href="#" className={`${Styles.btn} ${Styles.btnOutlineWhite} ${Styles.btnLg}`}>
                                    Falar com consultor
                                </a>
                            </div>
                            <div className={Styles.ctaFeatures}>
                                ✨ 30 dias grátis • Sem compromisso • Suporte 24/7
                            </div>
                        </div>
                    </div>
                </section>
         

            <footer id="contact" className={Styles.footer}>
                <div className={Styles.container}>
                    <div className={Styles.footerGrid}>
                        <div>
                            <div className={Styles.logo}>
                                <a href="/FINAL/indexfinal.html">
                                    <img src="/img/logo_caixa.png" alt="" width="60px" />
                                </a>
                                <span className={Styles.logoText}>Kontroli</span>
                            </div>
                            <p className={Styles.footerDescription}>
                                A solução completa para controle de estoque que transforma
                                pequenas e médias empresas em negócios mais eficientes e lucrativos.
                            </p>
                            <div className={Styles.footerSocial}>
                                <button className={Styles.socialBtn}>
                                    <svg className={Styles.icon} fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </button>
                                <button className={Styles.socialBtn}>
                                    <svg className={Styles.icon} fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 0 1 1.77 1.153 4.92 4.92 0 0 1 1.153 1.77c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.153 1.77 4.92 4.92 0 0 1-1.77 1.153c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.77-1.153 4.92 4.92 0 0 1-1.153-1.77c-.163-.457-.347-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.153-1.77 4.92 4.92 0 0 1 1.77-1.153c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.897.304 4.158.555a6.92 6.92 0 0 0-2.51 1.623A6.92 6.92 0 0 0 .555 4.158c-.251.739-.425 1.617-.483 2.894C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.232 2.155.483 2.894a6.92 6.92 0 0 0 1.623 2.51 6.92 6.92 0 0 0 2.51 1.623c.739.251 1.617.425 2.894.483C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.155-.232 2.894-.483a6.92 6.92 0 0 0 2.51-1.623 6.92 6.92 0 0 0 1.623-2.51c.251-.739.425-1.617.483-2.894.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.232-2.155-.483-2.894a6.92 6.92 0 0 0-1.623-2.51A6.92 6.92 0 0 0 19.842.555c-.739-.251-1.617-.425-2.894-.483C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.846-11.845a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z" />
                                    </svg>
                                </button>

                                <button className={Styles.socialBtn}>
                                    <svg className={Styles.icon} fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className={Styles.footerSection}>
                            <h3>Produto</h3>
                            <ul className={Styles.footerLinks}>
                                <li><a href="#">Funcionalidades</a></li>
                                <li><a href="#">Preços</a></li>
                                <li><a href="#">Demonstração</a></li>
                                <li><a href="#">Integrações</a></li>
                            </ul>
                        </div>

                        <div className={Styles.footerSection}>
                            <h3>Contato</h3>
                            <ul className={Styles.footerContact}>
                                <li>
                                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                    contato@kontroli.com
                                </li>
                                <li>
                                    <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                    </svg>
                                    (11) 9 9999-9999
                                </li>
                                <li>
                                    <svg className={Styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                        </path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    São Paulo, SP
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={Styles.footerBottom}>
                        <p className={Styles.footerCopyright}>
                            ©️ 2025 Kontroli. Todos os direitos reservados.
                        </p>
                        <div className={Styles.footerLegal}>
                            <a href="#">Política de Privacidade</a>
                            <a href="#">Termos de Uso</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}