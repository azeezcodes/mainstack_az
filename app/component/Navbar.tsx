import React from 'react'
import Image from 'next/image';
import {
   Banknote,
   GanttChartSquare,
   Home,
   Users,
   LayoutGrid,
   MessageSquare,
   Bell,
   Menu
} from "lucide-react";

const Navbar = () => {
  return (
     <div className="w-full rounded-[10rem] md:flex hidden items-center justify-between h-[65px] shadow-md px-4">
        <div>
           <Image src="/mainstack.svg" width={34} height={34} alt="icon" />
        </div>
        <div className=" flex gap-10 ">
           <div className="flex items-center gap-2 justify-center">
              <div>
                 <Home size={20} strokeWidth={1.25} />
              </div>
              <p>Home</p>
           </div>
           <div className="flex items-center gap-2 justify-center">
              <div>
                 <GanttChartSquare size={20} strokeWidth={1.25} />
              </div>
              <p>Analytics</p>
           </div>
           <div className="flex items-center gap-2 justify-center">
              <div>
                 <Banknote size={20} strokeWidth={1.25} />
              </div>
              <p>Revenue</p>
           </div>
           <div className="flex items-center gap-2 justify-center">
              <div>
                 <Users size={20} strokeWidth={1.25} />
              </div>
              <p>CRM</p>
           </div>
           <div className="flex items-center gap-2 justify-center">
              <div>
                 <LayoutGrid size={20} strokeWidth={1.25} />
              </div>
              <p>Apps</p>
           </div>
        </div>
        <div className='flex items-center justify-center gap-6 '>
           <Bell size={20} strokeWidth={1.25} />
           <MessageSquare size={20} strokeWidth={1.25} />

           <div className="bg-gray-100 rounded-full flex justify-center items-center gap-2 p-1 ">
              <p className="border rounded-full text-white bg-black px-1 py-[2px] font-semibold text-sm"  >OJ</p>
              <Menu size={20} strokeWidth={1.25} />
           </div>
        </div>
     </div>
  );
}

export default Navbar