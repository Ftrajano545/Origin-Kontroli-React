import Styles from "./relatorio.module.css"
import Navbar from "../components/Navbar/Navbar"


export default function Relatorio() {
    return (
            <>

<Navbar/>
        <main>
            <div className={Styles.container}>
                <section>
                    <div className={Styles.cards}>

                        <div className={Styles.card}>
                            <div>

                                <h3>0</h3>
                                <p>Vendas Hoje</p>
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
                        <button className={Styles.apagar}>x</button>
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