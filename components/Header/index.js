import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import logo from "/public/static/images/logo.png";
import styles from "./Header.module.scss";
import cartLogo from "/public/static/images/cart.svg";
import { productFilter } from "../../redux/actions/productsAction";
import { openCloseCartAction } from "../../redux/actions/cartAction";

export default function Headers({ verifiedUser }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isCartOpen, apiData } = useSelector((state) => state?.cart);

  const navHandler = () => {
    dispatch(productFilter(null));
    dispatch(openCloseCartAction(false));
  };

  const cartHandler = () => {
    dispatch(openCloseCartAction(!isCartOpen));
  };

  const closeAddToCartModuleHandler = () => {
    dispatch(openCloseCartAction(false));
  };

  return (
    <header className={styles.websiteHeader}>
      <div className={styles.leftPortion}>
        <div className={styles.websiteLogo}>
          <Image
            src={logo}
            alt="sabka-bazar"
            onClick={() => router.replace("/")}
          />
        </div>
        <nav>
          <li onClick={closeAddToCartModuleHandler}>
            <Link href="/home">Home</Link>
          </li>
          <li onClick={navHandler}>
            <Link href="/products">Products</Link>
          </li>
        </nav>
      </div>
      <div
        className={styles.rightPortion}
        style={{ flexDirection: verifiedUser ? "row" : "column" }}
      >
        {!verifiedUser && (
          <div className={styles.authNavigation}>
            <Link href="/signIn">SignIn</Link>
            <Link href="/signUp">Register</Link>
          </div>
        )}
        <div className={styles.cart} onClick={cartHandler}>
          <Image src={cartLogo} alt="shopping-cart" />
          <p>{apiData?.length ? apiData?.length : 0} items</p>
        </div>
      </div>
    </header>
  );
}
