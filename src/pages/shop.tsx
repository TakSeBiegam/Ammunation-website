import styles from "./../styles/shop.module.css";
import { Navbar } from "@/molecules/navbar";
import { useRouter } from "next/router";
import Footer from "@/molecules/footer";
import FilterableProductList from "@/molecules/sidebarShop";
import { ModelTypes } from "@/types/zeus";
import { useBackend } from "@/graphqlRequest/client";
import { useEffect, useState } from "react";

import Image from "next/image";
export const items: string[] = ["1", "2", "3", "4", "5", "6"];

export default function Shop() {
  const products: ModelTypes["Product"][] = [
    {
      description: "Bukiet Róż",
      id: "1",
      image: "/images/flowers/roses.png",
      name: "Bukiet Róż",
      price: 68.9,
      quantity: 1,
    },
    {
      description: "Bukiet Irysów",
      id: "1",
      image: "/images/flowers/roses.png",
      name: "Bukiet Róż",
      price: 90.9,
      quantity: 1,
    },
  ];
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <Image
          src="/images/icons/banner.png"
          width={1000}
          height={300}
          style={{
            marginTop: "2%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          alt="Sponsor Banner"
        />
        <div style={{ width: "80%" }}>
          <FilterableProductList products={products} />
        </div>
        <Footer />
      </main>
    </>
  );
}
