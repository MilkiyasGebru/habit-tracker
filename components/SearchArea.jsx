import {CgSearch} from "react-icons/cg";


export default function SearchArea(){

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col">
                <h1 className="text-xl font-semibold">Hi Milkiyas</h1>
                <p>Welcome Back</p>
            </div>
            <div className="border px-3 py-2 flex gap-2 items-center rounded-2xl ">
                <CgSearch />
                <input type="text" className="bg-transparent outline-none" placeholder="Search..."/>
            </div>
        </div>
    )


}