import { Activity, Baby, Bone, Brain, Heart, Tablets } from "lucide-react";
import TopFilter from "./components/TopFilter";

import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxItem,
    ComboboxList,
    ComboboxValue,
    useComboboxAnchor,
} from "@/components/ui/combobox"

const specialties = [
    { name: "Dermatology", icon: <Tablets size={32} /> },
    { name: "Pediatrics", icon: <Baby size={32} /> },
    { name: "Cardiology", icon: <Heart size={32} /> },
    { name: "Orthopedics", icon: <Bone size={32} /> },
    { name: "Neurology", icon: <Brain size={32} /> },
    { name: "Dentistry", icon: <Activity size={32} /> },
];
const specialtiesName = specialties.map((item) => (item.name))

const FindDoctor = () => {
    const anchor = useComboboxAnchor()
    return (
        <section>
            <TopFilter />
            <div className="flex w-full h-300">
                <aside className="w-full md:w-1/4">
                    <div>
                        <label className="font-medium text-base text-[#202020]">Specialty</label>
                        <Combobox
                            multiple
                            autoHighlight
                            items={specialtiesName}
                            defaultValue={[specialtiesName[0]]}

                        >
                            <ComboboxChips ref={anchor} className="mb-1 w-full max-w-xs min-h-12 md:min-h-14">
                                <ComboboxValue>
                                    {(values) => (
                                        <>
                                            {values.map((value: string) => (
                                                <ComboboxChip key={value}>{value}</ComboboxChip>
                                            ))}
                                            <ComboboxChipsInput />
                                        </>
                                    )}
                                </ComboboxValue>
                            </ComboboxChips>
                            <ComboboxContent anchor={anchor}>
                                <ComboboxEmpty>No items found.</ComboboxEmpty>
                                <ComboboxList>
                                    {(item) => (
                                        <ComboboxItem key={item} value={item}>
                                            {item}
                                        </ComboboxItem>
                                    )}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                    </div>
                </aside>
                <div className="w-full md:w-3/4 bg-gray-500"></div>
            </div>
        </section>
    );
};

export default FindDoctor;
