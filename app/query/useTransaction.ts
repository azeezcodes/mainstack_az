'use client'
import useSWR from "swr";

const API_URL = process.env.NEXT_PUBLIC_SHARED_API_URL;

export type Payment = {
   amount: number;
   metadata?: {
      name: string;
      type: string;
      email: string;
      quantity?: number;
      country: string;
      product_name?: string;
   };
   payment_reference: string;
   status: string;
   type: string;
   date: string;
};


const fetchData = async () => {
   try {
      const response = await fetch(`${API_URL}/transactions`);

      if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const typedData: Payment[] = await response.json();
      return typedData;
   } catch (error) {
       console.error("Error fetching data:", error);
     
      throw error; 
   }
};

export const useTransaction = () => {
    const { data, error, isLoading } = useSWR("transaction", fetchData);
    console.log(data)
    return {
       data,
       error,
       isLoading,
    };
}