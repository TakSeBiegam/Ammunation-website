
import Image from 'next/image';
import styles from '../styles/compontents/productMiniature.module.css'
import { ModelTypes } from '@/types/zeus';

const ProductMiniature = (item: ModelTypes["Product"]) => {

    return (
        <div>
            <li className={styles.list_item} key={item.id}>
                <Image src={item.image} alt={item.name} className={styles.product_Image} />
                <h3 className={styles.h3}>{item.name}</h3>
                <div style={{ display: "flex" }}>
                    <p className={styles.price}>{(item.price / 100).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}</p>
                </div>
            </li >
        </div>
    )
}

export default ProductMiniature;