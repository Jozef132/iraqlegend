import localfont from "next/font/local";

const amiri = localfont({
  src: [
    {
      path: "../public/font/font.ttf",
      weight: "700",
    },
  ],
  variable: "--font-amiri",
});

import Nav from "../components/Nav";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-background-500  text-white ${amiri.variable} font-amiri relative`}
    >
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
