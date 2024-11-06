// Import Navbar from the components folder
import Navbar from "@/components/Navbar/index";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      {<Navbar />}
      <Component {...pageProps} />
    </div>
  );
}
