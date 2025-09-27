import Styles from "./vendas.module.css"
import Navbar from "../components/Navbar/Navbar"
export default function Vendas() {
    return (
        <>

<Navbar/>
            <main>
                <div className={Styles.container}>
                    <div className={Styles.box}>

                        <section className={Styles.vendas}>
                            <div className={Styles.search}>
                                <h2 className={Styles.buscar}>Buscar Produtos</h2>
                            </div>

                            <div className={Styles.caixa}>
                                <div>
                                    <input type="text" placeholder="Digite o nome ou código do produto..." />
                                </div>
                                <div className={Styles.representante}>
                                    <label className={Styles.vendedor} for="name">Vendedor (opcional)</label>
                                    <input type="text" placeholder="Nome do vendedor" />
                                </div>
                            </div>

                        </section>

                        <section className={Styles.car}>
                            <div className={Styles.compra}>
                                <h2 className={Styles.carrinho}>Carrinho de Compras</h2>
                                <button className={Styles.limpar}>Limpar</button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

