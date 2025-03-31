"use client"

import {useContext, useEffect} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {DateContext} from "@/context/DateContext";


export default function HabitCalendar() {
    const {calendar_date,setCalendarDate} = useContext(DateContext)
    return (
        <div >
            <Calendar onChange={setCalendarDate} value={calendar_date}  showNeighboringMonth={false} activeStartDate={calendar_date} />
        </div>
    )
}