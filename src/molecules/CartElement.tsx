import { ModelTypes } from "@/types/zeus";
import styles from "../styles/cartElement.module.css"
import { useCartContainer } from "@/logic/cart";


export const cartElements = (item: ModelTypes["Product"]) => {
    const { changeItemQuantity } = useCartContainer();
    return (
        <div className={styles.productContainer}>
            <img className={styles.image} src={item.image} alt={item.image}></img>
            <h2 className={styles.title}>{item.name}</h2>

            <div className={styles.buttons}>
                <button onClick={() => changeItemQuantity(item.id, false)}>-</button>
                <input type="number" value={item.quantity} />
                <button onClick={() => changeItemQuantity(item.id, true)} > +</button>
            </div>
            <p className={styles.price}>{(item.price / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })}</p>
        </div >
    )
}