import { ListFilter, MapPin, RefreshCcw, SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { Button } from "@/components/ui/button";
const TopFilter = () => {
  return (
    <aside className="py-6 bg-[#F2F2F2] min-h-[152px] w-full flex justify-center items-center">
      <div className="flex flex-wrap justify-center gap-3 w-[90%]">
        <InputGroup
          className=" border
                            focus-within:ring-0
                            focus-within:ring-transparent
                            focus-within:border-[#000000]
                           h-12 md:h-14 min-w-full w-full md:w-[470px] py-3 md:min-w-0
                           outline-none rounded-[10px] border-[#B3B3B3] bg-white"
        >
          <InputGroupInput
            placeholder="Search by doctor name or specialty"
            className="  text-gray-800 outline-none text-base font-medium"
          />
          <InputGroupAddon>
            <SearchIcon className="text-gray-400 mr-2" size={20} />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup
          className=" border
                            focus-within:ring-0
                            focus-within:ring-transparent
                            focus-within:border-[#000000] h-12 md:h-14 min-w-full w-full md:w-52 md:min-w-0 py-3 rounded-[10px]
                             border-[#B3B3B3]  bg-white"
        >
          <InputGroupInput
            placeholder="City"
            className="  text-gray-800 outline-none text-base font-medium"
          />
          <InputGroupAddon>
            <MapPin className="text-gray-400 mr-2" size={20} />
          </InputGroupAddon>
        </InputGroup>

        <Button
          size={"sm"}
          variant={"outline"}
          className="flex justify-center md:justify-evenly  gap-2 h-10 md:h-14 w-[50%] md:max-w-[192px] py-3 px-10  rounded-[10px] font-semibold"
        >
          <ListFilter />
          Filter
        </Button>

        <Button
          size={"sm"}
          variant={"outline"}
          className="flex justify-center md:justify-evenly gap-2 h-10 md:h-14 w-[50%] md:max-w-[192px] py-3 px-10  rounded-[10px] font-semibold"
        >
          <RefreshCcw />
          Refresh
        </Button>
      </div>
    </aside>
  );
};

export default TopFilter;
