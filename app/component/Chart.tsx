'use client'
import React from 'react'
import { useWalletQuery } from '../query/useWalletQuery'
import Image from 'next/image'

const Chart = () => {
    const { data } = useWalletQuery()
    
    const balance = data ? data?.balance : "********"
  return (
     <div className="w-[770px]">
        <div className="flex w-fit gap-10 items-center">
           <div className="grid gap-1 ">
              <p className="font-sm text-[14px]">Available Balance</p>
              <p className="font-bold text-[34px]">USD {balance} </p>
           </div>
           <div className="bg-black text-white rounded-3xl px-8 py-2 h-fit">
              <p className="font-sm text-[14px]">Withdraw</p>
           </div>
        </div>
        <div className="mt-3">
           <Image
              alt="chart"
              src="/line.png"
              width={700}
              height={500}
              priority
           />
        </div>
        <div className="flex justify-between border-t-2 border-gray-200 w-full pt-3 mt-4">
           <p>Apr 1, 2022</p>
           <p>Apr 30, 2022</p>
        </div>
     </div>
  );
}

export default Chart