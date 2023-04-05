import { ModelTypes } from '@/types/zeus';
import styles from './../styles/productContainer.module.css'

export const shopProduct = (item: ModelTypes["Product"], routerChange: (path: string) => void) => {
  return (
    <li className={styles.list_item} key={item.id}>
      <img className={styles.product_Image} src={item.image} alt={item.name} />
      <h3 className={styles.h3}>{item.name}</h3>
      <p className={styles.price}>{(item.price / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</p>
      <button className={styles.buyButton} onClick={() => routerChange(`/product?id=${item.id}`)}>Buy Now</button>

    </li >
  );
};
