"use client"
import SearchArea from "@/components/SearchArea";
import HabitTopics from "@/components/HabitTopics";
import HabitList from "@/components/HabitList";
import SideBar from "@/components/SideBar";
import {useContext, useState} from "react";
import {DateContext} from "@/context/DateContext";
import AddHabit from "@/components/AddHabit";

export default function Home() {

    // For handling the topics
    const topics = ["gym","alarm","airplane","abstract","adidas","health"]
    const [topic, setTopic] = useState(-1)
    const handleChangeTopic = (topic_index)=>{
        setTopic(topic_index)
    }

  // For handling the Search
    const [search, setSearch] = useState("")
    const handleSearch = (search_title)=>{
        setSearch(search_title)
    }

  //   Handling the Date using Context because it's used by many components

    const [calendar_date, setCalendarDate] = useState(new Date(2025,5,7));


    return (
      <DateContext.Provider value={{calendar_date, setCalendarDate}}>
          <div className="flex  flex-col-reverse md:flex-row bg-[#f7f7f7] p-4 gap-3">
              <div className="flex flex-col w-full md:w-3/4 gap-4">
                  <SearchArea handleSearch={handleSearch} search_title={search}/>
                  <HabitTopics  handleChangeTopic={handleChangeTopic} current_topic={topic}/>
                  <HabitList topic={`${topic !== -1? topics[topic]:""}`} search_title={search}/>
              </div>
              <SideBar />
          </div>
          {/*<AddHabit />*/}
      </DateContext.Provider>

  );
}
