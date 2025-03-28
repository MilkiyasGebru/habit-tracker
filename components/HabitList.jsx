import {CgArrowLeft, CgArrowRight,CgMathPlus} from "react-icons/cg";



export default function HabitList() {
    const current_date = new Date();

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center">

                <div className="flex flex-col">
                    <span>Friday</span>
                    <span>14 June 2024</span>
                </div>

                <div className="flex gap-x-1">
                    <CgArrowLeft />
                    <CgArrowRight />
                </div>

                <button className="px-2 py-1 flex items-center gap-x-2">
                    <CgMathPlus />
                    <span>New Habit</span>
                </button>

            </div>
        </div>
    )
}