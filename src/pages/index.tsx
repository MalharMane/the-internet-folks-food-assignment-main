import Head from "next/head";
import LandingPage from "../components/LandingPage";
import About from "../components/About";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Internet Folks assignment by Saurabh Sen :)</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <LandingPage />
        <About />
        <Articles />
        <Footer />
      </main>
    </>
  );
}
