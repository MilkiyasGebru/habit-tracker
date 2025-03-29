"use client"

import {CgBot } from "react-icons/cg";
import {GoKebabHorizontal} from "react-icons/go";
import {useRef, useState, useEffect} from "react";


export default function Habit({data}){

    const [displayMenu, setDisplayMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(()=>{
        function handleClickOutside(event){
            if (menuRef.current  && !menuRef.current.contains(event.target)){
                setDisplayMenu(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        }

    },[])

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
            <div className="px-1 py-1 cursor-pointer relative "  >
                <GoKebabHorizontal onClick={()=> setDisplayMenu(!displayMenu)} />
                {displayMenu && <div className="flex flex-col bg-white border rounded-md border-gray-100 w-24 absolute right-6 top-0" ref={menuRef}>
                    <button
                        className="border-b border-gray-100 px-2 py-1 hover:bg-gray-100 duration-500 transition">Edit
                    </button>
                    <button className=" border-gray-100 px-2 py-1 hover:bg-gray-100 duration-500 transition">Delete
                    </button>
                </div>}
            </div>

        </div>
    )
}