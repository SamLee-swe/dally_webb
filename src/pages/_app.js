import Head from "next/head";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";
import styled from "styled-components";
import "../styles/globals.css";
import ContactInfos from "@/components/contact-us/contactInfo";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }) {
  const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <Head>
        <title>Dally and Webb</title>
        <meta name="description" content="A lawfrim website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navigation />
        <Component {...pageProps} />
        <ContactInfos />
        <Footer />
      </Container>
    </GoogleReCaptchaProvider>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
