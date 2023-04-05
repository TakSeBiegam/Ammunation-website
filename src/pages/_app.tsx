import { CartProvider } from "@/logic/cart";
import type { AppProps } from "next/app"
import '../styles/globals.css';
import { JWTProvider } from "@/logic/jwt";


const App = ({ Component, pageProps }: AppProps) => {
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