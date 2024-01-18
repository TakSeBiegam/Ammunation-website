import { useCartContainer } from "@/logic/cart";
import styles from "../styles/compontents/Navbar.module.css";
import { useEffect, useState } from "react";
import { ModelTypes } from "@/types/zeus";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const { cart } = useCartContainer();
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const cartFromStorage = JSON.parse(
      localStorage.getItem("Cart") || "[]"
    ) as ModelTypes["Product"][];
    setTotalPrice(
      cartFromStorage.reduce(
        (total, item) => total + item?.price * item?.quantity,
        0
      ) || 0
    );
  }, [cart]);

  const handleShowCart = () => {
    router.push("/shoppingCart");
  };

  const handleLogInRedirect = () => {
    router.push("/logIn");
  };

  return (
    <div>
      <div className={styles.topnav}>
        <img
          src={"/images/icons/7.png"}
          alt={"logo"}
          style={{ width: "30px", height: "auto", borderRadius: "8px" }}
        />
        <div style={{ fontWeight: "bold", fontFamily: "fantasy" }}>
          <Link href="/">STRONA GŁÓWNA</Link>
          <Link href="shop">KATEGORIE</Link>
          <Link href="apply">BLOG</Link>
          <Link href="apply">KONTAKT</Link>
        </div>
        <Image
          className={styles.logIn}
          src="/images/icons/152533.png"
          alt="Log In"
          width={20}
          height={20}
          onClick={() => handleLogInRedirect()}
        />

        <img
          src={"/images/icons/8.png"}
          alt={"logo"}
          style={{
            width: "26px",
            height: "auto",
            borderRadius: "8px",
            marginRight: "0.7vw",
          }}
        />

        <img
          src={"/images/icons/9.png"}
          alt={"logo"}
          style={{
            width: "26px",
            height: "auto",
            borderRadius: "8px",
            marginRight: "0.7vw",
          }}
        />
        <img
          src={"/images/icons/10.png"}
          alt={"logo"}
          style={{
            width: "26px",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </div>
      <div
        style={{
          height: "5px",
          backgroundColor: "white",
          borderRadius: "20px",
          width: "53vw",
          marginLeft: "23vw",
        }}
      ></div>
    </div>
  );
};
