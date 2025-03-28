import {CgArrowLeft, CgArrowRight,CgMathPlus} from "react-icons/cg";
import Habit from "@/components/Habit";
import {useContext} from "react";
import {DateContext} from "@/context/DateContext";
import {get_day_name, get_month_name} from "@/utils/date_util";

// ArrowLeft

const data = {
    title: "Reading a book",
    topics : ["health","gym"]
}

const unfiltered_datas = [
    {
    title: "Reading a book",
    topics : ["health",]
},
    {
        title: "Watching a movie",
        topics : ["health","gym"]
    },
    {
        title: "Reading a book",
        topics : ["health","gym","abstract"]
    },]

export default function HabitList({topic, search_title}) {

    const {calendar_date, setCalendarDate} = useContext(DateContext)
    let datas = unfiltered_datas.filter(data=> topic==="" || data.topics.includes(topic))
    datas = datas.filter(data => search_title ==="" || data.title.includes(search_title))

    return (
        <div className="flex flex-col bg-white gap-4 p-4 border rounded-md shadow-md border-gray-100">
            <div className="flex justify-between items-center">

                <div className="flex items-center gap-x-4">
                    <div className="flex flex-col">
                        <span className="text-xl font-semibold">{get_day_name(calendar_date)}</span>
                        <span>{calendar_date.getDate()} {get_month_name(calendar_date)}, {calendar_date.getFullYear()} </span>
                    </div>

                    <div className="flex gap-x-1">
                        <div className="px-1 py-1 border rounded-full flex items-center cursor-pointer" onClick={()=>{setCalendarDate(new Date(calendar_date.getTime() - 24*60*60*1000))}}>
                            <CgArrowLeft className=""/>
                        </div>
                        <div className="px-1 py-1 border rounded-full flex items-center cursor-pointer" onClick={()=>{setCalendarDate(new Date(calendar_date.getTime() + 24*60*60*1000))}}>
                            <CgArrowRight/>
                        </div>
                    </div>
                </div>


                <button className="px-2 py-1 flex items-center gap-x-2 bg-blue-400 border text-gray-100 rounded-md">
                    <CgMathPlus/>
                    <span>New Habit</span>
                </button>

            </div>
            {datas.map(((data,index) => (
                <Habit key={index} data={data} />
            )))}
        </div>
    )
}