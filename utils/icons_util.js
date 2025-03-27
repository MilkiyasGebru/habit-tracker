import {CgGym, CgAdd,CgAlarm, CgAirplane, CgAbstract,CgAdidas} from "react-icons/cg";

const icons = new Map(
    [
        ["gym",CgGym],
        ["alarm",CgAlarm],
        ["airplane",CgAirplane],
        ["abstract",CgAbstract],
        ["adidas",CgAdidas]
    ]
)


export default function create_icons(icon_name){


    return icons.get(icon_name)()
}
