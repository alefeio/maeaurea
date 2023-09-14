import styles from "./styles.module.scss";

export function SubscribeButton(props) {
  const link = "https://api.whatsapp.com/send?phone=5522981015939&text=Olá! Estou entrando em contato através do seu site e gostaria de mais informações.";

  return (
    <a href={link} target="_blank" className={styles.subscribeButton}>
      {props.children}
    </a>
  );
}
