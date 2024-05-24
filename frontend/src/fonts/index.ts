import {
  Open_Sans,
  Montserrat,
  Radio_Canada,
  Poppins,
  Nunito,
  Manrope,
  Work_Sans,
} from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const radioCanada = Radio_Canada({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-radio-canada",
});

export {
  radioCanada,
  nunito,
  openSans,
  workSans,
  manrope,
  montserrat,
  poppins,
};
