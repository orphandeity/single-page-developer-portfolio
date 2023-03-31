import { type AppType } from "next/dist/shared/lib/utils";
import { Space_Grotesk } from "next/font/google";
import "~/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${spaceGrotesk.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
