"use client"

import {CgGym} from "react-icons/cg";
import IconsTooltip from "@/components/IconsTooltip";
import {useState} from "react";

export default function AddHabit() {

    const [habitName, setHabitName] = useState("");
    const [toolTip, setToolTip] = useState(true);
    const [iconName, setIconName] = useState("");

    return (
        <div className="flex flex-col p-8 w-3/5 gap-6 border rounded-md">
            {/*Title*/}
            <h1 className="text-2xl font-bold ">Add New Habit</h1>

            {/*    Input Habit Name*/}

            <div className="relative flex flex-col gap-3 z-10">
                <span>Habit Name</span>
                <div className="flex flex-row gap-2">
                    <input type="text" className="border rounded-md w-3/5 px-2 py-1 " value={habitName} onChange={(e) => setHabitName(e.target.value)} />
                    <button className="border rounded-md px-2 py-1" onClick={()=>setToolTip(!toolTip)}>
                        <CgGym />
                    </button>
                </div>
                <div className={`absolute bg-white w-1/4  top-[20%] left-[50%] ${toolTip? "hidden" : ""}`}>
                    <IconsTooltip />
                </div>
            </div>


            {/*    Frequency of the Habit*/}
            <div className="relative flex flex-col gap-3 z-0">
                <span className="font-semibold">Repeat</span>
                <div className="flex gap-3">
                    <button className="px-2 py-1 border rounded-md">
                        Daily
                    </button>
                    <button className="px-2 py-1 border rounded-md">
                        Weekly
                    </button>
                </div>
            </div>

        {/*    On These days*/}
            <div className="flex flex-col gap-3">
                <span>On These Days</span>
                <div className="flex gap-2 ">
                    <button className="px-2 py-1 border rounded-md">Mo</button>
                    <button className="px-2 py-1 border rounded-md">Tu</button>
                    <button className="px-2 py-1 border rounded-md">We</button>
                    <button className="px-2 py-1 border rounded-md">Th</button>
                    <button className="px-2 py-1 border rounded-md">Fr</button>
                    <button className="px-2 py-1 border rounded-md">Sa</button>
                    <button className="px-2 py-1 border rounded-md">Su</button>
                </div>
            </div>

        {/*    Areas*/}
            <div className="flex flex-col gap-3">
                <h2 className="text-lg font-semibold">Areas</h2>
            </div>

        {/*    Button*/}
            <button className="px-3 py-2 rounded-md border w-1/4">
                Add a Habit
            </button>


        </div>
    )

}