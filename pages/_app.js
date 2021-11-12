import Footer from "../components/Footer";
import Headers from "../components/Header";
import { wrapper } from "../redux/store";
import styles from "../styles/Home.module.css";

import "../styles/globals.css";
import { isUserLoggedIn } from "../utils/storageUtils";
import { useEffect, useState } from "react";
import SignIn from "./signIn";

function MyApp({ Component, pageProps }) {
  const [verifiedUser, setVerifiedUser] = useState();

  useEffect(() => {
    if (!isUserLoggedIn()) {
      setVerifiedUser(isUserLoggedIn());
    }
  }, []);

  return (
    <main>
      <Headers verifiedUser={verifiedUser} />
      <div className={styles.container}>
        <Component {...pageProps} />
        {/* {verifiedUser ? <Component {...pageProps} /> : <SignIn />} */}
      </div>
      <Footer />
    </main>
  );
}

export default wrapper.withRedux(MyApp);
