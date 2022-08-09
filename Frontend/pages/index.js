import Head from "next/head";
import { useSelector } from "react-redux";
import HomeProducts from "../components/Homepage/HomeProducts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="">
        <HomeProducts />
      </main>
    </div>
  );
}