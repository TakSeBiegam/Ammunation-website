import styles from './../styles/shop.module.css'
import { Navbar } from "@/molecules/navbar";
import { useRouter } from "next/router";
import Footer from '@/molecules/footer';
import FilterableProductList from '@/molecules/sidebarShop';
import { ModelTypes } from '@/types/zeus';
import Image from 'next/image';
export const items: ModelTypes["Product"][] = [
    {
        id: "1",
        name: 'Glock 44 kal.22LR - Vismag',
        description: 'Glock 44 to kompaktowy pistolet bocznego zapłonu, który dobrze leży w niemal każdej dłoni, używając wymiennych nakładek, które są dołączone do zestawu',
        price: 999,
        image: '/images/guns/120px-Pistol-icon.webp',
        quantity: 1,
        bigImage: "",
        category: "pistol"
    },
    {
        id: "2",
        name: 'H&K MP-5',
        description: ' niemiecki pistolet maszynowy produkowany przez firmę Heckler und Koch GmbH z Oberndorf am Neckar',
        price: 32000,
        image: '/images/guns/Special-carbine-icon.webp',
        quantity: 1,
        bigImage: "",
        category: "rifle"

    },
    {
        id: "3",
        name: 'HK USP',
        description: 'USP jest dostępny w dziewięciu konfiguracjach rodzajów systemu spustowego i trzech kalibrach: 9x19mm, .40 S&W i .45 ACP',
        price: 2999,
        image: '/images/guns/Combat-pistol-icon.webp',
        quantity: 1,
        bigImage: "",
        category: "pistol"
    },
    {
        id: "4",
        name: 'PM–84 P Glauberyt',
        description: 'Pierwszy seryjny, polski PM dostosowany do amunicji 9x19mm. Broń pozbawiona możliwości strzelania ogniem ciągłym. W zestawie z dwoma długimi magazynkami',
        price: 298933,
        image: '/images/guns/Special-carbine-icon.webp',
        quantity: 1,
        bigImage: "",
        category: "rifle"
    },
    {
        id: "5",
        name: 'HK 417',
        description: 'Niemieckiego producenta broni palnej, firmy Heckler & Koch. Z tego powodu na korpusie, kolbie oraz magazynku znajdują się licencjonowane oznaczenia palnego odpowiednika - doskonała propozycja dla wszystkich którzy cenią maksymalną dbałość o detale i odwzorowanie palnego odpowiednika. ',
        price: 2999,
        image: '/images/guns/Mg-icon.webp',
        quantity: 1,
        bigImage: "",
        category: "rifle"
    },
    {
        id: "6",
        name: 'SAKO TRG 21',
        description: 'Sako TRG 22 jest karabinem snajperskim. Znany ze swojej wyjątkowej celności, może być używany na zawodach CISM czy UIT',
        price: 2999,
        image: '/images/guns/Heavy-sniper-mk2-icon.png',
        quantity: 1,
        bigImage: "",
        category: "sniper"
    },
];

export default function () {
    return (
        <>
            <main className={styles.main}>
                <Navbar />
                <Image style={{ marginTop: "2%", display: "block", marginLeft: "auto", marginRight: "auto", width: "55%" }} src="/images/Sponsors/banner.png" alt="" />
                <div style={{ width: "80%" }}>
                    <FilterableProductList products={items} />
                </div>
                <Footer />
            </main>

        </>
    )
}