// Import Navbar from the components folder
<<<<<<< HEAD
import Navbar from "@/components/Navbar/index";
=======
import Navbar from "@/components/Navbar";
>>>>>>> upstream/part4
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
<<<<<<< HEAD
      {<Navbar />}
=======
      <Navbar />
>>>>>>> upstream/part4
      <Component {...pageProps} />
    </div>
  );
}
