import { useCartContainer } from "@/logic/cart";
import { CartElements } from "@/molecules/CartElement";
import Footer from "@/molecules/footer";
import { Navbar } from "@/molecules/navbar";
import { useEffect, useState } from "react";

const ShoppingCart = () => {
    const Cart = useCartContainer();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (!Cart.cart[0] || !Cart.cart) {
            setTotalPrice(0);
        } else {
            setTotalPrice((Cart.cart.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)))
        }

    }, [Cart])

    return (
        <div>
            <Navbar />
            <div style={{ width: "60%", margin: "auto" }}>
                <ul >
                    {Cart.cart.map((item) => item && (
                        <li style={{ listStyle: "none" }} key={item.id}>
                            {CartElements(item)}
                        </li>))
                    }
                </ul>
            </div>
            <div style={{ width: "60%", margin: "auto", display: "flex" }}>
                <br />
                <button style={{ marginLeft: "auto", backgroundColor: "yellowgreen" }}>Order Now!</button>
                <p style={{ marginLeft: "auto" }}>{(totalPrice / 100).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}</p>
            </div>
            <Footer />
        </div >
    )
}

export default ShoppingCart;