import {CgBot, CgMenu } from "react-icons/cg";



export default function Habit(){
    return (
        <div className="border rounded-md px-3 py-2 flex justify-between">

            <div className="flex flex-col">
                <div className="flex items-center">
                    <CgBot/>
                    <span>Reading a book</span>
                </div>

                <div className="flex items-center">
                    <div className="px-2 py-1 border rounded-md">
                        Health
                    </div>
                    <div className="px-2 py-1 border rounded-md">
                        Health
                    </div>
                </div>

            </div>
            <div>
                <CgMenu />
            </div>
        </div>
    )
}