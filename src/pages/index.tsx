import Footer from "@/molecules/footer";
import { Navbar } from "@/molecules/navbar";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Carousel from "@/molecules/karuzela";
import Image from "next/image";

const FiveBoxesCentered: React.FC = () => {
  const items = [
    { text: "Róże", image: "/images/categories/1.png" },
    { text: "Lilie", image: "/images/categories/2.png" },
    { text: "Tulipany", image: "/images/categories/3.png" },
    { text: "Stokrotki", image: "/images/categories/4.png" },
    { text: "Orchidee", image: "/images/categories/5.png" },
    { text: "Słoneczniki", image: "/images/categories/6.png" },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "75%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "white",
              border: "1px solid #ccc",
              margin: "0 10px",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "fantasy",
            }}
          >
            <span
              style={{
                marginTop: "20%",
                marginBottom: "5px",
                fontWeight: "bold",
                fontSize: "1.3rem",
              }}
            >
              {item.text}
            </span>
            {/* Content for each box */}
            <img
              src={item.image}
              alt={item.text}
              style={{ width: "60%", height: "auto", borderRadius: "8px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const SearchingBelow: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "75%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "15vw",
            height: "5vh",
            backgroundColor: "white",
            border: "1px solid #ccc",
            margin: "0 10px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              paddingRight: "4vw",
              marginTop: "1.4vh",
              fontSize: "1.3rem",
              fontFamily: "fantasy",
              fontWeight: "bold",
            }}
          >
            Special Offerts
          </p>
        </div>
        <div
          style={{
            width: "40vw",
            height: "5vh",
            backgroundColor: "white",
            border: "1px solid #ccc",
            margin: "0 10px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              paddingRight: "30vw",
              marginTop: "1.4vh",
              fontSize: "1.3rem",
              fontFamily: "fantasy",
              fontWeight: "bold",
            }}
          >
            Trendings
          </p>
        </div>
      </div>
    </div>
  );
};

const TrendingBoxes: React.FC = () => {
  const items = [
    { text: "Kwiaty ślubne", image: "/images/trendings/weeding.png" },
    { text: "Dostarcz Kwiaty", image: "/images/trendings/podarunek.png" },
    { text: "Dekorowanie", image: "/images/trendings/dekoracje.png" },
    { text: "Kwiaty ślubne", image: "/images/trendings/weeding.png" },
    { text: "Dostarcz Kwiaty", image: "/images/trendings/podarunek.png" },
    { text: "Dekorowanie", image: "/images/trendings/dekoracje.png" },
  ];

  // Group items in sets of three
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "19%",
      }}
    >
      {groupedItems.map((group, groupIndex) => (
        <div key={groupIndex} style={{ display: "flex", marginBottom: "6%" }}>
          {group.map((item, index) => (
            <div
              key={index}
              style={{
                marginLeft: index > 0 ? "1.5%" : "0", // Add margin only for items after the first one
                width: "300px",
                height: "200px",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "16px",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "fantasy",
              }}
            >
              <img
                src={item.image}
                style={{
                  objectFit: "cover",
                  maxWidth: "100%",
                  width: "100%",
                  maxHeight: "70%",
                  height: "auto",
                  borderRadius: "8px",
                  paddingBottom: "10px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  paddingRight: "5%",
                  marginBottom: "6%",
                }}
              >
                <span
                  style={{
                    width: "100%",
                    textAlign: "left",
                    fontWeight: "bold",
                    marginLeft: "3%",
                    margin: "0 40px",
                  }}
                >
                  {item.text}
                </span>
                <div
                  style={{
                    backgroundColor: "#fa9c1b",
                    width: "200px",
                    height: "25px",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontFamily: "Segoe UI" }}>Sprawdź</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const SearchingBelowPartTwo: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "17%",
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "15vw",
            height: "30vh",
            backgroundColor: "white",
            border: "1px solid #ccc",
            margin: "0 10px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default function Home() {
  const images = [
    "/images/Sponsors/b3043c_49abee31eb5d4b7fbeded024ad2f1a8f.webp",
    "/images/Sponsors/Bevolo-Logo-.-VECTOR-file-2.png",
    "/images/Sponsors/Logo-Naturella.png",
    "/images/Sponsors/Screen_Shot_2019-04-07_at_8.30.29_PM_1024x1024.webp",
    "/images/Sponsors/calflowerslogo-b-alt_.jpg",
    "/images/Sponsors/Image-empty-state.webp",
  ];

  return (
    <>
      <Head>
        <title>Ammu Nation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{ marginTop: "2%" }}>
        <div style={{ display: "flex", marginTop: 120 }}>
          <div
            style={{
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginLeft: "23vw",
                marginTop: "15vh",
                width: "25vw",
                fontFamily: "fantasy",
              }}
            >
              <h1 className={styles.h1}>
                Znajdź idealne kwiaty na każdą okazje
              </h1>
              <p className={styles.span}>
                FlowerNation to firma kwiatowa o bogatym doświadczeniu, która
                zrodziła się z pasji do kwiatów.
              </p>
            </div>
          </div>
          <Image
            alt=""
            className={styles.Image}
            src="/images/icons/budynek.jpg"
            width={600}
            height={600}
          ></Image>
        </div>

        <p
          style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}
        >
          Kategorie
        </p>
        <div>
          <FiveBoxesCentered />
        </div>
        <div style={{ marginTop: "15vh" }}>
          <SearchingBelow />
        </div>
        <div
          style={{
            marginTop: "3vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "15vw",
              height: "30vh",
              marginLeft: "17.5%",
              marginBottom: "3.5%",
              backgroundColor: "white",
              border: "1px solid #ccc",
              margin: "5px 40px",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={"/images/sale/11.png"}
              alt={"Przecena"}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </div>
          <TrendingBoxes />
        </div>
      </main>
      <Footer />
    </>
  );
}
