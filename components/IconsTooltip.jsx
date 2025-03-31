import {CgGym, CgAdd,CgAlarm, CgAirplane, CgAbstract,CgAdidas} from "react-icons/cg";

const icons = [CgGym,CgAlarm, CgAirplane, CgAbstract,CgAdidas,CgGym, CgAdd,CgAlarm, CgAirplane, CgAbstract,CgAdidas]

const another_icons = [
    ["gym",CgGym],
    ["alarm",CgAlarm],
    ["airplane",CgAirplane],
    ["abstract",CgAbstract],
    ["adidas",CgAdidas]
]

export default function IconsTooltip({setIconName,setToolTip, toolTipRef}){

    const handleIconClick = (icon_name)=>{
        setIconName(icon_name)
        setToolTip(true)
    }

    return (
        <div className="px-3 py-2  border rounded-md mx-auto flex flex-col gap-2" ref={toolTipRef}>
            <div className="flex justify-between">
                <h1 className="">Choose Your Icon</h1>
                <button>
                    x
                </button>
            </div>

            <div className="flex p-2 text-xl mx-auto w-5/6 gap-2 flex-wrap ">
                {another_icons.map(((icon,index) => (
                    <div className="py-1 px-2 border rounded-md" key={index} onClick={()=>(handleIconClick(icon[0]))}>
                        {icon[1]()}
                    </div>
                )))}
            </div>

        </div>
    )
}