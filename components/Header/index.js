import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import logo from "/public/static/images/logo.png";
import styles from "./Header.module.scss";
import cartLogo from "/public/static/images/cart.svg";
import { isUserLoggedIn } from "../../utils/storageUtils";
import { productFilter } from "../../redux/actions/productsAction";
import { useRouter } from "next/router";

export default function Headers() {
  const dispatch = useDispatch();
  const router = useRouter();
  const navHandler = () => {
    dispatch(productFilter(null));
  };

  return (
    <header className={styles.websiteHeader}>
      <div className={styles.leftPortion}>
        <div className={styles.websiteLogo}>
          <Image
            src={logo}
            name="sabka-bazar"
            onClick={() => router.replace("/")}
          />
        </div>
        <nav>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li onClick={navHandler}>
            <Link href="/products">Products</Link>
          </li>
        </nav>
      </div>
      <div
        className={styles.rightPortion}
        style={{ flexDirection: isUserLoggedIn() ? "row" : "column" }}
      >
        {!isUserLoggedIn() && (
          <div className={styles.authNavigation}>
            <Link href="/signin">SignIn</Link>
            <Link href="/register">Register</Link>
          </div>
        )}
        <div className={styles.cart}>
          <Image src={cartLogo} alt="shopping-cart" />
          <p>0 items</p>
        </div>
      </div>
    </header>
  );
}
