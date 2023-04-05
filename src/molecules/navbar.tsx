import { useCartContainer } from "@/logic/cart";
import styles from '../styles/compontents/Navbar.module.css';
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
        const cartFromStorage = JSON.parse(localStorage.getItem("Cart") || "[]") as ModelTypes["Product"][];
        setTotalPrice(cartFromStorage.reduce((total, item) => total + (item?.price * item?.quantity), 0) || 0);
    }, [cart])

    const handleShowCart = () => {
        router.push('/shoppingCart');
    }

    const handleLogInRedirect = () => {
        router.push('/logIn')
    }

    return (
        <div>
            <div className={styles.topnav}>
                <Link href="/" >Strona Domowa</Link>
                <Link href="shop">Sklep Online</Link>
                <Link href="apply">Aplikuj</Link>
                <Image className={styles.logIn} src="/images/icons/152533.png" alt="Log In" width={20} height={20} onClick={() => handleLogInRedirect()} />
                <div className={styles.nav_price} onClick={handleShowCart}>
                    <p style={{ marginRight: "5px" }}>🛒</p>
                    <p>{(totalPrice / 100).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}</p>
                </div>
            </div>
        </div>
    );
};