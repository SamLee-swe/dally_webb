import Head from "next/head";
import Navigation from "@/components/navigation/navigation";
import Form from "@/components/contact-us/form";
import Footer from "@/components/footer/footer";
import styled from "styled-components";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dally and Webb</title>
        <meta name="description" content="A lawfrim website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navigation />
        <Component {...pageProps} />
        <Form />
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
