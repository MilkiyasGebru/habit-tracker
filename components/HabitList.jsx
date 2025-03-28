import {CgArrowLeft, CgArrowRight,CgMathPlus} from "react-icons/cg";
import Habit from "@/components/Habit";
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
    const current_date = new Date();
    const array = [1,2,3,4]

    let datas = unfiltered_datas.filter(data=> topic==="" || data.topics.includes(topic))
    datas = datas.filter(data => search_title ==="" || data.title.includes(search_title))
    return (
        <div className="flex flex-col bg-white gap-4 p-4 border rounded-md shadow-md border-gray-100">
            <div className="flex justify-between items-center">

                <div className="flex items-center gap-x-4">
                    <div className="flex flex-col">
                        <span className="text-xl font-semibold">Friday</span>
                        <span>14 June 2024</span>
                    </div>

                    <div className="flex gap-x-1">
                        <div className="px-1 py-1 border rounded-full flex items-center">
                            <CgArrowLeft className="  "/>
                        </div>
                        <div className="px-1 py-1 border rounded-full flex items-center">
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