"use client";

import AccountDetail from "./component/AccountDetail";
import Banner from "./component/Banner";
import Chart from "./component/Chart";
import Navbar from "./component/Navbar";
import Sideicon from "./component/Sideicon";
import { useTransaction } from "./query/useTransaction";

export default function Home() {
   useTransaction();
   return (
      <main className="px-4 py-4 ">
         
         <section className="px-20 mt-20">
            <div className="mt-4 flex justify-between">
               <Chart />
               <AccountDetail />
            </div>
            <div className="mt-10">
               <Banner />
            </div>
         </section>
      </main>
   );
}
