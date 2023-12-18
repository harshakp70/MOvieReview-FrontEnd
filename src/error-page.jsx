import { useRouteError,Link } from "react-router-dom";
import styles from "./errorpage.module.css"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className={styles.home } to="/">Go to Home</Link>
    </div>
  );
}