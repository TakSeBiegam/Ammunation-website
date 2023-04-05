import { CartProvider } from "@/logic/cart";
import type { AppProps } from "next/app"
import '../styles/globals.css';
import { JWTProvider } from "@/logic/jwt";
import { useEffect } from "react";

const repoName = "Ammunation-website";

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        if (window.location.hostname === "taksebiegam.github.io") {
            const images = document.getElementsByTagName("img");
            for (let i = 0; i < images.length; i++) {
                const imgSrc = images[i].getAttribute("src");
                if (imgSrc && imgSrc.startsWith("/images/")) {
                    images[i].setAttribute("src", `/${repoName}${imgSrc}`);
                }
            }
        }
    }, []);
    return (
        <>
            <JWTProvider>
                <CartProvider>
                    <Component {...pageProps} />
                </CartProvider>
            </JWTProvider>
        </>
    )
}

export default App;