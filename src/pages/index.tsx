import Footer from '@/molecules/footer'
import { Navbar } from '@/molecules/navbar'
import Head from 'next/head'
import styles from "../styles/index.module.css"
import Carousel from '@/molecules/karuzela'

export default function Home() {
  const images = [

    "images/Sponsors/61d703709f78657796a682fa00716ac4.png",
    "images/Sponsors/5409.png",
    "images/Sponsors/Blaine-county-talk-radio-official.webp",
    "images/Sponsors/LSPD.webp",
    "images/Sponsors/PiÃ wasser-GTAIV-Logo.webp",
    "images/Sponsors/RedwoodCigarettes-GTAIV-Logo.webp",
  ]

  return (
    <>
      <Head>
        <title>Ammu Nation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{ marginTop: "2%" }}>
        <div style={{ display: "flex" }}>
          <img className={styles.img} src="/images/main/obraz_2021-10-13_161401.webp"></img>
          <div style={{ paddingLeft: 50, marginRight: "10%", alignItems: "center" }}>
            <h1 className={styles.h1}>GUNS FOR EVERY HAND</h1>
            <p className={styles.span}>AmmuNation to firma o bogatym doświadczeniu, która zrodziła się z pasji do strzelnictwa. Jej historia sięga daleko wstecz. W trakcie swoich lat działalności nieustannie wzbogacaliśmy i poprawialiśmy naszą ofertę o nowe produkty i usługi, stale podnosząc przy tym ich jakość.</p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "3%", marginLeft: "10%" }}>
          <div style={{ marginRight: "7%" }}>
            <h2 className={styles.find} >Find Us!</h2>
            <p className={styles.span}>Jesteśmy solidnym i profesjonalnym partnerem w zakresie strzelectwa. W naszych sklepach posiadamy wiele produktów wysokiej klasy od renomowanych producentów, poczynając od broni i optyki, przez amunicję oraz części, aż po ubrania oraz sprzęt militarny

              W naszych specjalnościach mogą Państwo znaleźć również szkolenia dla wszystkich miłośników broni, dysponujemy także profesjonalną strzelnicą.

              Nasza firma posiada wysoko wykwalifikowany personel oraz certyfikaty uprawniające do prowadzenia działalności i potwierdzające wysoką jakość usług oraz produktów z naszej oferty. Możemy  również poszczycić się stale rosnącą liczbą stałych Klientów. Obsługujemy m.in. myśliwych, przedstawicieli służb mundurowych, pracowników ochrony, strzelców sportowych.</p>
          </div>
          <img className={styles.locationImg} src="/images/main/obraz_2020-09-28_204517.webp"></img>
        </div>
        <Carousel images={images} />
      </main >
      <Footer />
    </>
  )
}
