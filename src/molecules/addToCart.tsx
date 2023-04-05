import { useCartContainer } from "@/logic/cart";
import styles from "../styles/compontents/addToCart.module.css"
import { ModelTypes } from '@/types/zeus';
import { useState } from "react";
interface AddToCartProps {
    item: ModelTypes["Product"];
}

const AddToCart: React.FC<AddToCartProps> = ({ item }) => {
    const { cart, saveCart } = useCartContainer();
    const [quantity, setQuantity] = useState(0);
    const handleSaveProduct = (item: ModelTypes["Product"]) => {
        if (item.quantity !== 0) {
            saveCart([{ ...item, quantity: quantity }]);
        }
    }

    return (
        <div style={{ display: "Flex" }}>
            <div style={{ marginRight: "-48%", paddingLeft: "45%" }}>
                <button onClick={() => {
                    if (quantity <= 0) {
                        setQuantity(0)
                    } else {
                        setQuantity(quantity - 1)
                    }
                }
                }>-</button>
                <input type="text" value={quantity} style={{ maxWidth: "100px" }} />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className={styles.buyButton} onClick={() => handleSaveProduct(item)}>Buy Now</button>
        </div>
    );
};
export default AddToCart;