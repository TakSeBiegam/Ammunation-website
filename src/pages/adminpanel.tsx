import Footer from '@/molecules/footer'
import { Navbar } from '@/molecules/navbar'
import Head from 'next/head'
import styles from "../styles/index.module.css"
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export default function Home() {
    const data = [{
        name: "Pistols",
        uv: 3,
        pv: 3,
    },
    {
        name: "Rifles",
        uv: 1,
        pv: 1
    },
    {
        name: "Throwing weapons",
        uv: 0,
        pv: 0
    },
    {
        name: "Healing items",
        uv: 7,
        pv: 7
    },
    {
        name: "Survival items",
        uv: 2,
        pv: 2,
    },
    {
        name: "Drugs",
        uv: 24,
        pv: 24,
    }];
    return (
        <>
            <Head>
                <title>Ammu Nation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                <span style={{ marginLeft: "15%" }}>
                    Najczesciej Kupowane:
                </span>
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </main>
            <Footer />
        </>
    )
}
