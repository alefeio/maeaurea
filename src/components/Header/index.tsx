import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2>Mãe Aurea</h2>
        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#duvidas">
            Dúvidas
          </a>
          <a href="#oferta-exclusiva" className={styles.active}>
            OFERTA EXCLUSIVA
          </a>
        </nav>
      </div>
    </header>
  );
}
