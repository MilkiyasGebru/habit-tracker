"use client"

import {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


export default function HabitCalendar() {
    const [calendar_date, setCalendarDate] = useState(new Date());
    return (
        <div className="w-1/2 ">
            <Calendar onChange={setCalendarDate} value={calendar_date}/>
        </div>
    )
}