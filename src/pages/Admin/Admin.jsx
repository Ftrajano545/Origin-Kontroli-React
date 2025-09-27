import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
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


export default function Admin() {
  // ⚠️ Aqui você precisa implementar as funções openModal, fecharModal, etc.
  const openModal = () => {
    console.log("Abrir modal");
  };

  const fecharModal = () => {
    console.log("Fechar modal");
  };

  const adicionaProduto = () => {
    console.log("Adicionar produto");
  };

  const updateProduct = () => {
    console.log("Editar produto");
  };

  return (

    <div className={Styles.app}>
      <main className={Styles.container}>
        {/* ALERTA */}
        <div id="lowStockAlert" className={Styles.alert}>
          <div className={Styles.alertHeader}>
            <FontAwesomeIcon icon={faBell} />
            <span className={Styles.alertTitle}>Alerta de Estoque</span>
          </div>
          <div className={Styles.alertContent} id="alertContent"></div>
          <div className={Styles.alertBadges} id="alertBadges"></div>
        </div>

        {/* STATS */}
        <div className={Styles.statsGrid}>
          <div className={Styles.statCard}>
            <div className={Styles.statCardContent}>
              <div className={Styles.statInfo}>
                <h3>Total de Produtos</h3>
                <div className={Styles.value} id="totalProducts"></div>
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
                <div className={Styles.value} id="totalItems"></div>
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
                <div className={Styles.value} id="lowStockCount">
                  0
                </div>
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
                <div className={Styles.value} id="totalValue"></div>
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
            <FontAwesomeIcon
              // icon={faSearch}
              className={Styles.searchIcon}
            />
            <input
              type="text"
              id="searchInput"
              className={Styles.searchInput}
              placeholder="Buscar por nome ou código..."
            />
          </div>

          <div className={Styles.selectContainer}>
            <select id="categoryFilter" className={Styles.select}>
              <option value="all">Todas categorias</option>
            </select>
          </div>

          <button className={`${Styles.btn} ${Styles.btnSecondary}`}>
            <FontAwesomeIcon icon={faChartBar} />
            Relatórios
          </button>

          <button
            id="addProductBtn"
            className={`${Styles.btn} ${Styles.btnPrimary}`}
            onClick={openModal}
          >
            <FontAwesomeIcon icon={faPlus} />
            Adicionar Produto
          </button>
        </div>

        {/* TABLE */}
        <div id="productsContainer">
          <div className={Styles.tableContainer}>
            <table className={Styles.table}>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Código</th>
                  <th>Categoria</th>
                  <th>Quantidade</th>
                  <th>Est. Mín.</th>
                  <th id="precoProduto">Preço</th>
                  <th>Status</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody id="productsTableBody"></tbody>
            </table>
          </div>
        </div>

        {/* EMPTY STATE */}
        <div id="emptyState" className={Styles.emptyState}>
          <div className={Styles.emptyStateIcon}>
            <FontAwesomeIcon icon={faBoxOpen} />
          </div>
          <h3 className={Styles.emptyStateTitle}>Nenhum produto encontrado</h3>
          <p className={Styles.emptyStateDescription}>
            Comece adicionando produtos ao seu estoque
          </p>
        </div>
      </main>

      {/* MODAL - ADICIONAR PRODUTO */}
      <div id="productModal" className={Styles.modalOverlay}>
        <div className={Styles.modal}>
          <div className={Styles.modalHeader}>
            <h2 className={Styles.modalTitle} id="modalTitle">
              Adicionar Novo Produto
            </h2>
          </div>

          <div id="productForm">
            <div className={Styles.modalContent}>
              <div className={Styles.formRow}>
                <div className={Styles.formGroup}>
                  <label htmlFor="productName" className={Styles.formLabel}>
                    Nome do Produto *
                  </label>
                  <input
                    type="text"
                    id="productName"
                    className={Styles.formInput}
                    placeholder="Ex: Notebook Dell"
                    required
                  />
                </div>

                <div className={Styles.formGroup}>
                  <label htmlFor="productCode" className={Styles.formLabel}>
                    Código *
                  </label>
                  <input
                    type="text"
                    id="productCode"
                    className={Styles.formInput}
                    placeholder="Ex: NB001"
                    required
                  />
                </div>
              </div>

              <div className={Styles.formGroup}>
                <label
                  htmlFor="productCategory"
                  className={Styles.formLabel}
                >
                  Categoria *
                </label>
                <select
                  id="productCategory"
                  className={Styles.formSelect}
                  required
                >
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
                  <label
                    htmlFor="productQuantity"
                    className={Styles.formLabel}
                  >
                    Quantidade *
                  </label>
                  <input
                    type="number"
                    id="productQuantity"
                    className={Styles.formInput}
                    min="0"
                    required
                  />
                </div>

                <div className={Styles.formGroup}>
                  <label
                    htmlFor="productMinStock"
                    className={Styles.formLabel}
                  >
                    Estoque Mínimo *
                  </label>
                  <input
                    type="number"
                    id="productMinStock"
                    className={Styles.formInput}
                    min="0"
                    required
                  />
                </div>
                

                <div className={Styles.formGroup}>
                  <label
                    htmlFor="productPrice"
                    className={Styles.formLabel}
                  >
                    Preço (R$) *
                  </label>
                  <input
                    type="number"
                    id="productPrice"
                    className={Styles.formInput}
                    step="0.01"
                    min="0"
                    required
                  />
                </div>
              </div>

              <div className={Styles.formGroup}>
                <label
                  htmlFor="productDescription"
                  className={Styles.formLabel}
                >
                  Descrição
                </label>
                <textarea
                  id="productDescription"
                  className={Styles.formTextarea}
                  placeholder="Descrição opcional do produto..."
                ></textarea>
              </div>
            </div>

            <div className={Styles.modalFooter}>
              <button
                type="button"
                id="cancelBtn"
                className={`${Styles.btn} ${Styles.btnSecondary}`}
                onClick={fecharModal}
              >
                Cancelar
              </button>
              <button
                type="submit"
                id="saveBtn"
                className={`${Styles.btn} ${Styles.btnPrimary}`}
                onClick={adicionaProduto}
              >
                Adicionar Produto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL - EDITAR PRODUTO */}
      <div id="productEditModal" className={Styles.modalOverlay}>
        <div className={Styles.editModal}>
          <div className={Styles.modalHeader}>
            <h2 className={Styles.modalTitle} id="modalTitle">
              Editar Produto
            </h2>
          </div>
          <div id="productForm">
            <div className={Styles.modalContent}>
              {/* inputs iguais aos do modal de adicionar */}
            </div>

            <div className={Styles.modalFooter}>
              <button
                type="button"
                id="cancelBtn"
                className={`${Styles.btn} ${Styles.btnSecondary}`}
                onClick={fecharModal}
              >
                Cancelar
              </button>
              <button
                type="submit"
                id="saveBtn"
                className={`${Styles.btn} ${Styles.btnPrimary}`}
                onClick={updateProduct}
              >
                Editar Produto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
