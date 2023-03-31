import { type AppType } from "next/dist/shared/lib/utils";
import { Space_Grotesk } from "next/font/google";
import "~/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${spaceGrotesk.variable} bg-_black font-sans text-white`}>
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
