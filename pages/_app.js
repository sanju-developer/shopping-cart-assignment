import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

import Footer from "../components/Footer";
import Headers from "../components/Header";
import { wrapper } from "../redux/store";
import SignIn from "./signIn";
import SignUp from "./signUp";
import { getAccessToken } from "../utils/storageUtils";
import loginAction from "../redux/actions/authAction";
import Cart from "../components/Cart";

import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state?.auth);
  const { isCartOpen } = useSelector((state) => state?.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getAccessToken()) {
      dispatch(loginAction());
    }
    if (!isLoggedIn && !getAccessToken()) {
      router.replace("/");
    }
  }, [isLoggedIn]);

  return (
    <main>
      <Headers verifiedUser={isLoggedIn} />
      <div className={styles.container}>
        <ToastContainer
          position="bottom-right"
          hideProgressBar={true}
          autoClose={4000}
        />
        {isLoggedIn ? (
          <>
            <Component {...pageProps} />
            {isCartOpen && <Cart />}
          </>
        ) : router?.asPath == "/signUp" ? (
          <SignUp />
        ) : (
          <SignIn />
        )}
      </div>
      <Footer />
    </main>
  );
}

export default wrapper.withRedux(MyApp);
