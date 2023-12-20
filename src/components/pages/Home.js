import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkBottom from "../layout/LinkBottom";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Cost</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkBottom to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Cost" />
    </section>
  );
}

export default Home;
