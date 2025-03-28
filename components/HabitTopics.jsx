import {CgAbstract, CgAdidas, CgAirplane, CgAlarm, CgGym} from "react-icons/cg";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

const another_icons = [
    ["gym",CgGym],
    ["alarm",CgAlarm],
    ["airplane",CgAirplane],
    ["abstract",CgAbstract],
    ["adidas",CgAdidas]
]

export default function HabitTopics() {
    return (
        <div className="flex items-center px-3 py-2 border rounded-md">
            {another_icons.map((icon_list,index)=>
                <div key={index} className="flex gap-x-1 px-2 py-1 items-center text-xl">
                    {icon_list[1]()}
                    <span>{icon_list[0]}</span>
                </div>
            )}
        </div>
    )
}