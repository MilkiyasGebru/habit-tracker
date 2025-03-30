import {CgAbstract, CgAdidas, CgAirplane, CgAlarm, CgBorderAll, CgGym,CgHeart} from "react-icons/cg";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

const another_icons = [
    ["gym",CgGym],
    ["alarm",CgAlarm],
    ["airplane",CgAirplane],
    ["abstract",CgAbstract],
    ["adidas",CgAdidas],
    ["Health",CgHeart],
]

export default function HabitTopics({handleChangeTopic,current_topic}) {
    return (
        <div className="flex items-center px-3 py-2 border rounded-md bg-white border-gray-100 font-thin">

            {another_icons.map((icon_list,index)=>
                <div key={index} className={`flex gap-x-1 px-2 py-1 items-center ${current_topic === index? "border rounded-md bg-blue-500 text-white":""} cursor-pointer`} onClick={()=>handleChangeTopic(index)}>
                    {icon_list[1]()}
                    <span className="font-thin">{icon_list[0]}</span>
                </div>
            )}
        </div>
    )
}