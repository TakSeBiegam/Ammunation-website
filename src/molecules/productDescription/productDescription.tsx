import { ModelTypes } from "@/types/zeus"
import styles from "../../styles/compontents/productDescription.module.css"
import AddToCart from "../addToCart"

export const ProductDescription = ({ item }: { item: ModelTypes["Product"] }) => {

    return (
        <div className={styles.Container}>
            <div style={{ display: "flex" }}>
                <img className={styles.image} src={item.image} alt={item.name} />
                <div style={{ marginLeft: "5%" }}>
                    <h1>{item.name}</h1>
                    <span className={styles.price}>{(item.price / 100).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}</span>
                    <span className={styles.description}>{item.description}</span>
                </div>
            </div>
            <AddToCart item={item} />
        </div >
    )
}