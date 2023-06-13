import styles from './../styles/shop.module.css'
import { Navbar } from "@/molecules/navbar";
import { useRouter } from "next/router";
import Footer from '@/molecules/footer';
import FilterableProductList from '@/molecules/sidebarShop';
import { ModelTypes } from '@/types/zeus';
import { useBackend } from "@/graphqlRequest/client";
import { useEffect, useState } from "react";

import Image from 'next/image';
export const items: string[]= [
"1",
 "2",
"3",
 "4",
"5",
"6",
];

export default function Shop() {
	const { findProduct } = useBackend();
const [products, setProducts] = useState<ModelTypes["Product"][]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productPromises = await Promise.all(
        items.map(async (p) => {
          const response = await findProduct(p);
          return response.findProduct; // Extract the product from the response
        })
      );
      setProducts(productPromises);
    };

    getProducts();
  }, [findProduct]);
    return (
        <>
            <main className={styles.main}>
                <Navbar />
                <Image src="/images/Sponsors/banner.png" width={300} height={200} style={{ marginTop: "2%", display: "block", marginLeft: "auto", marginRight: "auto", width: "55%" }}  alt="Sponsor Banner" />
                <div style={{ width: "80%" }}>
                    <FilterableProductList products={products} />
                </div>
                <Footer />
            </main>

        </>
    )
}
