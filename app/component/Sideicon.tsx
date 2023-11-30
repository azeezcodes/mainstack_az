 import React from 'react'
import Image from 'next/image';
 
 const Sideicon = () => {
   return (
      <div className="flex flex-col gap-6 py-4 px-2 shadow-md rounded-full">
         <Image src="/icon1.png" alt="icon" width={18} height={18} priority />
         <Image src="/icon2.png" alt="icon" width={18} height={18} priority />
         <Image src="/icon3.svg" alt="icon" width={18} height={18} priority />
         <Image src="/icon4.svg" alt="icon" width={18} height={18} priority />
      </div>
   );
 }
 
 export default Sideicon