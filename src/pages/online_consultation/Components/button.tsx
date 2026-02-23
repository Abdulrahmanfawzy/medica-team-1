import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu-for-consultation";

export default function Button({
    text,
    DropdownMenuItemText = [],
}: {
    text?: string;
    DropdownMenuItemText?: string[];
}) {
    const [checkedItems, setCheckedItems] = useState<boolean[]>(
        DropdownMenuItemText.map(() => false)
    );

    const toggleItem = (index: number) => {
        setCheckedItems((prev) =>
            prev.map((item, i) => (i === index ? !item : item))
        );
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    type="button"
                    className={`text-white bg-[#097178]  md:w-50 border-[#097178] py-3 px-6 rounded-lg font-bold cursor-pointer  ${text === "Filter by Specialty" ? "w-full":""}`}
                >
                    {text}
                </button>
            </DropdownMenuTrigger>

            {DropdownMenuItemText.length > 0 && (
                <DropdownMenuContent className="border-0">
                    <DropdownMenuGroup>
                        {DropdownMenuItemText.map((item, index) => (
                            <DropdownMenuItem
                                key={index}
                                onSelect={(e) => e.preventDefault()} 
                                onClick={() => toggleItem(index)}
                                className="hover:bg-[#097178] hover:text-white cursor-pointer flex justify-between "
                            >
                                {item}
                                <input
                                    type="checkbox"
                                    checked={checkedItems[index]}
                                    readOnly
                                />
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    );
}