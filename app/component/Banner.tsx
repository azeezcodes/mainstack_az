"use client";
import React, { useState, useEffect } from "react";
import { Payment, useTransaction } from "../query/useTransaction";
import {
   ChevronDown,
   MoveDownLeft,
   MoveUpRight,
   ArrowDownToLine,
} from "lucide-react";
import { formatDate } from "../utils/formatDate";
import SlideIn from "./SlideModal";

const Banner = () => {
   const { data: transactions, error, isLoading } = useTransaction();
    const [showShareModal, setShowShareModal] = useState(false);
   const [filteredTransactions, setFilteredTransactions] = useState<Payment[]>(
      []
   );

   useEffect(() => {
      if (transactions) {
         setFilteredTransactions(transactions);
      }
   }, [transactions]);

   const filterByToday = () => {
      const today = new Date().toISOString().split("T")[0];
      const filtered = transactions?.filter(
         (transaction) => transaction.date === today
      );
      setFilteredTransactions(filtered || []);
   };

      const [startDate, setStartDate] = useState("");
      const [endDate, setEndDate] = useState("");

      const filterByLast7Days = () => {
         const last7Days = new Date();
         last7Days.setDate(last7Days.getDate() - 7);
          const formattedLast7Days = last7Days.toISOString().split("T")[0];

         const filtered = transactions?.filter(
            (transaction) => transaction.date >= formattedLast7Days
         );
         setFilteredTransactions(filtered || []);
      };

      const filterByThisMonth = () => {
         const today = new Date();
         const firstDayOfMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            1
         );
         const formattedFirstDayOfMonth = firstDayOfMonth
            .toISOString()
            .split("T")[0];
         const filtered = transactions?.filter(
            (transaction) => transaction.date >= formattedFirstDayOfMonth
         );
         setFilteredTransactions(filtered || []);
      };

      const filterByLast3Months = () => {
         const today = new Date();
         const firstDayOfLast3Months = new Date(
            today.getFullYear(),
            today.getMonth() - 3,
            1
         );
         const formattedFirstDayOfLast3Months = firstDayOfLast3Months
            .toISOString()
            .split("T")[0];
         const filtered = transactions?.filter(
            (transaction) => transaction.date >= formattedFirstDayOfLast3Months
         );
         setFilteredTransactions(filtered || []);
      };

      const filterByDateRange = () => {
         if (!startDate || !endDate) {
            alert("Please provide both start and end dates for the range.");
            return;
         }

         const filtered = transactions?.filter(
            (transaction) =>
               transaction.date >= startDate && transaction.date <= endDate
         );
         setFilteredTransactions(filtered || []);
      };

   return (
      <div className="mt-14">
         <SlideIn
            showModal={showShareModal}
            onCloseDialog={() => setShowShareModal(!showShareModal)}
         />
         <div className="flex justify-between mb-3">
            <div className="grid">
               <p className="font-bold text-base">
                  {filteredTransactions.length} Transactions
               </p>
               <p className="text-[#56616B] text-sm font-normal">
                  Your transactions for the last 7 days
               </p>
            </div>
            <div className="flex gap-4">
               <button
                  className="font-bold text-sm flex items-center gap-2 bg-slate-200 rounded-full px-5 py-2"
                  onClick={() => setShowShareModal(!showShareModal)}
               >
                  Filter <ChevronDown size={18} />{" "}
               </button>

               <button className="font-bold text-sm flex items-center gap-2 bg-slate-200 rounded-full px-5 py-2">
                  Export List <ArrowDownToLine size={18} />
               </button>
            </div>
            
         </div>
         <div className="w-full h-[1px] bg-slate-200 rounded-3xl mb-9"></div>

         <div className="flex flex-col gap-4 ">
            {isLoading ? (
               <div>Loading...</div>
            ) : filteredTransactions && filteredTransactions.length > 0 ? (
               filteredTransactions.map((transaction, index) => (
                  <div
                     key={index}
                     className="flex justify-between items-center"
                  >
                     <div className="flex gap-3 items-center">
                        <div className="border bg-[#E3FCF2] rounded-full p-4 ">
                           <MoveUpRight color="green" />
                        </div>
                        <div className="flex flex-col justify-between">
                           <p className="font-[500] text-base">
                              {" "}
                              {transaction.metadata?.product_name || ""}
                           </p>
                           <p className="text-[#56616B] text-sm font-normal ">
                              {" "}
                              {transaction.metadata?.name || ""}
                           </p>
                        </div>
                     </div>
                     <div className="flex flex-col">
                        <p className="font-bold text-base">
                           USD {transaction.amount}
                        </p>
                        <p className="text-[#56616B] text-sm font-normal ">
                           {" "}
                           {formatDate(transaction.date)}
                        </p>{" "}
                     </div>
                  </div>
               ))
            ) : (
               <div className="text-center">No data</div>
            )}
         </div>
      </div>
   );
};

export default Banner;
