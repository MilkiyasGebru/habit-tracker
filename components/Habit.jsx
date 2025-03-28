import {CgBot, CgMenu } from "react-icons/cg";
import {CiMenuKebab} from "react-icons/ci";
import {GiDonerKebab} from "react-icons/gi";



export default function Habit({data}){
    return (
        <div className="border rounded-md px-3 py-2 flex justify-between bg-[#f7f7f7] border-gray-100">

            <div className="flex flex-col">
                <div className="flex items-center gap-x-2">
                    <CgBot className="text-3xl"/>
                    <span className="text-xl">{data.title}</span>
                </div>

                <div className="flex items-center gap-x-2 text-sm">
                    {data.topics.map((topic,index)=> (
                        <div className="px-2 py-1 border rounded-md" key={index}>
                            {topic}
                        </div>
                    ))}

                </div>

            </div>
            <div>
                <CiMenuKebab />
            </div>
        </div>
    )
}