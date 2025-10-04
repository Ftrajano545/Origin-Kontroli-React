import Styles from "./relatorio.module.css"
import Navbar from "../components/Navbar/Navbar"


export default function Relatorio() {
    return (
            <>

  <header className={Styles.header}>
        <div className={Styles.containerHeader}>
          <div className={Styles.headerContent}>
            <div className={Styles.logo}>
              <a href="/">
                <img src="/img/logo_caixa.png" alt="" width="60px" />
              </a>
              <span className={Styles.logoText}>Kontroli</span>
            </div>
            <div className={Styles.headerActions}>

              <div className={Styles.separator}></div>
              <a href="/"> <button className={` ${Styles.btn} ${Styles.btnGhost}`}>
                Logout
                <svg
                  className={Styles.icon}
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"
                  />
                </svg>
              </button>
              </a>
            </div>
          </div>
        </div>
      </header>

        <main>
            <div className={Styles.container}>
                <section>
                    <div className={Styles.cards}>

                        <div className={Styles.card}>
                            <div>

                                <h3>0</h3>
                                <p>Vendas</p>
                            </div>
                        </div>

                        <div className={Styles.card}>
                            <div>

                                <h3>R$0,00</h3>
                                <p>Faturamento</p>
                            </div>
                        </div>

                        <div className={Styles.card}>
                            <div>
                                <h3>0</h3>
                                <p>Total de Vendas</p>
                            </div>
                        </div>
                        <div className={Styles.card}>
                            <div>
                                <h3>R$0,00</h3>
                                <p>Total faturado</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section >
                    <button className={Styles.filter}>Hoje</button>
                    <button className={Styles.filter}>7 Dias</button>
                    <button className={Styles.filter}>30 Dias</button>

                </section>


                <section className={Styles.historicoVenda}>
                    <div className={Styles.vendas}>

                        <h2 className={Styles.escrita}> Historico de Vendas</h2>
                    </div>
                    <div className={Styles.historico}>
                        <div className={Styles.nova}>
                            <strong>
                                <p>Venda #moto</p>
                            </strong>
                            <p>19/09/2025 às 20:23:09 • fabio</p>
                        </div>
                    </div>

                </section>
            </div>
        </main>

     </>
    )
}