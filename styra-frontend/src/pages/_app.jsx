import Head from "next/head";
import store from "@/redux/store";
import { Provider } from "react-redux";
import ReactModal from "react-modal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import '../styles/index.scss';
import { GoogleOAuthProvider } from "@react-oauth/google";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

if (typeof window !== "undefined") {
  ReactModal.setAppElement("body");
}

// stripePromise
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const NEXT_PUBLIC_GOOGLE_CLIENT_ID = '903081644488-n60j77h2s46n2anpau0p5krrjrpi8aae.apps.googleusercontent.com'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <GoogleOAuthProvider clientId={NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <Elements stripe={stripePromise}>
            <div id="root">
              <Component {...pageProps} />
            </div>
          </Elements>
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}
