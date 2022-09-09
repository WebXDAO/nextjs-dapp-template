import "../styles/globals.css";
import "../styles/tailwind.css";
import GlobalLayout from "../components/layouts/GlobalLayout";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default MyApp;
