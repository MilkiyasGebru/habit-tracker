import {CgSearch} from "react-icons/cg";
export default function SearchArea({handleSearch,search_title}){

    return (
        <div className="flex items-center justify-between border p-4 rounded-md bg-white border-gray-100">
            <div className="flex flex-col">
                <h1 className="text-xl font-semibold">Hi Milkiyas</h1>
                <p>Welcome Back</p>
            </div>
            <div className="border px-3 py-2 flex gap-2 items-center rounded-2xl bg-[#f7f7f7] border-gray-100">
                <CgSearch />
                <input type="text" className="bg-transparent outline-none" placeholder="Search..." value={search_title} onChange={(e)=>handleSearch(e.target.value)}/>
            </div>
        </div>
    )


}