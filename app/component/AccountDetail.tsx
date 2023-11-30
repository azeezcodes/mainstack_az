'use client'
import { AlertCircle } from 'lucide-react'
import React from 'react'
import { useWalletQuery } from '../query/useWalletQuery';

const AccountDetail = () => {
   const {data} = useWalletQuery()
  return (
     <div className="flex flex-col gap-3 w-[270px] ">
        <div className="grid one ">
           <div className="flex justify-between w-full items-center">
              <p className="text-sm text-[#56616B] font-light">
                 Ledger Balance
              </p>
              <AlertCircle size={14} strokeWidth={1.25} />
           </div>
           <p className="font-bold text-[28px]">USD {data?.balance}</p>
        </div>
        <div className="grid two ">
           <div className="flex justify-between w-full items-center">
              <p className="text-sm text-[#56616B] font-light">Total Payout</p>
              <AlertCircle size={14} strokeWidth={1.25} />
           </div>
           <p className="font-bold text-[28px]">USD {data?.total_payout}</p>
        </div>
        <div className="grid three ">
           <div className="flex justify-between w-full items-center">
              <p className="text-sm text-[#56616B] font-light">Total Revenue</p>
              <AlertCircle size={14} strokeWidth={1.25} />
           </div>
           <p className="font-bold text-[28px]">USD {data?.total_revenue}</p>
        </div>
        <div className="grid four ">
           <div className="flex justify-between w-full items-center">
              <p className="text-sm text-[#56616B] font-light">
                 Pending Payout
              </p>
              <AlertCircle size={14} strokeWidth={1.25} />
           </div>
           <p className="font-bold text-[28px]">USD {data?.pending_payout}</p>
        </div>
     </div>
  );
}

export default AccountDetail