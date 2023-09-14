import styles from "./styles.module.scss";

export function Rodape() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>&copy; copyright {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
