
import Styles from "./vendas.module.css";
import Navbar from "../components/Navbar/Navbar";
import { useState, useEffect, useRef } from "react";

export default function Vendas() {
    const inputRef = useRef(null);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const url = "https://689e79853fed484cf87738b7.mockapi.io/Produtos";
    const [produtos, setProdutos] = useState([]);
    const [busca, setBusca] = useState("");
    const [carrinho, setCarrinho] = useState([]);
    const [vendedor, setVendedor] = useState("");

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProdutos(data));
    }, []);

    const produtosFiltrados = produtos.filter(p => {
        const buscaLower = busca.toLowerCase();
        return (
            p.name.toLowerCase().includes(buscaLower) ||
            p.code.toLowerCase().includes(buscaLower)
        );
    });

    function adicionarAoCarrinho(produto) {
        setCarrinho(prev => {
            const existe = prev.find(item => item.id === produto.id);
            if (existe) {
                return prev.map(item =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            } else {
                return [...prev, { ...produto, quantidade: 1 }];
            }
        });
    }

    function removerDoCarrinho(id) {
        setCarrinho(prev => prev.filter(item => item.id !== id));
    }

    function limparCarrinho() {
        setCarrinho([]);
    }

    const total = carrinho.reduce((acc, item) => acc + item.quantidade * Number(item.price), 0);

    return (
        <>
            <Navbar />
            <main className={Styles.main}>
                <div className={Styles.container}>
                    <section className={Styles.txt}>
                        <div className={Styles.sectionHeader}>
                            <div className={Styles.new}>
                                <h2>Nova Venda</h2>
                            </div>
                            <p>Organize, visualize e gerencie suas vendas em poucos cliques</p>
                        </div>
                    </section>
                    <div className={Styles.box}>
                        <section className={Styles.vendas}>
                            <div className={Styles.search}>
                                <h2 className={Styles.buscar}>Buscar Produtos</h2>
                            </div>
                            <div className={Styles.caixa}>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        className={Styles.input}
                                        type="text"
                                        placeholder="Digite o nome ou código do produto..."
                                        value={busca}
                                        ref={inputRef}
                                        onFocus={() => setShowSuggestions(true)}
                                        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                                        onChange={e => {
                                            setBusca(e.target.value);
                                            setShowSuggestions(true);
                                        }}
                                    />
                                    {showSuggestions && produtosFiltrados.length > 0 && (
                                        <ul className={Styles.sugestoesProdutos}>
                                            {produtosFiltrados.slice(0, 8).map(produto => (
                                                <li
                                                    key={produto.id}
                                                    className={Styles.sugestaoItem}
                                                    onMouseDown={() => {
                                                        setBusca(produto.name);
                                                        setShowSuggestions(false);
                                                    }}
                                                >
                                                    <strong>{produto.name}</strong> ({produto.code})
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className={Styles.representante}>
                                    <label className={Styles.vendedor} htmlFor="name">Vendedor (opcional)</label>
                                    <input
                                        className={Styles.input}
                                        type="text"
                                        placeholder="Nome do vendedor"
                                        value={vendedor}
                                        onChange={e => setVendedor(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* Bloco de produtos disponíveis removido conforme solicitado */}
                        </section>
                        <section className={Styles.car}>
                            <div className={Styles.compra}>
                                <h2 className={Styles.carrinho}>Carrinho de Compras</h2>
                                <button className={Styles.limpar} onClick={limparCarrinho}>Limpar</button>
                            </div>
                            <div className={Styles.carrinhoConteudo}>
                                {carrinho.length === 0 ? (
                                    <p className={Styles.carrinhoVazio}>Carrinho vazio.</p>
                                ) : (
                                    <ul className={Styles.listaCarrinho}>
                                        {carrinho.map(item => (
                                            <li key={item.id} className={Styles.itemCarrinho}>
                                                <span>
                                                    {item.name} x{item.quantidade} - {(item.quantidade * Number(item.price)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                                </span>
                                                <button className={Styles.btn} onClick={() => removerDoCarrinho(item.id)}>Remover</button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <div className={Styles.totalCarrinho}>
                                    Total: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}

