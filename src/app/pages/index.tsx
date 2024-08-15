import React from "react";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../../public/favicon.png" />
      </Head>
      <main>
        <h1>
          Simple Next.js demo! See <Link href="/cars">Cars</Link>
        </h1>
      </main>
    </div>
  );
};

export default Home;
