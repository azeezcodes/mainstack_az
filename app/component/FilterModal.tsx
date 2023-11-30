import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250,
      },
   },
};

const names = [
   "Store Transaction",
   "Get Tipped",
   "withdrawal",
   "Charge Back",
   "CashBack",
   "Refer & Earn",
];
const FilterModal = () => {
   const [personName, setPersonName] = React.useState<string[]>([]);

   const handleChange = (event: SelectChangeEvent<typeof personName>) => {
      const {
         target: { value },
      } = event;
      setPersonName(
         // On autofill we get a stringified value.
         typeof value === "string" ? value.split(",") : value
      );
   };
   return (
      <div className="p-2">
         <div className="flex overflow-x-auto space-x-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ">
            <div className=" border flex-shrink-0 border-gray-300 py-1 px-3 rounded-full text-sm font-bold hover:bg-black hover:text-white ">
               Today
            </div>
            <div className=" border flex-shrink-0 border-gray-300 py-1 px-3 rounded-full text-sm font-bold hover:bg-black hover:text-white ">
               Last 7 days
            </div>
            <div className=" border flex-shrink-0 border-gray-300 py-1 px-3 rounded-full text-sm font-bold hover:bg-black hover:text-white">
               This Month
            </div>
            <div className=" border flex-shrink-0 border-gray-300 py-1 px-3 rounded-full text-sm font-bold hover:bg-black hover:text-white">
               Last 3 Month
            </div>
            <div className=" border flex-shrink-0 border-gray-300 py-1 px-3 rounded-full text-sm font-bold hover:bg-black hover:text-white">
               This Year
            </div>
            <div className=" border flex-shrink-0 border-gray-300 py-1 px-3 rounded-full text-sm font-bold hover:bg-black hover:text-white">
               Last Year
            </div>
            <div className=" border flex-shrink-0 border-gray-300 py-1 px-3 rounded-full text-sm font-bold hover:bg-black hover:text-white">
               All Time
            </div>
         </div>

         {/* /date range */}
         <p className="text-sm font-bold mt-4 mb-3">Date Range</p>
         <div className="flex items-center justify-between ">
            <input
               name="start"
               type="date"
               placeholder="Select date start"
               className="border border-gray-100 rounded-lg px-5 py-2 bg-[#EFF1F6] text-sm"
            />
            <input
               name="end"
               type="date"
               placeholder="Select date end"
               className="border border-gray-100 rounded-lg px-5 py-2 bg-[#EFF1F6] text-sm"
            />
         </div>
         {/* /Transition type */}
         <div>
            <p className="font-bold text-sm mt-3 mb-2">Transaction Type</p>
            <div className="w-full">
               <FormControl style={{ width: "100%" }}>
                  <Select
                     labelId="demo-multiple-checkbox-label"
                     id="demo-multiple-checkbox"
                     multiple
                     value={personName}
                     onChange={handleChange}
                     renderValue={(selected) => selected.join(", ")}
                     MenuProps={MenuProps}
                     style={{
                        width: "100%",
                        background: "#EFF1F6",
                        borderRadius: "10px",
                        height: "40px",
                        fontSize: "12px",
                     }}
                  >
                     {names.map((name) => (
                        <MenuItem
                           key={name}
                           value={name}
                           style={{ fontSize: "12px" }}
                        >
                           <Checkbox
                              checked={personName.indexOf(name) > -1}
                              style={{ fontSize: "12px" }}
                           />
                           <ListItemText
                              primary={name}
                              style={{ fontSize: "12px" }}
                           />
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            </div>
         </div>
         {/* /Transition type */}
         {/* /Transition type */}
         <div className="w-full">
            <p className="font-bold text-sm mt-3 mb-2">Transaction status</p>
            <FormControl style={{ width: "100%" }}>
               <Select
                  style={{
                     width: "100%",
                     background: "#EFF1F6",
                     borderRadius: "10px",
                     height: "40px",
                     fontSize: "12px",
                  }}
               >
                  <MenuItem value={10}>Successful</MenuItem>
               </Select>
            </FormControl>
         </div>
         {/* /Transition type */}
      </div>
   );
};

export default FilterModal;
