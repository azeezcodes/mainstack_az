import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./component/Navbar";
import Sideicon from "./component/Sideicon";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Mainstack Task",
   description: "Mainstack Task",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={nunito.className}>
            <div className="pl-10 pr-5 ">
               <div className="mt-8 w-full bg-white">
                  <Navbar />
               </div>
               <div className="fixed top-1/3 ">
                  <Sideicon />
               </div>
               {children}
            </div>
         </body>
      </html>
   );
}
