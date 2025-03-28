import Image from "next/image"
import HabitCalendar from "@/components/HabitCalendar";

export default function SideBar() {
    return (
        <div className="bg-white border border-gray-100 p-4  flex flex-col gap-4 items-center rounded-md shadow-lg">
            <div className="flex flex-col gap-2">
                <Image src="/Miki_Profile_Picture.jpg" width={150} height={150} alt="Miki Logo" className="rounded-full" />
                <span className="text-xl font-bold" >Milkiyas Gebru</span>
            </div>
            <HabitCalendar />
        </div>
    )
}