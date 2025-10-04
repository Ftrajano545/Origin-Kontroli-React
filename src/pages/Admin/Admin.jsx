import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBox,
  faShoppingCart,
  faExclamationTriangle,
  faDollarSign,
  faBoxOpen,
  faPlus,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./admin.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Admin() {
  const url =  "https://689e79853fed484cf87738b7.mockapi.io/Produtos";
  const [produtos, setProdutos] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalEditAberto, setModalEditAberto] = useState(false);
  const [produtoEdit, setProdutoEdit] = useState(null);
  const [form, setForm] = useState({
    name: "",
    code: "",
    category: "",
    quantity: "",
    minStock: "",
    price: "",
    description: ""
  });
  const [busca, setBusca] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("all");

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProdutos(data);
    } catch (e) {
      setProdutos([]);
    }
  }

  const totalProdutos = produtos.length;
  const totalItens = produtos.reduce((acc, p) => acc + Number(p.quantity), 0);
  const estoqueBaixo = produtos.filter(p => Number(p.quantity) < Number(p.minStock)).length;
  const valorTotal = produtos.reduce((acc, p) => acc + Number(p.price), 0);
  const valorTotalFormatado = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const produtosFiltrados = produtos.filter(p => {
    const buscaLower = busca.toLowerCase();
    const matchBusca = p.name.toLowerCase().includes(buscaLower) || p.code.toLowerCase().includes(buscaLower);
    const matchCategoria = categoriaFiltro === "all" || p.category === categoriaFiltro;
    return matchBusca && matchCategoria;
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function abrirModal() {
    setForm({ name: "", code: "", category: "", quantity: "", minStock: "", price: "", description: "" });
    setModalAberto(true);
  }
  function fecharModal() {
    setModalAberto(false);
  }
  function abrirModalEdit(produto) {
    setProdutoEdit(produto);
    setForm({ ...produto });
    setModalEditAberto(true);
  }
  function fecharModalEdit() {
    setModalEditAberto(false);
    setProdutoEdit(null);
  }

  async function adicionarProduto(e) {
    e.preventDefault();
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    fecharModal();
    carregarProdutos();
      }

      async function editarProduto(e) {
        e.preventDefault();
        if (!produtoEdit) return;
        await fetch(`${url}/${produtoEdit.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
        fecharModalEdit();
        carregarProdutos();
      }

      async function deletarProduto(id) {
        await fetch(`${url}/${id}`, { method: "DELETE" });
        carregarProdutos();
      }

      // Categorias únicas para filtro
      const categorias = [
        ...new Set(produtos.map(p => p.category).filter(Boolean))
      ];

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
                  <a href="/"> <button className={` ${Styles.btn} ${Styles.btnGhost}`}>Logout</button></a>
                </div>
              </div>
            </div>
          </header>

          <div className={Styles.app}>
            <main className={Styles.container}>
              {/* STATS */}
              <div className={Styles.statsGrid}>
                <div className={Styles.statCard}>
                  <div className={Styles.statCardContent}>
                    <div className={Styles.statInfo}>
                      <h3>Total de Produtos</h3>
                      <div className={Styles.value}>{totalProdutos}</div>
                    </div>
                    <div className={`${Styles.statIcon} ${Styles.statIconBlue}`}>
                      <FontAwesomeIcon icon={faBox} />
                    </div>
                  </div>
                </div>
                <div className={Styles.statCard}>
                  <div className={Styles.statCardContent}>
                    <div className={Styles.statInfo}>
                      <h3>Itens em Estoque</h3>
                      <div className={Styles.value}>{totalItens}</div>
                    </div>
                    <div className={`${Styles.statIcon} ${Styles.statIconGreen}`}>
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                  </div>
                </div>
                <div className={Styles.statCard}>
                  <div className={Styles.statCardContent}>
                    <div className={Styles.statInfo}>
                      <h3>Estoque Baixo</h3>
                      <div className={Styles.value}>{estoqueBaixo}</div>
                    </div>
                    <div className={`${Styles.statIcon} ${Styles.statIconRed}`}>
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                    </div>
                  </div>
                </div>
                <div className={Styles.statCard}>
                  <div className={Styles.statCardContent}>
                    <div className={Styles.statInfo}>
                      <h3>Valor Total</h3>
                      <div className={Styles.value}>{valorTotalFormatado}</div>
                    </div>
                    <div className={`${Styles.statIcon} ${Styles.statIconPurple}`}>
                      <FontAwesomeIcon icon={faDollarSign} />
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTROLS */}
              <div className={Styles.controls}>
                <div className={Styles.searchContainer}>
                  <input
                    type="text"
                    className={Styles.searchInput}
                    placeholder="Buscar por nome ou código..."
                    value={busca}
                    onChange={e => setBusca(e.target.value)}
                  />
                </div>
                <div className={Styles.selectContainer}>
                  <select
                    className={Styles.select}
                    value={categoriaFiltro}
                    onChange={e => setCategoriaFiltro(e.target.value)}
                  >
                    <option value="all">Todas categorias</option>
                    {categorias.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <Link className={`${Styles.btn} ${Styles.btnSecondary}`} to={"/relatorio"}>
                  <FontAwesomeIcon icon={faChartBar} /> Relatórios
                </Link>
                <button
                  className={`${Styles.btn} ${Styles.btnPrimary}`}
                  onClick={abrirModal}
                >
                  <FontAwesomeIcon icon={faPlus} /> Adicionar Produto
                </button>
              </div>

              {/* TABLE */}
              <div className={Styles.tableContainer}>
                <table className={Styles.table}>
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Código</th>
                      <th>Categoria</th>
                      <th>Quantidade</th>
                      <th>Est. Mín.</th>
                      <th>Preço</th>
                      <th>Status</th>
                      <th>Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {produtosFiltrados.length === 0 ? (
                        <tr>
                          <td colSpan={8} style={{ textAlign: "center" }}>
                            {/* EMPTY STATE removido pois agora é tratado na tabela */}
                          </td>
                        </tr>
                    ) : (
                      produtosFiltrados.map(produto => {
                        const status = Number(produto.quantity) < Number(produto.minStock)
                          ? <span className={Styles.statusBadge + " " + Styles.lowStock}>Baixo</span>
                          : <span className={Styles.statusBadge + " " + Styles.inStock}>Em estoque</span>;
                        return (
                          <tr key={produto.id}>
                            <td>
                              <div className={Styles.productName}>{produto.name}</div>
                              <div className={Styles.productDescription}>{produto.description}</div>
                            </td>
                            <td>{produto.code}</td>
                            <td><span className={Styles.categoryBadge}>{produto.category}</span></td>
                            <td>{produto.quantity}</td>
                            <td>{produto.minStock}</td>
                            <td>{Number(produto.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                            <td>{status}</td>
                            <td>
                              <button className={Styles.btn} onClick={() => abrirModalEdit(produto)}>Editar</button>
                              <button className={Styles.btn + " " + Styles.btnDanger} onClick={() => deletarProduto(produto.id)}>Excluir</button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              {/* MODAL - ADICIONAR PRODUTO */}
              {modalAberto && (
                <div className={Styles.modalOverlay} style={{ display: "flex" }}>
                  <div className={Styles.modal}>
                    <div className={Styles.modalHeader}>
                      <h2 className={Styles.modalTitle}>Adicionar Novo Produto</h2>
                    </div>
                    <form onSubmit={adicionarProduto}>
                      <div className={Styles.modalContent}>
                        <div className={Styles.formRow}>
                          <div className={Styles.formGroup}>
                            <label className={Styles.formLabel}>Nome do Produto *</label>
                            <input type="text" name="name" className={Styles.formInput} value={form.name} onChange={handleChange} required />
                          </div>
                          <div className={Styles.formGroup}>
                            <label className={Styles.formLabel}>Código *</label>
                            <input type="text" name="code" className={Styles.formInput} value={form.code} onChange={handleChange} required />
                          </div>
                        </div>
                        <div className={Styles.formGroup}>
                          <label className={Styles.formLabel}>Categoria *</label>
                          <select name="category" className={Styles.formSelect} value={form.category} onChange={handleChange} required>
                            <option value="">Selecione uma categoria</option>
                            <option value="Eletrônicos">Eletrônicos</option>
                            <option value="Periféricos">Periféricos</option>
                            <option value="Móveis">Móveis</option>
                            <option value="Roupas">Roupas</option>
                            <option value="Livros">Livros</option>
                            <option value="Alimentação">Alimentação</option>
                            <option value="Alcoólicos">Alcoólicos</option>
                          </select>
                        </div>
                        <div className={Styles.formRow3}>
                          <div className={Styles.formGroup}>
                            <label className={Styles.formLabel}>Quantidade *</label>
                            <input type="number" name="quantity" className={Styles.formInput} value={form.quantity} onChange={handleChange} min="0" required />
                          </div>
                          <div className={Styles.formGroup}>
                            <label className={Styles.formLabel}>Estoque Mínimo *</label>
                            <input type="number" name="minStock" className={Styles.formInput} value={form.minStock} onChange={handleChange} min="0" required />
                          </div>
                          <div className={Styles.formGroup}>
                            <label className={Styles.formLabel}>Preço (R$) *</label>
                            <input type="number" name="price" className={Styles.formInput} value={form.price} onChange={handleChange} min="0" step="0.01" required />
                          </div>
                        </div>
                        <div className={Styles.formGroup}>
                          <label className={Styles.formLabel}>Descrição</label>
                          <textarea name="description" className={Styles.formTextarea} value={form.description} onChange={handleChange} placeholder="Descrição opcional do produto..." />
                        </div>
                      </div>
                      <div className={Styles.modalFooter}>
                        <button type="button" className={`${Styles.btn} ${Styles.btnSecondary}`} onClick={fecharModal}>Cancelar</button>
                        <button type="submit" className={`${Styles.btn} ${Styles.btnPrimary}`}>Adicionar Produto</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* MODAL - EDITAR PRODUTO */}
              {modalEditAberto && (
                <div className={Styles.modalOverlay} style={{ display: "flex" }}>
                  <div className={Styles.editModal}>
                    <div className={Styles.modalHeader}>
                      <h2 className={Styles.modalTitle}>Editar Produto</h2>
                    </div>
                    <form onSubmit={editarProduto}>
                      <div className={Styles.modalContent}>
                        <div className={Styles.formRow}>
                          <div className={Styles.formGroup}>
                            <label className={Styles.formLabel}>Nome do Produto *</label>
                            <input type="text" name="name" className={Styles.formInput} value={form.name} onChange={handleChange} required />
                          </div>
                          <div className={Styles.formGroup}>
                            <label className={Styles.formLabel}>Código *</label>
                            <input type="text" name="code" className={Styles.formInput} value={form.code} onChange={handleChange} required />
                          </div>
                        </div>
                        <div className={Styles.formGroup}>
                          <label className={Styles.formLabel}>Categoria *</label>
                          <select name="category" className={Styles.formSelect} value={form.category} onChange={handleChange} required>
                            <option value="">Selecione uma categoria</option>
                            <option value="Eletrônicos">Eletrônicos</option>
                            <option value="Periféricos">Periféricos</option>
                            <option value="Móveis">Móveis</option>
                            <option value="Roupas">Roupas</option>
                            <option value="Livros">Livros</option>
                            <option value="Alimentação">Alimentação</option>
                            <option value="Alcoólicos">Alcoólicos</option>
                          </select>
                        </div>
                        <div className={Styles.formRow3}>
                          <div className={Styles.formGroup}>
                            <label className={Styles.formLabel}>Quantidade *</label>
                            <input type="number" name="quantity" className={Styles.formInput} value={form.quantity} onChange={handleChange} min="0" required />
                          </div>
                          <div className={Styles.formGroup}>
                            <label className={Styles.formLabel}>Estoque Mínimo *</label>
                            <input type="number" name="minStock" className={Styles.formInput} value={form.minStock} onChange={handleChange} min="0" required />
                          </div>
                          <div className={Styles.formGroup}>
                            <label className={Styles.formLabel}>Preço (R$) *</label>
                            <input type="number" name="price" className={Styles.formInput} value={form.price} onChange={handleChange} min="0" step="0.01" required />
                          </div>
                        </div>
                        <div className={Styles.formGroup}>
                          <label className={Styles.formLabel}>Descrição</label>
                          <textarea name="description" className={Styles.formTextarea} value={form.description} onChange={handleChange} placeholder="Descrição opcional do produto..." />
                        </div>
                      </div>
                      <div className={Styles.modalFooter}>
                        <button type="button" className={`${Styles.btn} ${Styles.btnSecondary}`} onClick={fecharModalEdit}>Cancelar</button>
                        <button type="submit" className={`${Styles.btn} ${Styles.btnPrimary}`}>Salvar Alterações</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </main>
          </div>
        </>
  );
}
