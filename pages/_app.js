import Footer from "../components/Footer";
import Headers from "../components/Header";
import { wrapper } from "../redux/store";
import styles from "../styles/Home.module.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Headers />
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  );
}

export default wrapper.withRedux(MyApp);
