import Styles from "./navbar.module.css"
export default function Navbar() {
    return (
        <>
        <header className={Styles.header}>
        <div className={Styles.container}>
            <div className={Styles.headerContent}>
                <div className={Styles.logo}>

                    <a href="/index.html">
                        <img src="/img/logo_caixa.png" alt="" width="60px"/>

                    </a>
                    <span className={Styles.logoText}>Kontroli</span>
                </div>
                <div className={Styles.headerActions}>
                    <div className={Styles.separator}></div>
                    <a href="/index.html"> <button className={ `${Styles.btn} ${Styles.btnGhost}`}>
                            <i className={`${Styles.fas} ${Styles.faSignOutAlt}`}></i>
                            Logout
                        </button></a>
                         <a href="/pages/relatorio/relatorio.html">
                            <button> relatorio</button>
                        </a>
                </div>
            </div>
        </div>
    </header>
        </>
)}