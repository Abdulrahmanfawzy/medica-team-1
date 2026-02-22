import DoctorAvailableOnline from "./Components/doctor_available_online";
import Button from "./Components/button";
export default function onlineConsultation() {
    return (
        <main className="lg:px-24 md:px-16 px-5">
            <h2 className="text-[#097178] lg:text-3xl font-bold text-xl">
                Doctors Available Online
            </h2>
            <div className="flex justify-between items-center gap-5 flex-wrap my-4">
                <div className="md:flex grid grid-cols-2 gap-3 flex-wrap">
                    <Button text="Filter by Specialty" />
                    <Button
                        text="Filter by Location"
                        DropdownMenuItemText={[
                            "Egypt",
                            "United Arab Emirates",
                            "Kuwait",
                            "Qatar",
                            "Bahrain",
                            "Oman",
                        ]}
                    />
                    <Button
                        text="Availability"
                        DropdownMenuItemText={["Available", "Not Available"]}
                        
                    />
                </div>
                <Button
                    text="Filter by Specialty"
                    DropdownMenuItemText={[
                        "Nearest",
                        "Cheapest",
                        "Highest Rated",
                        "Most Experienced",
                        "Earliest Available",
                        "Female Doctor",
                        "Male Doctor",
                    ]}
                />
            </div>
            <div className="flex flex-col w-full gap-5 items-stretch justify-center">
                {Array.from({ length: 6 }).map((_, index) => {
                    return (
                        <DoctorAvailableOnline
                            key={index}
                            image="image.png"
                            name="Dr. Sarah Ahmed"
                            rate="4.5"
                            specialist="Dermatologist"
                            location="New York, NY"
                            exp="15"
                        />
                    );
                })}
            </div>
        </main>
    );
}
