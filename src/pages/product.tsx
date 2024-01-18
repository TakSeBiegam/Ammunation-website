import { useBackend } from "@/graphqlRequest/client";
import Footer from "@/molecules/footer";
import { Navbar } from "@/molecules/navbar";
import { ProductDescription } from "@/molecules/productDescription/productDescription";
import { ModelTypes } from "@/types/zeus";
import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";
import { items } from "./shop";

function Product() {
  const router = useRouter();
  const productId = router.query.id || "";
  const { findProduct } = useBackend();
  const [product, setProduct] = useState<ModelTypes["Product"]>({
    id: "",
    name: "",
    image: "",
    description: "",
    price: 0,
    quantity: 0,
  });
  useEffect(() => {
    if (productId) {
      findProduct(productId.toString())
        .then((response) => setProduct(response.findProduct))
        .catch((error) => console.error(error));
      console.log(product?.name);
      //   setProduct(items.filter((item) => item.id === productId)[0]);
    }
  }, [productId]);

  return (
    <>
      <Navbar />
      <main>
        <ProductDescription item={product} />;
      </main>
      <Footer />
    </>
  );
}

export default withRouter(Product);
