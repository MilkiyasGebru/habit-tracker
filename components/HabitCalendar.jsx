"use client"

import {useContext, useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {DateContext} from "@/context/DateContext";


export default function HabitCalendar() {
    const {calendar_date,setCalendarDate} = useContext(DateContext)
    return (
        <div className="">
            <Calendar onChange={(val, event)=>{
                console.log("Clicked",val)
                setCalendarDate(val)}} value={calendar_date}/>
        </div>
    )
}