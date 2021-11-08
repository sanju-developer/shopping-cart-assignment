import Footer from "../components/Footer";
import Headers from "../components/Header";
import { wrapper } from "../redux/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Headers />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default wrapper.withRedux(MyApp);
