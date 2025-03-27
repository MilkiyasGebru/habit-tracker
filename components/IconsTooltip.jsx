import {CgGym, CgAdd,CgAlarm, CgAirplane, CgAbstract,CgAdidas} from "react-icons/cg";

const icons = [CgGym,CgAlarm, CgAirplane, CgAbstract,CgAdidas,CgGym, CgAdd,CgAlarm, CgAirplane, CgAbstract,CgAdidas]

export default function IconsTooltip(){
    return (
        <div className="px-3 py-2  border rounded-md mx-auto flex flex-col gap-2">
            <div className="flex justify-between">
                <h1 className="">Choose Your Icon</h1>
                <button>
                    x
                </button>
            </div>

            <div className="flex p-2 text-xl mx-auto w-5/6 gap-2 flex-wrap ">
                {icons.map(((icon,index) => (
                    <div className="py-1 px-2 border rounded-md" key={index}>
                        {icon()}
                    </div>
                )))}
            </div>

        </div>
    )
}