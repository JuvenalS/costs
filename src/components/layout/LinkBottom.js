import { Link } from "react-router-dom";
import styles from "./LinkBottom.module.css";

function LinkBottom({ to, text }) {
  return (
    <Link to={to} className={styles.btn}>
      {text}
    </Link>
  );
}

export default LinkBottom;
