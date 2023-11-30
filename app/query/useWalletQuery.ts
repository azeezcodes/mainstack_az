"use client";
import useSWR from "swr";

const API_URL = process.env.NEXT_PUBLIC_SHARED_API_URL;

type WalletData = {
   balance: number;
   total_payout: number;
   total_revenue: number;
   pending_payout: number;
   ledger_balance: number;
};

const fetchData = async () => {
   try {
      const response = await fetch(`${API_URL}/wallet`);

      if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const typedData: WalletData = await response.json();
      return typedData;
   } catch (error) {
      console.error("Error fetching data:", error);

      throw error;
   }
};

export const useWalletQuery = () => {
   const { data, error, isLoading } = useSWR("user", fetchData, {
      refreshInterval: 1000 * 60 * 60 * 2,
   });
  
   return {
      data,
      error,
      isLoading,
   };
};
