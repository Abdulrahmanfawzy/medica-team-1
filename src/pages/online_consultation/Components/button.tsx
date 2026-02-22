import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Button({
    text,
    DropdownMenuItemText = [],
}: {
    text?: string;
    DropdownMenuItemText?: string[];
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button type="button" className="text-white  bg-[#097178] border border-[#097178] py-3 px-6 rounded-lg font-bold cursor-pointer">
                    {text}
                </button>
            </DropdownMenuTrigger>
            {DropdownMenuItemText.length > 0 && (
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        {DropdownMenuItemText.map((item, index) => (
                            <DropdownMenuItem key={index}>
                                {item}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    );
}
