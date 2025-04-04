"use client"

import {CgArrowDown, CgArrowUp} from "react-icons/cg";
import IconsTooltip from "@/components/IconsTooltip";
import {useRef, useState, useEffect} from "react";
import create_icons from "@/utils/icons_util";

const area_buttons = ["Health","Gym","Food"]

export default function AddHabit() {

    const [habitName, setHabitName] = useState("");
    const [toolTip, setToolTip] = useState(true);
    const [iconName, setIconName] = useState("gym");
    const [areas, setAreas] = useState([]);
    const [displayAreas, setDisplayAreas] = useState(false)
    const toolTipRef = useRef(null);
    const optionsRef = useRef(null);

    console.log("I am re-rendering",toolTip)

    useEffect(()=>{
        function handleClickOutside(event){
            if (toolTipRef.current && !toolTipRef.current.contains(event.target)){
                setToolTip(true);
            }
        }

        function handleOptionsClickOutside(event){
            if (optionsRef.current && !optionsRef.current.contains(event.target)){
                setDisplayAreas(false)
            }
        }

        document.addEventListener("mousedown", (event)=>{
            handleOptionsClickOutside(event);
            handleClickOutside(event);
        });
        // document.addEventListener("mousedown",handleOptionsClickOutside)

        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("mousedown",handleOptionsClickOutside);
        }

    },[])


    const handleActionButtonClick = (area)=>{
        console.log("area is ",area)
        if (areas.includes(area)){
            setAreas(areas.filter(areas_element => areas_element !== area));
            console.log(areas.filter(areas_element => areas_element !== area));
        }
        else{
            setAreas([...areas,area]);
            console.log([...areas,area]);
        }
    }


    return (
        <div className="flex flex-col px-8 pt-8 pb-12 w-3/5 gap-6 border rounded-md">
            {/*Title*/}
            <h1 className="text-2xl font-bold ">Add New Habit</h1>

            {/*    Input Habit Name*/}

            <div className="relative flex flex-col gap-3 z-10">
                <span>Habit Name</span>
                <div className="flex flex-row gap-2">
                    <input type="text" className="border rounded-md w-3/5 px-2 py-1 " value={habitName} onChange={(e) => setHabitName(e.target.value)} />
                    <button className="border rounded-md px-2 py-1" onClick={()=>setToolTip(!toolTip)}>
                        {create_icons(iconName)}
                    </button>
                </div>
                <div className={`absolute bg-white w-1/4  top-[20%] left-[50%] ${toolTip? "hidden" : ""}`}>
                    <IconsTooltip setIconName={setIconName} setToolTip={setToolTip} toolTipRef={toolTipRef}/>
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
            <div className="flex flex-col gap-3 relative z-10">
                <h2 className="text-lg font-semibold">Areas</h2>

                <div>


                    <div className="px-4  py-2 flex items-center justify-between  border rounded h-12 " onClick={()=>{setDisplayAreas(!displayAreas)}}>
                        <div className="flex gap-x-2">
                            {areas.map((field,index) => {

                                return <div className="py-1 w-fit border px-2 rounded-md" key={index}>
                                    {field}
                                </div>
                            })}
                        </div>
                        {!displayAreas && <CgArrowDown className=""/>}
                        {displayAreas && <CgArrowUp className=""/>}

                    </div >
                        <div className={`flex flex-col items-start border rounded shadow-md absolute w-full bg-white ${displayAreas? "":"hidden"}`} ref={optionsRef}>
                            {area_buttons.map((area_button_name,index) =>
                            <button className="px-4 py-1  w-full text-left hover:bg-gray-100" key={index} onClick={(e)=>{handleActionButtonClick(area_button_name)}}>
                                {area_button_name}
                            </button>)}


                    </div>
                </div>
            </div>

            {/*    Button*/}
            <button className="px-3 py-2 rounded-md border w-1/4 relative z-0">
                Add a Habit
            </button>


        </div>
    )

}