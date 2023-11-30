"use client";
import useSWR from "swr";

const API_URL = process.env.NEXT_PUBLIC_SHARED_API_URL;

type UserData = {
   first_name: string;
   last_name: string;
   email: string;
};

const fetchData = async () => {
   try {
      const response = await fetch(`${API_URL}/users`);

      if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const typedData: UserData = await response.json();
      return typedData;
   } catch (error) {
      console.error("Error fetching data:", error);

      throw error;
   }
};

export const useUserQuery = () => {
   const { data, error, isLoading } = useSWR("user", fetchData, {
      refreshInterval: 1000 * 60 * 60 * 2,
   });
   console.log(data);
   return {
      data,
      error,
      isLoading,
   };
};
